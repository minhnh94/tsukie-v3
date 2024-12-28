'use client'
import React, { useState, useEffect } from 'react'
import Link from "next/link"

export default function WidgetPosts({chronologically = false}) {
  let [suggestedPosts, setSuggestedPosts] = useState([])
  useEffect(() => {
    console.log('Fetching suggested posts...')
    const fetchData = async () => {
      const suggestedPosts = await (await fetch(`/api/suggestions?chronologically=${chronologically}`)).json()
      console.log(suggestedPosts)
      setSuggestedPosts(suggestedPosts)
    }

    fetchData()
  }, [])
  return (
    <div className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:rotate-1 even:-rotate-1 p-5">
      <div className="font-aspekta font-[650] mb-3">{chronologically ? "Latest posts" : "Popular posts"}</div>
      <ul className="space-y-3">
        { suggestedPosts.map(post => (
          <li key={ post.id } className="inline-flex">
            <span className="text-sky-500 mr-2">—</span>{ " " }
            <Link
              className="font-aspekta font-[650] text-sm inline-flex relative hover:text-sky-500 duration-150 ease-out before:scale-x-0 before:origin-center before:absolute before:inset-0 before:bg-sky-200 dark:before:bg-sky-500 before:opacity-30 before:-z-10 before:translate-y-1/4 before:-rotate-2 hover:before:scale-100 before:duration-150 before:ease-in-out"
              href={ `/en/${ post.tag }/${ post.slug }` }
            >
              { post.title }
            </Link>
          </li>
        )) }
      </ul>
    </div>
  )
}
