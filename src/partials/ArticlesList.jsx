import React, { useState } from 'react'

import ArticleItem from '../partials/ArticleItem'

function ArticlesList({ items, tags }) {
  const [selectedTagIndex, setSelectedTagIndex] = useState(0)

  const handleClick = (index) => {
    setSelectedTagIndex(index)
  }

  const filteredItems = items.filter((item) => {
      return item.tag === tags[selectedTagIndex]
  })

  return (
    <section>
      <h2 className="font-aspekta text-xl font-[650] mb-3">Latest Articles</h2>

      {/* Filters */}
      <ul className="flex flex-wrap text-sm border-b border-slate-100 dark:border-slate-800">
        { tags.map((tag, index) => (
          <li key={ index } className="px-3 -mb-px">
            <a
              className={ `block py-3 capitalize hover:cursor-pointer ${
                selectedTagIndex === index
                  ? 'font-medium text-slate-800 dark:text-slate-100 border-b-2 border-sky-500'
                  : 'text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300'
              }` }
              onClick={ () => handleClick(index) }
            >
              { tag }
            </a>
          </li>
        )) }
      </ul>

      {/* Articles list */}
      <div>
        { filteredItems.map((item) => {
          return (
            <ArticleItem
              key={ item.id }
              id={ item.id }
              title={ item.title }
              tag={ item.tag }
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
