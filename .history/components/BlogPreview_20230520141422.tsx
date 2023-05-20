import {BlogPost} from '@/types/blog'
import React from 'react'

export const BlogPreview: React.FC<BlogPost> = (props) => {
  const {bodyText, title, createdAt, tags, author} = props
  const previewText: string = bodyText.substring(0, 200) + '...'
  return (
    <section>
      <h2 className="font-bold">{title}</h2>
      <p className="mt-2">{previewText}</p>
      <div className="flex gap-3">
        {tags.map((tag, idx) => {
          return <p key={idx}>{tag}</p>
        })}
      </div>
    </section>
  )
}
