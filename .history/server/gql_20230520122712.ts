export function discussionGql(ghDicussionCategoryId: string | undefined) {
  return `{
    repository(owner: "CarsonDev1", name: "Blog-next") {
    discussions(first: 100, categoryId: "${ghDicussionCategoryId}") {
      nodes {
        title
        url
        number
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
            name,
          }
        }
      }
    }
  }
  }`
}
