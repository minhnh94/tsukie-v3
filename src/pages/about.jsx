import React from 'react'

import SideNavigation from '../partials/SideNavigation'
import Header from '../partials/Header'
import WidgetNewsletter from '../partials/WidgetNewsletter'
import WidgetSponsor from '../partials/WidgetSponsor'
import Footer from '../partials/Footer'

import { getPageContentAsMarkdownById } from "../../api/contentFetcher"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import rehypeFigure from "rehype-figure"
import rehypeHighlight from "rehype-highlight"
import highlightjsCSS from 'highlight.js/styles/github-dark-dimmed.css'
import { CustomLink } from "@/partials/CustomLink"

function About({ content }) {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="min-h-screen flex">

        <SideNavigation/>

        { /* Main content */ }
        <main className="grow overflow-hidden px-6">
          <div className="w-full h-full max-w-[1072px] mx-auto flex flex-col">

            <Header/>

            { /* Content */ }
            <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">

              { /* Middle area */ }
              <div className="grow">
                <div className="max-w-[700px]">

                  <section>
                    { /* Page title */ }
                    <h1 className="h1 font-aspekta mb-5">Hi. I'm Mark <span
                      className="inline-flex relative text-sky-500 before:absolute before:inset-0 before:bg-sky-200 dark:before:bg-sky-500 before:opacity-30 before:-z-10 before:-rotate-2 before:translate-y-1/4">@mrk27</span> Ivings
                      🤟</h1>
                    <img className="w-full" src="/images/about.png" width="692" height="390" alt="About"/>
                    { /* Page content */ }
                    <div className="text-slate-500 dark:text-slate-400 space-y-8 my-4">
                      {/* react_markdown class defined in typography.css */ }
                      <ReactMarkdown rehypePlugins={ [rehypeRaw, rehypeFigure, rehypeHighlight] }
                                     className={ `react_markdown ${ highlightjsCSS }` }
                                     components={ { a: CustomLink } }
                      >
                        { content }
                      </ReactMarkdown>
                    </div>
                  </section>

                </div>
              </div>

              { /* Right sidebar */ }
              <aside className="md:w-[240px] lg:w-[300px] shrink-0">
                <div className="space-y-6">

                  <WidgetNewsletter/>
                  <WidgetSponsor/>

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

export async function getStaticProps() {
  const content = await getPageContentAsMarkdownById('8df3801c8eab41b880457de0af11cccd') // read from "about" page

  return {
    props: {
      content,
    },
    revalidate: 43200,
  }
}

export default About
