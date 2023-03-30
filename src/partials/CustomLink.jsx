import React from "react"

export const CustomLink = ({ href, children, node, ...props }) => {
  if (href.includes("http") && !href.includes("tsukie")) {
    return <a href={ href } target="_blank" rel="nofollow noopener noreferrer" { ...props }>{ children.join(" ") }</a>
  } else {
    return <a href={ href } { ...props }>{ children.join(" ") }</a>
  }
}
