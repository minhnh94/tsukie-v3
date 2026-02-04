import Header from "@/partials/Header"
import React from "react"
import Footer from "@/partials/Footer"

function MainContent(props) {
  return (
    <main className="grow min-w-0 overflow-hidden supports-[overflow:clip]:overflow-clip px-6">
      <div className="w-full h-full max-w-[1072px] mx-auto flex flex-col">
        <Header />
        {props.children}
        <Footer />
      </div>
    </main>
  )
}

export default MainContent
