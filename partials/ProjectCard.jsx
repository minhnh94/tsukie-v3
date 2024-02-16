import React from "react"
import Image from "next/image"

export function ProjectCard({ pjName, pjDesc, pjImg, pjLink, bgImg }) {
  return <a
    className={ `rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:-rotate-1 even:rotate-1 hover:rotate-0 transition-transform duration-700 hover:duration-100 ease-in-out p-5 overflow-hidden relative ${ bgImg ? 'bg-gradient-to-tr from-slate-800 to-slate-700' : '' }` }
    href={ pjLink }
    target="_blank"
    rel="nofollow noopener noreferrer"
  >
    { bgImg && <Image
      className="absolute inset-0 w-full h-full object-cover opacity-40"
      src={ `/images/${ bgImg }` }
      alt="Popular post 01"
      fill={ true }
    /> }
    <div className="flex flex-col h-full relative">
      <div className="grow">
        { pjImg
          ?
          <div className="h-10 w-10 flex items-center justify-center rounded-full mb-2">
            <img src={ pjImg.includes('http') ? pjImg : `/images/${ pjImg }` } alt=""/>
          </div>
          :
          <div className="h-10 w-10 flex items-center justify-center border border-slate-200 dark:border-slate-700 rounded-full mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
              <path
                fill="#34D399"
                fillRule="evenodd"
                d="M9.97 14.758c-.018 1.796-.497 3.248-1.072 3.242-.574-.006-1.026-1.466-1.008-3.262.017-1.796.497-3.247 1.071-3.242.575.006 1.026 1.466 1.009 3.262Zm-3.332-.408c-.977 1.502-2.16 2.461-2.64 2.143-.48-.318-.076-1.793.902-3.294.977-1.501 2.159-2.46 2.64-2.143.48.318.076 1.793-.902 3.294Zm-2.587-2.154c-1.628.73-3.137.893-3.37.364-.233-.53.897-1.55 2.524-2.28 1.628-.73 3.136-.893 3.37-.363.233.529-.897 1.55-2.524 2.28Zm2.328-3.764c-.087.573-1.585.815-3.346.542-1.76-.273-3.116-.959-3.029-1.531.087-.573 1.585-.815 3.346-.542 1.76.273 3.117.959 3.03 1.531Zm.632-1.363c-.38.434-1.77-.179-3.105-1.368C2.57 4.51 1.798 3.195 2.178 2.76c.38-.434 1.77.179 3.106 1.368C6.618 5.32 7.392 6.635 7.01 7.07Zm1.26-.797c-.554.157-1.395-1.116-1.88-2.844C5.906 1.7 5.961.17 6.514.013c.553-.158 1.394 1.116 1.879 2.844.485 1.728.43 3.257-.123 3.415Zm3.417-2.79C11.17 5.2 10.304 6.456 9.754 6.287c-.55-.168-.575-1.698-.056-3.416.519-1.718 1.385-2.974 1.934-2.806.55.169.575 1.698.056 3.417Zm2.443 2.321c-1.358 1.163-2.76 1.748-3.132 1.307-.372-.442.427-1.742 1.785-2.905 1.357-1.163 2.76-1.748 3.131-1.306.372.441-.427 1.742-1.784 2.904Zm.807 3.286c-1.765.238-3.258-.034-3.334-.608-.077-.575 1.293-1.233 3.058-1.471 1.766-.238 3.259.034 3.335.608.076.574-1.293 1.233-3.059 1.47Zm2.278 3.635c-.244.525-1.75.332-3.362-.43-1.613-.762-2.723-1.806-2.48-2.33.245-.525 1.75-.332 3.363.43s2.722 1.806 2.479 2.33Zm-3.393 3.87c-.486.308-1.65-.674-2.597-2.195-.948-1.52-1.323-3.003-.836-3.311.486-.308 1.649.674 2.597 2.195.948 1.52 1.322 3.003.836 3.31Z"
              />
            </svg>
          </div> }
        <div className={ `text-lg font-aspekta font-[650] mb-1 ${ bgImg ? 'text-white' : '' }` }>{ pjName }</div>
        <p className={ `text-sm mb-2 ${ bgImg ? 'text-white' : 'text-slate-500 dark:text-slate-400' }` }>{ pjDesc }</p>
      </div>
      <div className="text-sky-500 flex justify-end">
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="14" height="12">
          <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z"/>
        </svg>
      </div>
    </div>
  </a>
}
