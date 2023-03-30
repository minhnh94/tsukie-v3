import React from "react"

export function ExpTimeline() {
  return <ul className="-my-2">
    { /* Role */ }
    <li className="relative py-2">
      <div className="flex items-start mb-1">
        <div className="absolute left-0 h-full w-px bg-slate-200 dark:bg-slate-800 self-start ml-[28px] -translate-x-1/2 translate-y-3" aria-hidden="true"/>
        <div
          className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
            <path fill="#DE4D3B"
                  d="M15.912 6.545h-7.75v3.273h4.393c-.702 2.182-2.437 2.91-4.428 2.91-2.12.002-3.992-1.368-4.601-3.37a4.693 4.693 0 0 1 1.959-5.307 4.854 4.854 0 0 1 5.722.33l2.414-2.265C10.947-.31 6.964-.69 3.867 1.186.771 3.06-.683 6.735.308 10.18c.99 3.445 4.185 5.822 7.819 5.82 4.477 0 8.525-2.91 7.785-9.456Z"/>
          </svg>
        </div>
        <div className="pl-20 space-y-1">
          <div className="text-xs text-slate-500 uppercase">May 2020 <span className="text-slate-400 dark:text-slate-600">·</span> Present</div>
          <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Senior Front-end Engineer</div>
          <div className="text-sm font-medium text-slate-800 dark:text-slate-100">Google</div>
          <div className="text-sm text-slate-500 dark:text-slate-400">In my role as a Senior Software Engineer for Google, I am responsible for developing and maintaining the Chrome Web Experience.
          </div>
        </div>
      </div>
    </li>
    { /* Role */ }
    <li className="relative py-2">
      <div className="flex items-start mb-1">
        <div className="absolute left-0 h-full w-px bg-slate-200 dark:bg-slate-800 self-start ml-[28px] -translate-x-1/2 translate-y-3" aria-hidden="true"/>
        <div
          className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12">
            <path className="fill-slate-800 dark:fill-slate-100"
                  d="M5.64 0c3.116 0 5.641 2.686 5.641 6s-2.525 6-5.64 6C2.526 12 0 9.314 0 6c0-3.313 2.525-6 5.64-6Zm9.008.351c1.558 0 2.82 2.53 2.82 5.65h.001c0 3.118-1.263 5.648-2.82 5.648-1.558 0-2.82-2.53-2.82-5.649S13.09.351 14.648.351Zm4.36.589C19.556.94 20 3.205 20 6c0 2.794-.444 5.06-.992 5.06s-.992-2.265-.992-5.06c0-2.794.444-5.06.992-5.06Z"/>
          </svg>
        </div>
        <div className="pl-20 space-y-1">
          <div className="text-xs text-slate-500 uppercase">May 2017 <span className="text-slate-400 dark:text-slate-600">·</span> Apr 2020</div>
          <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Senior Front-end Engineer</div>
          <div className="text-sm font-medium text-slate-800 dark:text-slate-100">Medium</div>
          <div className="text-sm text-slate-500 dark:text-slate-400">In my role as a Senior Software Engineer for Google, I am responsible for developing and maintaining the Chrome Web Experience.
          </div>
        </div>
      </div>
    </li>
    { /* Role */ }
    <li className="relative py-2">
      <div className="flex items-start mb-1">
        <div className="absolute left-0 h-full w-px bg-slate-200 dark:bg-slate-800 self-start ml-[28px] -translate-x-1/2 translate-y-3" aria-hidden="true"/>
        <div
          className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16">
            <path fill="#00ADEF"
                  d="M18.995 3.695c-.08 1.769-1.345 4.23-3.878 7.383C12.505 14.308 10.368 16 8.547 16 7.44 16 6.49 15 5.7 13c-.475-1.845-1.03-3.614-1.504-5.46-.554-2-1.187-3-1.82-3-.159 0-.634.308-1.504.847L0 4.31c.95-.77 1.9-1.615 2.77-2.384C4.036.849 4.986.31 5.62.234 7.122.08 7.993 1.08 8.31 3.156c.396 2.23.634 3.692.792 4.23.396 1.846.87 2.846 1.424 2.846.396 0 1.03-.615 1.82-1.846.792-1.23 1.188-2.153 1.267-2.769.08-1.076-.316-1.615-1.266-1.615-.475 0-.95.077-1.425.308.95-3 2.691-4.384 5.382-4.307 1.9.077 2.77 1.307 2.691 3.692Z"/>
          </svg>
        </div>
        <div className="pl-20 space-y-1">
          <div className="text-xs text-slate-500 uppercase">Jan 2017 <span className="text-slate-400 dark:text-slate-600">·</span> Apr 2017</div>
          <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Cloud Software Developer</div>
          <div className="text-sm font-medium text-slate-800 dark:text-slate-100">Vimeo</div>
          <div className="text-sm text-slate-500 dark:text-slate-400">In my role as a Senior Software Engineer for Google, I am responsible for developing and maintaining the Chrome Web Experience.
          </div>
        </div>
      </div>
    </li>
    { /* Role */ }
    <li className="relative py-2">
      <div className="flex items-start mb-1">
        <div
          className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17">
            <path fill="#6366F1"
                  d="M2.486 5.549C3.974 7.044 5.953 7.89 8.009 8.045c-.138-2.065-.997-4.053-2.486-5.548C4.035 1.002 2.117.154 0 0c.138 2.065.997 4.053 2.486 5.549Zm12.028 0c-1.488 1.495-3.467 2.342-5.523 2.496.138-2.065.997-4.053 2.486-5.548C12.888 1.002 14.883.154 17 0c-.153 2.065-.997 4.053-2.486 5.549Zm0 5.902c-1.488-1.495-3.467-2.342-5.523-2.496.138 2.065.997 4.053 2.486 5.548C12.965 15.998 14.944 16.846 17 17c-.153-2.127-.997-4.13-2.486-5.549Zm-12.028 0c1.488-1.495 3.467-2.342 5.6-2.496-.138 2.065-.998 4.053-2.486 5.548C4.035 15.998 2.117 16.861 0 17c.138-2.127.997-4.13 2.486-5.549Z"/>
          </svg>
        </div>
        <div className="pl-20 space-y-1">
          <div className="text-xs text-slate-500 uppercase">Feb 2016 <span className="text-slate-400 dark:text-slate-600">·</span> Dec 2016</div>
          <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Cloud Software Engineering Intern</div>
          <div className="text-sm font-medium text-slate-800 dark:text-slate-100">Qonto</div>
          <div className="text-sm text-slate-500 dark:text-slate-400">In my role as a Senior Software Engineer for Google, I am responsible for developing and maintaining the Chrome Web Experience.
          </div>
        </div>
      </div>
    </li>
  </ul>
}
