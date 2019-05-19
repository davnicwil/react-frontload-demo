import React from 'react'
import { StoreProvider, withStore } from './store'

const BlogPost = withStore(
  class extends React.Component {
    componentDidMount() {
      fetch(`/api/blogpost/${this.props.id}`)
        .then((res) => res.json())
        .then((blogPost) => {
          this.props.store.set({
            ...this.props.store.get(),
            [blogPost.id]: blogPost,
          })
        })
    }

    render() {
      const blogPost = this.props.store.get()[this.props.id]

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
    }
  },
)

const Page = () => (
  <div style={{ padding: 16 }}>
    <BlogPost id="001" />
    <BlogPost id="002" />
    <BlogPost id="003" />
  </div>
)

const App = (props) => (
  <StoreProvider store={props.store}>
    <Page />
  </StoreProvider>
)

export default App
