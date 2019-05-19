import React from 'react'

class BlogPost extends React.Component {
  state = {}

  componentDidMount() {
    fetch(`/api/blogpost/${this.props.id}`)
      .then((res) => res.json())
      .then((blogPost) => {
        this.setState({ blogPost })
      })
  }

  render() {
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
          {this.state.blogPost ? this.state.blogPost.title : 'Loading...'}
        </div>

        {this.state.blogPost && (
          <div
            style={{
              fontSize: 20,
            }}
          >
            {this.state.blogPost.text}
          </div>
        )}
      </div>
    )
  }
}

const Page = () => (
  <div style={{ padding: 16 }}>
    <BlogPost id="001" />
    <BlogPost id="002" />
    <BlogPost id="003" />
  </div>
)

const App = () => <Page />

export default Page
