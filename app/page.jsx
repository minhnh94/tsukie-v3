import React from 'react'

import SideNavigation from '@/partials/SideNavigation'
import Hero from '@/partials/Hero'
import ArticlesList from '@/partials/ArticlesList'
import Projects from '@/partials/Projects'
import WidgetNewsletter from '@/partials/WidgetNewsletter'
import WidgetSponsor from '@/partials/WidgetSponsor'
import { getPagesFromDB } from "@/lib/contentFetcher"
import Screen from "@/partials/Screen"
import MainContent from "@/partials/MainContent"
import MiddleArea from "@/partials/MiddleArea"
import RightSidebar from "@/partials/RightSidebar"
import { TAG_LATEST } from "@/utils/constants"

export const metadata = {
  // migrate from NextSeo below
  title: 'Tsukie - coding x life x indie hacker journey',
  description: "Welcome to Tsukie, a blog where coding, life, and my indie hacker journey converge. As a seasoned software programmer, I'm now dabbling into the part-time indie hacker path and sharing my experiences along the way.",
  metadataBase: new URL('https://tsukie.com/'),
  twitter: {
    cardType: 'summary_large_image',
    title: 'Tsukie - coding x life x indie hacker journey',
    description: "Welcome to Tsukie, a blog where coding, life, and my indie hacker journey converge. As a seasoned software programmer, I'm now dabbling into the part-time indie hacker path and sharing my experiences along the way.",
    creator: '@minhnh94',
    image: ['https://tsukie.com/images/about.jpg'],
  },
  openGraph: {
    type: 'website',
    title: 'Tsukie - coding x life x indie hacker journey',
    description: "Welcome to Tsukie, a blog where coding, life, and my indie hacker journey converge. As a seasoned software programmer, I'm now dabbling into the part-time indie hacker path and sharing my experiences along the way.",
    url: 'https://tsukie.com/',
    images: [{
      url: 'https://tsukie.com/images/about.jpg',
      alt: 'about tsukie',
    }],
  },
}

export const revalidate = 43200 // 12 hours

export default async function Page() {
  const { items, tags } = await getIndexPageData()
  return (
    <Screen>
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

export async function getIndexPageData() {
  const pageInfo = await getPagesFromDB()
  const items = pageInfo.pages
  const tags = Object.keys(separateByTags(items)).sort()
  return {
    items,
    tags: [TAG_LATEST, ...tags],
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
