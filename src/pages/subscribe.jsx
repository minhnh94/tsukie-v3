import React, { useState } from 'react'
import { CheckCircleIcon } from "@heroicons/react/20/solid"
import useSubscribe from "../../hooks/useSubscribe"

import SideNavigation from '../partials/SideNavigation'
import Header from '../partials/Header'
import WidgetSponsor from '../partials/WidgetSponsor'
import WidgetBook from '../partials/WidgetBook'
import Footer from '../partials/Footer'

function Subscribe() {
  const { email, setEmail, isLoading, isSubscribed, handleSubmit } = useSubscribe();

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
                      <h1 className="h1 font-aspekta mb-5">Never miss an update ✨</h1>
                      {/* Page content */ }
                      <div className="text-slate-500 dark:text-slate-400 space-y-8">
                        <p className="text-lg">
                          This newsletter is written by Mark Ivings, who previously worked at Google, Medium, Vimeo, and Qonto. Here is what to expect
                          by subscribing:
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
                            <span>Big tech and high-growth startups, from the inside.</span>
                          </li>
                          <li className="flex items-start">
                            <svg
                              className="w-3 h-3 fill-current text-sky-500 mr-3 mt-1.5 shrink-0"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                            </svg>
                            <span>Actionable advice for engineering managers, software engineers and tech workers.</span>
                          </li>
                          <li className="flex items-start">
                            <svg
                              className="w-3 h-3 fill-current text-sky-500 mr-3 mt-1.5 shrink-0"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                            </svg>
                            <span>A pulse on the tech market and scoop worth knowing.</span>
                          </li>
                          <li className="flex items-start">
                            <svg
                              className="w-3 h-3 fill-current text-sky-500 mr-3 mt-1.5 shrink-0"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                            </svg>
                            <span>An independent viewpoint.</span>
                          </li>
                        </ul>
                        <div>
                          {/* Subscribe form */ }
                          <form onSubmit={handleSubmit}>
                            <div className="flex flex-col md:flex-row justify-center max-w-xs mx-auto md:max-w-md md:mx-0">
                              <input
                                type="email"
                                className="form-input w-full mb-2 md:mb-0 md:mr-2"
                                placeholder="Your email"
                                aria-label="Your email\u2026"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                disabled={isSubscribed}
                              />
                              <button
                                className={`btn text-white ${
                                  isSubscribed ? 'bg-green-500' : 'bg-sky-500 hover:bg-sky-600'
                                } ${isLoading || isSubscribed ? 'cursor-not-allowed' : ''}`}
                                type="submit"
                                disabled={isLoading || isSubscribed}
                              >
                                {isSubscribed ? (
                                  <CheckCircleIcon className="w-5 h-5" />
                                ) : isLoading ? (
                                  'Subscribing...'
                                ) : (
                                  'Subscribe'
                                )}
                              </button>
                            </div>
                          </form>
                          <div className="flex items-center mt-5">
                            <div className="inline-flex -space-x-3 -ml-0.5">
                              <img
                                className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                                src="/images/avatar-01.jpg"
                                width="24"
                                height="24"
                                alt="Avatar 01"
                              />
                              <img
                                className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                                src="/images/avatar-01.jpg"
                                width="24"
                                height="24"
                                alt="Avatar 02"
                              />
                              <img
                                className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                                src="/images/avatar-01.jpg"
                                width="24"
                                height="24"
                                alt="Avatar 03"
                              />
                              <img
                                className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                                src="/images/avatar-01.jpg"
                                width="24"
                                height="24"
                                alt="Avatar 04"
                              />
                              <img
                                className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                                src="/images/avatar-01.jpg"
                                width="24"
                                height="24"
                                alt="Avatar 05"
                              />
                            </div>
                            <div className="text-sm text-slate-500 ml-3">Join 100K+ developers.</div>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section>
                      {/* Cards */ }
                      <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
                        <a
                          className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:-rotate-1 even:rotate-1 hover:rotate-0 transition-transform duration-700 hover:duration-100 ease-in-out p-5"
                          href="#0"
                        >
                          <div className="flex flex-col h-full">
                            <div className="grow">
                              <img className="rounded-full mb-2" src="/images/testimonial-01.jpg" width="40" height="40" alt="Testimonial 01"/>
                              <div className="text-lg font-aspekta font-[650] mb-1">“ Incredible Value “</div>
                              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                                I was able to quickly master the skills necessary to advance my career. I'm grateful for the resources Mark provided
                                and would recommend him to anyone.
                              </p>
                            </div>
                            <div className="text-xs font-aspekta font-[650] text-sky-500">— Mary Coyle</div>
                          </div>
                        </a>
                        <a
                          className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:-rotate-1 even:rotate-1 hover:rotate-0 transition-transform duration-700 hover:duration-100 ease-in-out p-5"
                          href="#0"
                        >
                          <div className="flex flex-col h-full">
                            <div className="grow">
                              <img className="rounded-full mb-2" src="/images/testimonial-01.jpg" width="40" height="40" alt="Testimonial 02"/>
                              <div className="text-lg font-aspekta font-[650] mb-1">“ The Best Newsletter “</div>
                              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                                I was able to quickly master the skills necessary to advance my career. I'm grateful for the resources Mark provided
                                and would recommend him to anyone.
                              </p>
                            </div>
                            <div className="text-xs font-aspekta font-[650] text-sky-500">— Daniel Burka</div>
                          </div>
                        </a>
                      </div>
                    </section>
                  </div>
                </div>
              </div>

              {/* Right sidebar */ }
              <aside className="md:w-[240px] lg:w-[300px] shrink-0">
                <div className="space-y-6">
                  <WidgetSponsor/>
                  <WidgetBook/>
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
