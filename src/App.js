import React from 'react'

const BlogPost = (props) => (
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
      {props.blogPost.title}
    </div>
    <div
      style={{
        fontSize: 20,
      }}
    >
      {props.blogPost.text}
    </div>
  </div>
)

const Page = () => (
  <div style={{ padding: 16 }}>
    <BlogPost
      blogPost={{
        title: 'Post 1',
        text:
          'Lorem ipsum dolor sit amet, ' +
          'consectetur adipiscing elit. ' +
          'Duis condimentum efficitur lacus ac gravida.',
      }}
    />
    <BlogPost
      blogPost={{
        title: 'Post 2',
        text:
          'Pellentesque luctus tincidunt dolor, ' +
          'eu scelerisque lorem pulvinar sit amet. ' +
          'Praesent tellus mi, condimentum at tempus sit ' +
          'amet, tempus ut nulla.',
      }}
    />
    <BlogPost
      blogPost={{
        title: 'Post 3',
        text:
          'Curabitur sagittis ut enim a porta. ' +
          'In ut placerat dolor. Nam vel erat gravida, ' +
          'aliquam turpis eget, vulputate metus.',
      }}
    />
  </div>
)

const App = () => <Page />

export default Page
