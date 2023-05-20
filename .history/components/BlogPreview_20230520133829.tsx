import {BlogPost} from '@/types/blog'
import React from 'react'

export const BlogPreview: React.FC<BlogPost> = (props) => {
  const {bodyText, title, createdAt, tags, author} = props
  return <div>BlogPreview</div>
}
