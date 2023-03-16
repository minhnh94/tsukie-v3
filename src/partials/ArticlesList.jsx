import React from 'react'

import ArticleItem from '../partials/ArticleItem'

import Post01 from '../images/post-thumb-01.jpg'
import Post02 from '../images/post-thumb-02.jpg'
import Post03 from '../images/post-thumb-03.jpg'
import Post04 from '../images/post-thumb-04.jpg'
import Post05 from '../images/post-thumb-05.jpg'
import Post06 from '../images/post-thumb-06.jpg'
import Post07 from '../images/post-thumb-07.jpg'
import Post08 from '../images/post-thumb-08.jpg'

function ArticlesList({ items }) {
  return (
    <section>
      <h2 className="font-aspekta text-xl font-[650] mb-3">Latest Articles</h2>

      {/* Filters */ }
      <ul className="flex flex-wrap text-sm border-b border-slate-100 dark:border-slate-800">
        <li className="px-3 -mb-px">
          <a className="block py-3 font-medium text-slate-800 dark:text-slate-100 border-b-2 border-sky-500" href="#0">
            Coding
          </a>
        </li>
        <li className="px-3 -mb-px">
          <a className="block py-3 text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300" href="#0">
            Startups
          </a>
        </li>
        <li className="px-3 -mb-px">
          <a className="block py-3 text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300" href="#0">
            Tutorials
          </a>
        </li>
        <li className="px-3 -mb-px">
          <a className="block py-3 text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300" href="#0">
            Indie Hacking
          </a>
        </li>
      </ul>

      {/* Articles list */ }
      <div>
        { items.map((item) => {
          return (
            <ArticleItem
              key={ item.id }
              id={ item.id }
              title={ item.title }
              slug={ item.slug }
              image={ item.thumbnail }
              date={ item.date }
              excerpt={ item.summary }
            />
          )
        }) }
      </div>
    </section>
  )
}

export default ArticlesList
