import React from 'react'
import { Highlight } from "@/partials/Highlight"

function Hero() {
  return (
    <section>
      <div className="max-w-[700px]">
        <div className="pt-8 pb-10">
          <img className="rounded-full mb-5" src="/images/logo.png" width="56" height="56" alt="Me"/>
          <h1 className="h1 font-aspekta mb-5">
            <Highlight>Tech</Highlight> Whiz, <Highlight>Soul</Highlight> Searcher, <Highlight>Dream</Highlight> Chaser
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            Welcome to <span className="font-medium text-sky-500">tsukie.com</span>, my cozy digital home on the web! I write about tech, personal thoughts and lessons, and my attempts to make a dent in the universe.<br/>
            100% human written content, completely free of AI/LLM regurgitated nonsense 😉
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
