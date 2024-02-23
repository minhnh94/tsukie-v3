'use client'
import React, { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export default function CommentSection() {
  const ref = useRef(null)
  const { theme } = useTheme()
  const utteranceTheme = theme === 'dark' ? 'github-dark' : 'github-light'
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
      utteranceTheme,
    )

    ref.current?.appendChild(scriptElement)
  }, [])

  useEffect(() => {
    if (document.querySelector('.utterances-frame')) {
      const iframe = document.querySelector('.utterances-frame')

      if (!iframe) {
        return
      }

      iframe?.contentWindow?.postMessage({ type: 'set-theme', theme: utteranceTheme }, 'https://utteranc.es')
    }
  }, [utteranceTheme])

  return <div ref={ ref }/>
}
