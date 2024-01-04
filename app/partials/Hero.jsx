import React from 'react'
import { Highlight } from "@/partials/Highlight"

function Hero() {
  return (
    <section>
      <div className="max-w-[700px]">
        <div className="pt-8 pb-10">
          <img className="rounded-full mb-5" src="/images/logo.png" width="56" height="56" alt="Me"/>
          <h1 className="h1 font-aspekta mb-5">
            <Highlight>Coding</Highlight> Capers, <Highlight>Life</Highlight> Lessons & the <Highlight>Indie Hacker</Highlight> Escapade
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            Welcome to <span className="font-medium text-sky-500">tsukie.com</span>! Explore coding, life lessons, and my indie hacker journey as I share my experiences in technology, personal growth, and entrepreneurship.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
