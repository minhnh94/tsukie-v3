import React from 'react'

import SideNavigation from '@/partials/SideNavigation'
import WidgetNewsletter from '@/partials/WidgetNewsletter'
import WidgetSponsor from '@/partials/WidgetSponsor'

import { getPageContentAsMarkdownById } from "@/lib/contentFetcher"
import Screen from "@/partials/Screen"
import MainContent from "@/partials/MainContent"
import MiddleArea from "@/partials/MiddleArea"
import RightSidebar from "@/partials/RightSidebar"
import ParagraphFromCms from "@/partials/paragraph-from-cms"

export const metadata = {
  // migrate from NextSeo below
  title: 'Privacy Policy - Tsukie',
  description: "Your privacy is important to us. It is Tsukie's policy to respect your privacy regarding any information we may collect from you across our website, https://tsukie.com, and other sites we own and operate.",
  metadataBase: new URL('https://tsukie.com/privacy-policy/'),
  twitter: {
    cardType: 'summary_large_image',
    title: 'Privacy Policy - Tsukie',
    description: "Your privacy is important to us. It is Tsukie's policy to respect your privacy regarding any information we may collect from you across our website, https://tsukie.com, and other sites we own and operate.",
    creator: '@minhnh94',
    image: ['https://tsukie.com/images/about.jpg'],
  },
  openGraph: {
    type: 'article',
    title: 'Privacy Policy - Tsukie',
    description: "Your privacy is important to us. It is Tsukie's policy to respect your privacy regarding any information we may collect from you across our website, https://tsukie.com, and other sites we own and operate.",
    url: 'https://tsukie.com/privacy-policy/',
    images: [{
      url: 'https://tsukie.com/images/about.jpg',
      alt: 'about tsukie',
    }],
  },
}

export const revalidate = 43200 // 12 hours

export default async function Page() {
  const content = await getPageContentAsMarkdownById('85cc3bc73db54b74bd4a804a61705fc4')
  return (
    <Screen>
      <SideNavigation/>
      <MainContent>
        { /* Content */ }
        <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
          <MiddleArea>
            <section>
              { /* Page title */ }
              <h1 className="h1 font-aspekta mb-5">Privacy Policy</h1>
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
