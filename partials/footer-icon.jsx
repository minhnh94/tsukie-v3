import React from "react"

export default function FooterIcon({ href, label, tooltip, children }) {
  return (
    <li className="group relative w-max">
      <span className="pointer-events-none absolute -top-10 left-1/2 transform -translate-x-1/2 bg-sky-500 w-max opacity-0 transition-opacity group-hover:opacity-100 px-3 py-2 text-sm font-medium text-white rounded-lg">
      { tooltip }
      </span>
      <a
        className="flex justify-center items-center text-sky-500 hover:text-sky-600 transition duration-150 ease-in-out"
        href={ href }
        rel="nofollow noopener noreferrer"
        target="_blank"
        aria-label={ label }
      >
        { children }
      </a>
    </li>
  )
}
