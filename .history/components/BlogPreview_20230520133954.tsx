import {BlogPost} from '@/types/blog'
import React from 'react'

export const BlogPreview: React.FC<BlogPost> = (props) => {
  const {bodyText, title, createdAt, tags, author} = props
  return (
    <section>
      <h2 className="font-bold">{title}</h2>
      <p className="mt-2">{bodyText}</p>
    </section>
  )
}
