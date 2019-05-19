const blogPosts = {
  '001': {
    id: '001',
    title: 'Post 1',
    text:
      'Lorem ipsum dolor sit amet, ' +
      'consectetur adipiscing elit. ' +
      'Duis condimentum efficitur lacus ac gravida.',
  },
  '002': {
    id: '002',
    title: 'Post 2',
    text:
      'Pellentesque luctus tincidunt dolor, ' +
      'eu scelerisque lorem pulvinar sit amet. ' +
      'Praesent tellus mi, condimentum at tempus sit ' +
      'amet, tempus ut nulla.',
  },
  '003': {
    id: '003',
    title: 'Post 3',
    text:
      'Curabitur sagittis ut enim a porta. ' +
      'In ut placerat dolor. Nam vel erat gravida, ' +
      'aliquam turpis eget, vulputate metus.',
  },
  '004': {
    id: '004',
    title: 'Post 4',
    text:
      'Integer eu nunc a tortor congue vulputate ac iaculis ipsum. ' +
      'Pellentesque mi ante, eleifend sit amet laoreet et, ' +
      'pharetra et diam.',
  },
  '005': {
    id: '005',
    title: 'Post 5',
    text:
      'Sed a augue sodales, viverra est tempor, molestie elit. ' +
      'Donec id metus vitae lorem molestie placerat eu id magna.',
  },
}

const LATENCY_MS = 1000

export default {
  get: (id) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const blogPost = blogPosts[id]

        if (blogPost) {
          resolve(blogPost)
        } else {
          reject()
        }
      }, LATENCY_MS)
    }),
}
