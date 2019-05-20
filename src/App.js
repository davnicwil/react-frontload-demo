import React from 'react'
import { StoreProvider, withStore } from './store'
import { Frontload, frontloadConnect } from 'react-frontload'

const frontload = (props) =>
  fetch(`http://127.0.0.1:3330/api/blogpost/${props.id}`)
    .then((res) => res.json())
    .then((blogPost) => {
      props.store.set({
        ...props.store.get(),
        [blogPost.id]: blogPost,
      })
    })

const BlogPost = withStore(
  frontloadConnect(frontload)((props) => {
    const blogPost = props.store.get()[props.id]

    return (
      <div
        style={{
          boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.4)',
          lineHeight: '1.4',
          borderRadius: 5,
          padding: 16,
          maxWidth: 800,
          margin: '0 auto 32px',
          fontFamily: 'Helvetica Neue',
          background: '#fff',
        }}
      >
        <div
          style={{
            fontSize: 24,
            fontWeight: 600,
            marginBottom: 32,
          }}
        >
          {blogPost ? blogPost.title : 'Loading...'}
        </div>

        {blogPost && <div style={{ fontSize: 20 }}>{blogPost.text}</div>}
      </div>
    )
  }),
)

const Page = () => (
  <div style={{ padding: 16 }}>
    <BlogPost id="001" />
    <BlogPost id="002" />
    <BlogPost id="003" />
  </div>
)

const App = (props) => (
  <Frontload>
    <StoreProvider store={props.store}>
      <Page />
    </StoreProvider>
  </Frontload>
)

export default App
