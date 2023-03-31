import React from "react"

export function Testimonials() {
  return <section>
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
}
