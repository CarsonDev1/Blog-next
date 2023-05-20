import {BlogPost} from '@/types/blog'
import React from 'react'

export const BlogPreview: React.FC<BlogPost> = (props) => {
  const {bodyText, title, createdAt, tags, author, lastEdited} = props
  return <div>BlogPreview</div>
}
