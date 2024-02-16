import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import rehypeFigure from "rehype-figure"
import rehypeHighlight from "rehype-highlight"
import { CustomLink } from "@/partials/CustomLink"
import highlightjsCSS from 'highlight.js/styles/github-dark-dimmed.css'
import React from "react"

export default function ParagraphFromCms({ content }) {
  return (
    <div className="text-slate-500 dark:text-slate-400 space-y-8 my-4">
      {/* react_markdown class defined in typography.css */ }
      <ReactMarkdown rehypePlugins={ [rehypeRaw, rehypeFigure, rehypeHighlight] }
                     className={ `react_markdown ${ highlightjsCSS }` }
                     components={ { a: CustomLink } }
      >
        { content }
      </ReactMarkdown>
    </div>
  )
}
