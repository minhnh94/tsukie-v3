import React from 'react'
import Link from "next/link"

import SideNavigation from '@/partials/SideNavigation'
import WidgetNewsletter from '@/partials/WidgetNewsletter'
import WidgetSponsor from '@/partials/WidgetSponsor'
import WidgetPosts from '@/partials/WidgetPosts'

import rehypeRaw from "rehype-raw"
import rehypeFigure from "rehype-figure"
import rehypeHighlight from "rehype-highlight"
import highlightjsCSS from 'highlight.js/styles/github-dark-dimmed.css'
import readingTime from "reading-time"
import ReactMarkdown from "react-markdown"
import { getPageContentAsMarkdownById, getPageIdBySlug, getPagePropertiesById, getPagesFromDB } from "@/lib/contentFetcher"
import { CustomLink } from "@/partials/CustomLink"
import Screen from "@/partials/Screen"
import MainContent from "@/partials/MainContent"
import MiddleArea from "@/partials/MiddleArea"
import RightSidebar from "@/partials/RightSidebar"
import ShareBtnRow from "./share-btn-row"

export const revalidate = 43200 // 12 hours

export async function generateMetadata({ params }) {
  const pageId = await getPageIdBySlug(params.post)
  const pageProperties = await getPagePropertiesById(pageId)
  return {
    // migrate from NextSeo below
    title: pageProperties.title,
    description: pageProperties.summary,
    metadataBase: new URL(`https://tsukie.com/${ params.tag }/${ params.post }`),
    twitter: {
      cardType: 'summary_large_image',
      title: pageProperties.title,
      description: pageProperties.summary,
      creator: '@minhnh94',
      image: [pageProperties.thumbnail],
    },
    openGraph: {
      type: 'article',
      title: pageProperties.title,
      description: pageProperties.summary,
      url: `https://tsukie.com/${ params.tag }/${ params.post }`,
      images: [{
        url: pageProperties.thumbnail,
        alt: pageProperties.title,
      }],
    },
  }
}

export default async function Page({ params }) {
  const { content, pageProperties, readingStats } = await getPostContent(params)
  return (
    <Screen>
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
                  <ShareBtnRow/>
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
            <WidgetPosts/>
          </RightSidebar>
        </div>
      </MainContent>
    </Screen>
  )
}

export async function getPostContent(params) {
  const pageId = await getPageIdBySlug(params.post)
  if (!pageId) throw new Error(`Page not found: ${ params.post }`)
  const mdString = await getPageContentAsMarkdownById(pageId)
  const readingStats = readingTime(mdString)
  const pageProperties = await getPagePropertiesById(pageId)
  return {
    content: mdString,
    pageProperties,
    readingStats,
  }
}

export async function generateStaticParams() {
  const { pages } = await getPagesFromDB()
  return pages.map(page => ({ tag: page.tag, post: page.slug }))
}
