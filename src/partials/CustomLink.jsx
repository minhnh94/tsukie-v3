import React from "react"

export const CustomLink = ({ href, children, node, ...props }) => {
  if (href.includes("http") && !href.includes("tsukie.com")) {
    return <a href={ href } target="_blank" rel="nofollow noopener noreferrer" { ...props }>{ children }</a>
  } else {
    return <a href={ href } { ...props }>{ children }</a>
  }
}
