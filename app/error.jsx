'use client'
import SideNavigation from '@/partials/SideNavigation'
import WidgetSponsor from '@/partials/WidgetSponsor'
import React from "react"
import Screen from "@/partials/Screen"
import MainContent from "@/partials/MainContent"
import MiddleArea from "@/partials/MiddleArea"
import RightSidebar from "@/partials/RightSidebar"
import WidgetPosts from "@/partials/WidgetPosts"

export default function Error() {
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
                <h1 className="h1 font-aspekta mb-5">Oops, 500 internal server error.</h1>
                {/* Page content */ }
                <div className="text-slate-500 dark:text-slate-400 space-y-8">
                  <p className="text-lg">
                    This is embarrassing, but something went wrong. Please try again later.
                  </p>
                </div>
              </section>
            </div>
          </MiddleArea>

          <RightSidebar>
            <WidgetSponsor imageRotationClass="rotate-1" title="My latest project" pjName="WallCal" img="/images/wallcal-screenshot.webp"
                           pjDesc="The best sticky calendar on desktop background for macOS" link="https://wallcal.app/"/>
            <WidgetPosts/>
          </RightSidebar>
        </div>
      </MainContent>
    </Screen>
  )
}
