const API_URL = 'https://api.github.com/graphql'
const GH_ACCESS_TOKEN = process.env.GH_ACCESS_TOKEN
const DISCUSSION_CATEGORY_ID = process.env.DISCUSSION_CATEGORY_ID

export function getBlogs() {
  const response = fetch(API_URL, {
    method: 'POST',
    headers: {
      Authorization: `token ${GH_ACCESS_TOKEN}`,
    },
  })
}
