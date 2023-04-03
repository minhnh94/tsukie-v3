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
import Screen from "@/partials/Screen"
import MainContent from "@/partials/MainContent"
import MiddleArea from "@/partials/MiddleArea"
import RightSidebar from "@/partials/RightSidebar"

function Index({ items, tags }) {
  return (
    <Screen>
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
      <SideNavigation/>

      <MainContent>
        <Hero/>

        <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pb-16 md:pb-20">
          <MiddleArea>
            <div className="space-y-10">
              <ArticlesList items={ items } tags={ tags }/>
              <Projects/>
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
