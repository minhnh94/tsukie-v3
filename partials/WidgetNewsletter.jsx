'use client'
import React from 'react'
import { CheckCircleIcon } from "@heroicons/react/20/solid"
import useSubscribe from "@/hooks/useSubscribe"

function WidgetNewsletter() {
  const { email, setEmail, isLoading, isSubscribed, handleSubmit } = useSubscribe();

  return (
    <div className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:rotate-1 even:-rotate-1 p-5">
      {/* People who subscribed component - reserved for later */}
      {/*<div className="text-center mb-1">*/}
      {/*  <div className="inline-flex -space-x-3 -ml-0.5">*/}
      {/*    <img*/}
      {/*      className="rounded-full border-2 border-white dark:border-slate-800 box-content"*/}
      {/*      src={ Avatar01 }*/}
      {/*      width="24"*/}
      {/*      height="24"*/}
      {/*      alt="Avatar 01"*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className="text-center mb-8">
        <div className="font-aspekta font-[650] mb-1">Discover the coder's life balance!</div>
        <p className="text-sm text-slate-500 dark:text-slate-400">Subscribe for insights on coding, life experiences, and my indie journey.</p>
      </div>
      <form method="post" action="https://listmonk.tsukie.com/subscription/form">
        <input type="hidden" name="nonce" />
        <div className="mb-2">
          <label className="sr-only" htmlFor="newsletter">
            Your email…
          </label>
          <input
            id="newsletter"
            name="email"
            type="email"
            className="form-input py-1 w-full"
            placeholder="Your email…"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
            required
            disabled={ isSubscribed }
          />
        </div>
        <input
          type="checkbox"
          id="18871"
          name="l"
          value="18871bcb-292b-451c-b3a3-126779440e75"
          checked
          className="hidden"
          readOnly
        />
        <button
          className={ `btn-sm w-full text-slate-100 ${
            isSubscribed ? "bg-green-500" : "bg-sky-500 hover:bg-sky-600"
          }` }
          type="submit"
          disabled={ isLoading || isSubscribed }
        >
          { isSubscribed ? (
            <CheckCircleIcon className="w-5 h-5"/>
          ) : isLoading ? (
            "Subscribing..."
          ) : (
            "Subscribe"
          ) }
        </button>
      </form>
    </div>
  )
}

export default WidgetNewsletter
