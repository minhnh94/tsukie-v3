'use client'
import React, { useEffect, useRef } from "react"

export default function CommentSection() {
  const ref = useRef(null)
  useEffect(() => {
    const scriptElement = document.createElement('script')
    scriptElement.async = true
    scriptElement.crossOrigin = 'anonymous'
    scriptElement.src = 'https://utteranc.es/client.js'

    scriptElement.setAttribute('issue-term', 'pathname')
    scriptElement.setAttribute(
      'repo',
      'minhnh94/tsukie-blog-comments',
    )
    scriptElement.setAttribute(
      'theme',
      'github-dark',
    )

    ref.current?.appendChild(scriptElement)
  }, [])

  return <div ref={ ref }/>
}
