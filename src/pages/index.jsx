import React from 'react'

import SideNavigation from '../partials/SideNavigation'
import Header from '../partials/Header'
import Hero from '../partials/Hero'
import ArticlesList from '../partials/ArticlesList'
import Talks from '../partials/Talks'
import Projects from '../partials/Projects'
import WidgetNewsletter from '../partials/WidgetNewsletter'
import WidgetSponsor from '../partials/WidgetSponsor'
import WidgetBook from '../partials/WidgetBook'
import Footer from '../partials/Footer'
import { getPagesFromDB } from "../../api/contentFetcher"
import { NextSeo } from "next-seo"

function Index({ items, tags }) {
  return (
    <div className="max-w-7xl mx-auto">
      <NextSeo
        title="Tsukie - coding x life x indie hacker journey"
        description="Welcome to Tsukie, a blog where coding, life, and my indie hacker journey converge. As a seasoned software programmer, I'm now dabbling into the part-time indie hacker path and sharing my experiences along the way."
        canonical="https://tsukie.com/"
        twitter={ { site: '@minhnh94', handle: '@minhnh94', cardType: 'summary_large_image' } }
        openGraph={ {
          url: 'https://tsukie.com/',
          type: 'website',
          title: 'Tsukie - coding x life x indie hacker journey',
          description: 'Welcome to Tsukie, a blog where coding, life, and my indie hacker journey converge. As a seasoned software programmer, I\'m now dabbling into the part-time indie hacker path and sharing my experiences along the way.',
          images: [{
            url: 'https://tsukie.com/images/about.jpg',
            alt: 'about tsukie',
          }],
        } }
      />

      <div className="min-h-screen flex">

        <SideNavigation/>

        { /* Main content */ }
        <main className="grow overflow-hidden px-6">
          <div className="w-full h-full max-w-[1072px] mx-auto flex flex-col">

            <Header/>
            <Hero/>

            { /* Content */ }
            <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pb-16 md:pb-20">

              { /* Middle area */ }
              <div className="grow">
                <div className="max-w-[700px]">
                  <div className="space-y-10">

                    <ArticlesList items={ items } tags={ tags }/>
                    <Projects/>

                  </div>
                </div>
              </div>

              { /* Right sidebar */ }
              <aside className="md:w-[240px] lg:w-[300px] shrink-0">
                <div className="space-y-6">
                  <WidgetNewsletter/>
                  <WidgetSponsor imageRotationClass="-rotate-1" title="My latest project" pjName="WallCal" img="/images/wallcal-screenshot.webp"
                                 pjDesc="The best sticky calendar on desktop background for macOS" link="https://wallcal.app/"/>
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
  const pageInfo = await getPagesFromDB()
  const items = pageInfo.pages
  const tags = Object.keys(separateByTags(items))
  return {
    props: { items, tags },
  }
}

const separateByTags = (data) => {
  const result = {}

  data.forEach((item) => {
    const tag = item.tag
    if (!result[tag]) {
      result[tag] = []
    }
    result[tag].push(item)
  })

  return result
}

export default Index
