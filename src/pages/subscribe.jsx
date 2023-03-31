import React from 'react'
import { CheckCircleIcon } from "@heroicons/react/20/solid"
import useSubscribe from "../../hooks/useSubscribe"

import SideNavigation from '../partials/SideNavigation'
import Header from '../partials/Header'
import WidgetSponsor from '../partials/WidgetSponsor'
import Footer from '../partials/Footer'

function Subscribe() {
  const { email, setEmail, isLoading, isSubscribed, handleSubmit } = useSubscribe()

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
                          {/* Subscribe form */ }
                          <form onSubmit={ handleSubmit }>
                            <div className="flex flex-col md:flex-row justify-center max-w-xs mx-auto md:max-w-md md:mx-0">
                              <input
                                type="email"
                                className="form-input w-full mb-2 md:mb-0 md:mr-2"
                                placeholder="Your email"
                                aria-label="Your email\u2026"
                                value={ email }
                                onChange={ (e) => setEmail(e.target.value) }
                                required
                                disabled={ isSubscribed }
                              />
                              <button
                                className={ `btn text-white ${
                                  isSubscribed ? 'bg-green-500' : 'bg-sky-500 hover:bg-sky-600'
                                } ${ isLoading || isSubscribed ? 'cursor-not-allowed' : '' }` }
                                type="submit"
                                disabled={ isLoading || isSubscribed }
                              >
                                { isSubscribed ? (
                                  <CheckCircleIcon className="w-5 h-5"/>
                                ) : isLoading ? (
                                  'Subscribing...'
                                ) : (
                                  'Subscribe'
                                ) }
                              </button>
                            </div>
                          </form>
                        </div>
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

export default Subscribe
