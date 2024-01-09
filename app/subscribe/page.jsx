import React from 'react'

import SideNavigation from '@/partials/SideNavigation'
import WidgetSponsor from '@/partials/WidgetSponsor'
import MainContent from "@/partials/MainContent"
import MiddleArea from "@/partials/MiddleArea"
import RightSidebar from "@/partials/RightSidebar"
import Screen from "@/partials/Screen"
import SubscribeForm from "./subscribe-form"

export const metadata = {
  // migrate from NextSeo below
  title: 'Tsukie - coding x life x indie hacker journey',
  description: "Join me on a thrilling journey through coding, life lessons, and indie hacking adventures!",
  metadataBase: new URL('https://tsukie.com/'),
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

function Page() {

  return (
    <Screen>
      <SideNavigation/>
      <MainContent>
        {/* Content */ }
        <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
          <MiddleArea>
            <div className="space-y-10">
              <section>
                {/* Page title */ }
                <h1 className="h1 font-aspekta mb-5">No spams. Just quality updates ✨</h1>
                {/* Page content */ }
                <div className="text-slate-500 dark:text-slate-400 space-y-8">
                  <p className="text-lg">
                    Join me on a thrilling journey through coding, life lessons, and indie hacking adventures. Subscribe now for exclusive access to:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg
                        className="w-3 h-3 fill-current text-sky-500 mr-3 mt-1.5 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                      </svg>
                      <span>Expert Coding Tips: Level up your programming skills with tried-and-tested techniques, industry best practices, and real-world examples.</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-3 h-3 fill-current text-sky-500 mr-3 mt-1.5 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                      </svg>
                      <span>Indie Hacker Insights: Learn the secrets to successfully building and launching profitable side projects, straight from my personal experiences.</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-3 h-3 fill-current text-sky-500 mr-3 mt-1.5 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                      </svg>
                      <span>Personal Growth Strategies: Discover practical life hacks and mindset shifts that will boost your productivity, focus, and overall well-being.</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-3 h-3 fill-current text-sky-500 mr-3 mt-1.5 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                      </svg>
                      <span>Engaging Community: Connect with a like-minded group of coders, entrepreneurs, and dreamers who are all on the same quest for growth and success.</span>
                    </li>
                  </ul>
                  <p className="text-lg">Together, let's level up and dive into our exhilarating journey towards success!</p>
                  <div>
                    <SubscribeForm/>
                  </div>
                </div>
              </section>
            </div>
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

export default Page
