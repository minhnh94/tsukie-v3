'use client'
import { Unity, useUnityContext } from "react-unity-webgl"
import { useEffect } from "react"

export default function UnityPlayer() {
  const { unityProvider } = useUnityContext({
    loaderUrl: '../endless-defense/Build/endless-defense.loader.js',
    dataUrl: '../endless-defense/Build/endless-defense.data.unityweb',
    frameworkUrl: '../endless-defense/Build/endless-defense.framework.js.unityweb',
    codeUrl: '../endless-defense/Build/endless-defense.wasm.unityweb',
  })
  useEffect(() => {
    // select the canvas element and add width and height attribute to it
    // this is the intended resolution of the game
    const canvas = document.querySelector('canvas')
    canvas.width = 1400
    canvas.height = 700
  }, [])

  // matchWebGLToCanvasSize={false} is important to prevent the canvas from resizing to the size of the parent element
  return <Unity id={ "game" } unityProvider={ unityProvider } className="w-full" matchWebGLToCanvasSize={ false }/>
}
