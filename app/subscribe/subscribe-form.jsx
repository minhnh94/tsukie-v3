'use client'

import { CheckCircleIcon } from "@heroicons/react/20/solid"
import React from "react"
import useSubscribe from "@/hooks/useSubscribe"

export default function SubscribeForm() {
  const { email, setEmail, isLoading, isSubscribed, handleSubmit } = useSubscribe()

  return (
    <form method="post" action="https://listmonk.tsukie.com/subscription/form">
      <div className="flex flex-col md:flex-row justify-center max-w-xs mx-auto md:max-w-md md:mx-0">
        <input type="hidden" name="nonce" />
        <input
          name="email"
          type="email"
          className="form-input w-full mb-2 md:mb-0 md:mr-2"
          placeholder="Your email"
          aria-label="Your email\u2026"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isSubscribed}
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
          className={`btn text-white ${isSubscribed ? 'bg-green-500' : 'bg-sky-500 hover:bg-sky-600'
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
  )
}
