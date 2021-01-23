import React from 'react'
import BlogPage from '@docusaurus/theme-classic/lib-next/theme/BlogPostPage'

export default function BlogPostPage (props) {
  const { content: frontMatter } = props
  return <>
      {
        frontMatter.image
          ? <img src={frontMatter.image} />
          : <></>
      }
      <BlogPage {...props} />
    </>
}
