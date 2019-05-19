import 'source-map-support/register' // enables node stacktraces with webpack
import express from 'express'
import React from 'react'
import { renderToStaticMarkup, renderToString } from 'react-dom/server'
import App from './App'
import blogPostService from './blogPostService'
import { createStore } from './store'
import serialize from 'serialize-javascript'

const app = express()

console.log(`${__dirname}bundle.js`)

// serve bundle.js file
app.use('/bundle.js', express.static(`${__dirname}/bundle.js`))

const loadData = () =>
  Promise.all([
    blogPostService.get('001'),
    blogPostService.get('002'),
    blogPostService.get('003'),
  ]).then((results) => ({
    '001': results[0],
    '002': results[1],
    '003': results[2],
  }))

// render & serve HTML
app.get('/', async (req, res) => {
  const initialState = await loadData()
  const store = createStore(initialState)
  const markup = renderToString(<App store={store} />)
  const html = renderToStaticMarkup(
    <HtmlTemplate markup={markup} state={store.get()} />,
  )

  res.send(html)
})

const HtmlTemplate = (props) => (
  <html>
    <head>
      <title>My Blog</title>

      <script
        dangerouslySetInnerHTML={{
          __html: `window.initialState = ${serialize(props.state)}`,
        }}
      />
    </head>

    <body
      style={{
        margin: 0,
        fontFamily: 'Helvetica Neue',
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
