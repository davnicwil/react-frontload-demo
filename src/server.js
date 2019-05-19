import 'source-map-support/register' // enables node stacktraces with webpack
import express from 'express'
import React from 'react'
import { renderToStaticMarkup, renderToString } from 'react-dom/server'
import App from './App'
import blogPostService from './blogPostService'

const app = express()

console.log(`${__dirname}bundle.js`)

// serve bundle.js file
app.use('/bundle.js', express.static(`${__dirname}/bundle.js`))

// render & serve HTML
app.get('/', (req, res) => {
  const markup = renderToString(<App />)
  const html = renderToStaticMarkup(<HtmlTemplate markup={markup} />)

  res.send(html)
})

const HtmlTemplate = (props) => (
  <html>
    <head>
      <title>My Blog</title>
    </head>

    <body
      style={{
        margin: 0,
        fontFamily: 'Helivetica Neue',
        background: '#81D4FA',
      }}
    >
      {/* the root element of the react app */}
      <div id="root" dangerouslySetInnerHTML={{ __html: props.markup }} />

      {/* v=timestamp query string for cache busting of the bundle */}
      <script src={`/bundle.js`} />
    </body>
  </html>
)

// api endpoint for blog posts
app.get('/api/blogpost/:id', async (req, res) => {
  try {
    const blogPost = await blogPostService.get(req.params.id)

    res.send(blogPost)
  } catch (err) {
    res.status(404).send()
  }
})

app.listen(3330, () => {
  console.log('\n\nServer started on http://127.0.0.1:3330\n\n')
})
