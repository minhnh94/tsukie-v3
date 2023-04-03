import SideNavigation from '../partials/SideNavigation'
import Header from '../partials/Header'
import WidgetSponsor from '../partials/WidgetSponsor'
import Footer from '../partials/Footer'
import React from "react"

function NotFoundPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="min-h-screen flex">
        <SideNavigation/>

        {/* Main content */ }
        <main className="grow overflow-hidden px-6">
          <div className="w-full h-full max-w-[1072px] mx-auto flex flex-col">
            <Header/>

            {/* Content */ }
            <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
              {/* Middle area */ }
              <div className="grow">
                <div className="max-w-[700px]">
                  <div className="space-y-10">
                    <section>
                      {/* Page title */ }
                      <h1 className="h1 font-aspekta mb-5">Oops, 404 not found!</h1>
                      {/* Page content */ }
                      <div className="text-slate-500 dark:text-slate-400 space-y-8">
                        <p className="text-lg">
                          You tried to search for a resource that was not available at our end.
                        </p>
                      </div>
                    </section>
                  </div>
                </div>
              </div>

              {/* Right sidebar */ }
              <aside className="md:w-[240px] lg:w-[300px] shrink-0">
                <div className="space-y-6">
                  <WidgetSponsor imageRotationClass="rotate-1" title="My latest project" pjName="WallCal" img="/images/wallcal-screenshot.webp"
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

export default NotFoundPage
