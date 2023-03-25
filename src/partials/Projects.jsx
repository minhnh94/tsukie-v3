import React from 'react'
import { ProjectCard } from "@/partials/ProjectCard"

function Projects() {
  return (
    <section>
      <h2 className="font-aspekta text-xl font-[650] mb-5">Projects</h2>

      {/* Cards */ }
      <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
        <ProjectCard
          pjName="WallCal"
          pjDesc="The best sticky calendar on desktop background for macOS"
          pjImg="https://wallcal.app/my-assets/app-icon.png"
          pjLink="https://wallcal.app/"
          bgImg="wallcal-screenshot.webp"
        />
        <ProjectCard
          pjName="Coming soon..."
          pjDesc="Our next project is being brewed ;)"
          />
      </div>
    </section>
  )
}

export default Projects
