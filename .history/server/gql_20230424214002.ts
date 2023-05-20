export function discussionGql() {
  return `{
    repository(owner: "CarsonDev1", name: "Blog-next") {
    discussions(first: 100, categoryId: "DIC_kwDOJata1c4CWA-y") {
      nodes {
        title
        url
        bodyHTML
        bodyText
        createdAt
        lastEditedAt
        author {
          login
          url
          avatarUrl
        }
        labels(first: 100) {
          nodes {
            name
          }
        }
      }
    }
  }
  }`
}
