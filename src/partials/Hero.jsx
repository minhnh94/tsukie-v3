import React from 'react'

function Highlight(props) {
  return (
    <span
      className="inline-flex relative text-sky-500 before:absolute before:inset-0 before:bg-sky-200 dark:before:bg-sky-500 before:opacity-30 before:-z-10 before:-rotate-2 before:translate-y-1/4">
    { props.children }
    </span>
  )
}

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
