import React from 'react'
import Link from "next/link"
import { useRouter } from "next/router"

import SideNavigation from '../../../partials/SideNavigation'
import Header from '../../../partials/Header'
import WidgetNewsletter from '../../../partials/WidgetNewsletter'
import WidgetSponsor from '../../../partials/WidgetSponsor'
import WidgetPosts from '../../../partials/WidgetPosts'
import Footer from '../../../partials/Footer'

import rehypeRaw from "rehype-raw"
import rehypeFigure from "rehype-figure"
import rehypeHighlight from "rehype-highlight"
import highlightjsCSS from 'highlight.js/styles/github-dark-dimmed.css'
import readingTime from "reading-time"
import ReactMarkdown from "react-markdown"
import { getPageContentAsMarkdownById, getPageIdBySlug, getPagePropertiesById, getPagesForSidebar, getPagesFromDB, getSuggestedArticlesForPage } from "../../../../api/contentFetcher"
import { CustomLink } from "@/partials/CustomLink"

function Post({ content, pageProperties, pagesForSidebar, readingStats }) {
  const router = useRouter()
  const currentPageURL = 'https://tsukie.com' + router.asPath


  return (
    <div className="max-w-7xl mx-auto">
      <div className="min-h-screen flex">
        <SideNavigation/>

        {/* Main content */ }
        <main className="grow overflow-hidden px-6">
          <div className="w-full h-full max-w-[1072px] mx-auto flex flex-col">
            <Header/>

            {/* Content */ }
            <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
              {/* Middle area */ }
              <div className="grow">
                <div className="max-w-[700px]">
                  {/* Back */ }
                  <div className="mb-3">
                    <Link
                      className="inline-flex text-sky-500 rounded-full border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30"
                      href="/"
                    >
                      <span className="sr-only">Back</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34">
                        <path className="fill-current" d="m16.414 17 3.293 3.293-1.414 1.414L13.586 17l4.707-4.707 1.414 1.414z"/>
                      </svg>
                    </Link>
                  </div>

                  <article>
                    {/* Post header */ }
                    <header>
                      <div className="flex items-center justify-between mb-1">
                        {/* Post date */ }
                        <div className="text-xs text-slate-500 uppercase">
                          <span className="text-sky-500">—</span> { pageProperties.date } <span className="text-slate-400 dark:text-slate-600">·</span> { readingStats.text }
                        </div>
                        {/* Share buttons */ }
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
                      </div>
                      <h1 className="h1 font-aspekta mb-4">{ pageProperties.title }</h1>
                    </header>
                    {/* Post content */ }
                    <div className="text-slate-500 dark:text-slate-400 space-y-8">
                      {/* react_markdown class defined in typography.css */ }
                      <ReactMarkdown rehypePlugins={ [rehypeRaw, rehypeFigure, rehypeHighlight] }
                                     className={ `react_markdown ${ highlightjsCSS }` }
                                     components={ { a: CustomLink } }
                      >
                        { content }
                      </ReactMarkdown>
                    </div>
                  </article>
                </div>
              </div>

              {/* Right sidebar */ }
              <aside className="md:w-[240px] lg:w-[300px] shrink-0">
                <div className="space-y-6">
                  <WidgetNewsletter/>
                  <WidgetSponsor imageRotationClass="-rotate-1" title="My latest project" pjName="WallCal" img="/images/wallcal-screenshot.webp"
                                 pjDesc="The best sticky calendar on desktop background for macOS" link="https://wallcal.app/"/>
                  <WidgetPosts suggestedPosts={ pagesForSidebar }/>
                </div>
              </aside>
            </div>

            <Footer/>
          </div>
        </main>
      </div>
    </div>
  )
}

export async function getStaticProps({ params: { post } }) {
  const pageId = await getPageIdBySlug(post)
  const mdString = await getPageContentAsMarkdownById(pageId)
  const readingStats = readingTime(mdString)
  const pageProperties = await getPagePropertiesById(pageId)
  const { pagesForSidebar } = await getPagesForSidebar()
  return {
    props: {
      content: mdString,
      pageProperties,
      readingStats,
      pagesForSidebar,
    },
    revalidate: 43200,
  }
}

export async function getStaticPaths() {
  const { pages } = await getPagesFromDB()
  const allPaths = pages.map(page => ({
    params: { tag: page.tag, post: page.slug },
  }))
  return {
    paths: allPaths,
    fallback: false,
  }
}

export default Post
