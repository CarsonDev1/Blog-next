import React from 'react'

interface headerProps {
  createdAt: string
  author: {
    name: string
    avatar: string
    url: string
  }
}

export const BlogHeader: React.FC<headerProps> = (props) => {
  const {createdAt, author} = props
  return <div className="flex">{createdAt}</div>
}
