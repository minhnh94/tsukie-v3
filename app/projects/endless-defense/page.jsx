import React from 'react'

import SideNavigation from '@/partials/SideNavigation'
import WidgetSponsor from '@/partials/WidgetSponsor'
import MainContent from "@/partials/MainContent"
import MiddleArea from "@/partials/MiddleArea"
import RightSidebar from "@/partials/RightSidebar"
import Screen from "@/partials/Screen"
import UnityPlayer from "@/app/projects/endless-defense/unity-player"
import { getPageContentAsMarkdownById } from "@/lib/contentFetcher"
import ParagraphFromCms from "@/partials/paragraph-from-cms"

export const metadata = {
  title: 'Endless Defense - A tower defense game from Tsukie',
  description: "A fun and addictive way to kill time right on the web browser. Play now and see how long you can survive!",
  metadataBase: new URL('https://tsukie.com/projects/endless-defense/'),
  twitter: {
    cardType: 'summary_large_image',
    title: 'Tsukie - coding x life x indie hacker journey',
    description: "Join me on a thrilling journey through coding, life lessons, and indie hacking adventures!",
    creator: '@minhnh94',
    image: ['https://tsukie.com/images/about.jpg'],
  },
  openGraph: {
    type: 'article',
    title: 'Tsukie - coding x life x indie hacker journey',
    description: "Join me on a thrilling journey through coding, life lessons, and indie hacking adventures!",
    url: 'https://tsukie.com/',
    images: [{
      url: 'https://tsukie.com/images/about.jpg',
      alt: 'about tsukie',
    }],
  },
}

export default async function Page() {
  const content = await getPageContentAsMarkdownById('ced24c15f6f542adb8d4ab3b21c93040')
  return (
    <Screen>
      <SideNavigation/>
      <MainContent>
        {/* Content */ }
        <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
          <MiddleArea>
            <h1 className="h1 font-aspekta mb-4">Endless Defense - A tower defense game</h1>
            {/*display alert if mobile screen*/ }
            <div className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800 lg:hidden" role="alert">
              <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
              </svg>
              <span className="sr-only">Info</span>
              <div>
                Mobile/tablet not supported. Please use desktop/laptop.
              </div>
            </div>
            {/*display the game itself if desktop screen*/ }
            <div className="hidden lg:block">
              <UnityPlayer/>
            </div>
            <ParagraphFromCms content={content} />
          </MiddleArea>

          <RightSidebar>
            <WidgetSponsor imageRotationClass="rotate-1" title="My latest project" pjName="WallCal" img="/images/wallcal-screenshot.webp"
                           pjDesc="The best sticky calendar on desktop background for macOS" link="https://wallcal.app/"/>
          </RightSidebar>
        </div>
      </MainContent>
    </Screen>
  )
}
