import React from 'react'

import SideNavigation from '@/partials/SideNavigation'
import WidgetSponsor from '@/partials/WidgetSponsor'
import MainContent from "@/partials/MainContent"
import MiddleArea from "@/partials/MiddleArea"
import RightSidebar from "@/partials/RightSidebar"
import Screen from "@/partials/Screen"
import UnityPlayer from "@/app/projects/endless-defense/unity-player"

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

export default function Page() {

  return (
    <Screen>
      <SideNavigation/>
      <MainContent>
        {/* Content */ }
        <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
          <MiddleArea>
            <UnityPlayer/>
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
