'use client'
import React from "react"
import { usePathname } from "next/navigation"

export default function ShareBtnRow() {
  const pathName = usePathname()
  const currentPageURL = 'https://tsukie.com' + pathName

  return (
    <ul className="inline-flex">
      <li>
        <a
          className="flex justify-center items-center text-slate-400 dark:text-slate-500 hover:text-sky-500 dark:hover:text-sky-500 transition duration-150 ease-in-out"
          href={ `https://twitter.com/intent/tweet?url=${ currentPageURL }` }
          aria-label="Twitter"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <svg className=" w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z"/>
          </svg>
        </a>
      </li>
      <li>
        <a
          className="flex justify-center items-center text-slate-400 dark:text-slate-500 hover:text-sky-500 dark:hover:text-sky-500 transition duration-150 ease-in-out"
          href={ `https://www.facebook.com/sharer/sharer.php?u=${ currentPageURL }` }
          aria-label="Facebook"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.023 24 14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257Z"/>
          </svg>
        </a>
      </li>
    </ul>
  )
}
