import 'source-map-support/register' // enables node stacktraces with webpack
import express from 'express'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

const app = express()

console.log(`${__dirname}bundle.js`)

// serve bundle.js file
app.use('/bundle.js', express.static(`${__dirname}/bundle.js`))

// render & serve HTML
app.get('/', (req, res) => {
  const html = renderToStaticMarkup(<HtmlTemplate />)

  res.send(html)
})

const HtmlTemplate = () => (
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
      <div id="root" />

      {/* v=timestamp query string for cache busting of the bundle */}
      <script src={`/bundle.js`} />
    </body>
  </html>
)

app.listen(3330, () => {
  console.log('\n\nServer started on http://127.0.0.1:3330\n\n')
})
