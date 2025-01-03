import React from 'react'

import SideNavigation from '@/partials/SideNavigation'
import WidgetNewsletter from '@/partials/WidgetNewsletter'
import WidgetSponsor from '@/partials/WidgetSponsor'

import { getPageContentAsMarkdownById } from "@/lib/contentFetcher"
import { Highlight } from "@/partials/Highlight"
import Screen from "@/partials/Screen"
import MainContent from "@/partials/MainContent"
import MiddleArea from "@/partials/MiddleArea"
import RightSidebar from "@/partials/RightSidebar"
import ParagraphFromCms from "@/partials/paragraph-from-cms"

export const metadata = {
  // migrate from NextSeo below
  title: 'tsukie - tech, soul, and dream',
  description: "Welcome to Tsukie, a blog where coding, life, and my indie hacker journey converge. As a seasoned software programmer, I'm now dabbling into the part-time indie hacker path and sharing my experiences along the way.",
  metadataBase: new URL('https://tsukie.com/'),
  twitter: {
    cardType: 'summary_large_image',
    title: 'tsukie - tech, soul, and dream',
    description: "Welcome to Tsukie, a blog where coding, life, and my indie hacker journey converge. As a seasoned software programmer, I'm now dabbling into the part-time indie hacker path and sharing my experiences along the way.",
    creator: '@minhnh94',
    image: ['https://tsukie.com/images/about.jpg'],
  },
  openGraph: {
    type: 'article',
    title: 'tsukie - tech, soul, and dream',
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
  const content = await getPageContentAsMarkdownById('8df3801c8eab41b880457de0af11cccd')
  return (
    <Screen>
      <SideNavigation/>
      <MainContent>
        { /* Content */ }
        <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
          <MiddleArea>
            <section>
              { /* Page title */ }
              <h1 className="h1 font-aspekta mb-5"><Highlight>Tsukie</Highlight> - Coding x Indie 🤟</h1>
              <img className="w-full" src="/images/about.jpg" width="692" height="390" alt="About"/>
              { /* Page content */ }
              <ParagraphFromCms content={content} />
            </section>
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
