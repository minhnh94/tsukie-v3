import React from "react"

export function Highlight(props) {
  return (
    <span
      className="inline-flex relative text-sky-500 before:absolute before:inset-0 before:bg-sky-200 dark:before:bg-sky-500 before:opacity-30 before:-z-10 before:-rotate-2 before:translate-y-1/4">
    { props.children }
    </span>
  )
}
