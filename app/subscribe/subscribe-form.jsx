'use client'

import React from "react"

export default function SubscribeForm() {

  return (
    <form method="post" action="https://listmonk.tsukie.com/subscription/form">
      <div className="flex flex-col md:flex-row justify-center max-w-xs mx-auto md:max-w-md md:mx-0">
        <input type="hidden" name="nonce" />
        <input
          name="email"
          type="email"
          className="form-input w-full mb-2 md:mb-0 md:mr-2"
          placeholder="Your email"
          aria-label="Your email…"
          required
        />
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
          className="btn text-white bg-sky-500 hover:bg-sky-600"
          type="submit"
        >
          Subscribe
        </button>
      </div>
    </form>
  )
}
