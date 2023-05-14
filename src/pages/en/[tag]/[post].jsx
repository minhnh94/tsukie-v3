import React from 'react'
import Link from "next/link"
import { useRouter } from "next/router"

import SideNavigation from '../../../partials/SideNavigation'
import WidgetNewsletter from '../../../partials/WidgetNewsletter'
import WidgetSponsor from '../../../partials/WidgetSponsor'
import WidgetPosts from '../../../partials/WidgetPosts'

import rehypeRaw from "rehype-raw"
import rehypeFigure from "rehype-figure"
import rehypeHighlight from "rehype-highlight"
import highlightjsCSS from 'highlight.js/styles/github-dark-dimmed.css'
import readingTime from "reading-time"
import ReactMarkdown from "react-markdown"
import { getPageContentAsMarkdownById, getPageIdBySlug, getPagePropertiesById, getPagesForSidebar, getPagesFromDB } from "@/api/contentFetcher"
import { CustomLink } from "@/partials/CustomLink"
import { NextSeo } from "next-seo"
import Screen from "@/partials/Screen"
import MainContent from "@/partials/MainContent"
import MiddleArea from "@/partials/MiddleArea"
import RightSidebar from "@/partials/RightSidebar"

function Post({ content, pageProperties, pagesForSidebar, readingStats }) {
  const router = useRouter()
  const currentPageURL = 'https://tsukie.com' + router.asPath

  // If the page is created after page build and is loaded the first time
  if (router.isFallback) {
    return (
      <Screen>
        <SideNavigation/>
        <MainContent>
          <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
            <MiddleArea>
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

              {/*Loading indicator*/ }
              <div role="status">
                <svg aria-hidden="true" className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-sky-500" viewBox="0 0 100 101" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"/>
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"/>
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </MiddleArea>

            <RightSidebar>
              <WidgetNewsletter/>
              <WidgetSponsor imageRotationClass="-rotate-1" title="My latest project" pjName="WallCal" img="/images/wallcal-screenshot.webp"
                             pjDesc="The best sticky calendar on desktop background for macOS" link="https://wallcal.app/"/>
            </RightSidebar>
          </div>
        </MainContent>
      </Screen>
    )
  }

  return (
    <Screen>
      <NextSeo
        title={ pageProperties.title }
        description={ pageProperties.summary }
        canonical={ currentPageURL }
        twitter={ { site: '@minhnh94', handle: '@minhnh94', cardType: 'summary_large_image' } }
        openGraph={ {
          url: currentPageURL,
          type: 'website',
          title: pageProperties.title,
          description: pageProperties.summary,
          images: [{
            url: pageProperties.thumbnail,
            alt: pageProperties.title,
          }],
        } }
      />
      <SideNavigation/>

      <MainContent>
        {/* Content */ }
        <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
          <MiddleArea>
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
          </MiddleArea>

          <RightSidebar>
            <WidgetNewsletter/>
            <WidgetSponsor imageRotationClass="-rotate-1" title="My latest project" pjName="WallCal" img="/images/wallcal-screenshot.webp"
                           pjDesc="The best sticky calendar on desktop background for macOS" link="https://wallcal.app/"/>
            <WidgetPosts suggestedPosts={ pagesForSidebar }/>
          </RightSidebar>
        </div>
      </MainContent>
    </Screen>
  )
}

export async function getStaticProps({ params: { post } }) {
  const pageId = await getPageIdBySlug(post)
  if (!pageId) {
    return {
      notFound: true,
    }
  }

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
    fallback: true,
  }
}

export default Post
