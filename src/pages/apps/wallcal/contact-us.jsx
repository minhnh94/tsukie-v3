import SideNavigation from "@/partials/SideNavigation"
import MainContent from "@/partials/MainContent"
import MiddleArea from "@/partials/MiddleArea"
import RightSidebar from "@/partials/RightSidebar"
import WidgetSponsor from "@/partials/WidgetSponsor"
import Screen from "@/partials/Screen"

function ContactUs() {
  return (
    <Screen>
      <SideNavigation/>

      <MainContent>
        {/* Content */ }
        <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
          <MiddleArea>
            <div className="space-y-10 react_markdown">
              <img src="/images/wallcal-icon.png" alt="WallCal app logo"
                   style={ { width: "30%", height: "30%", margin: "auto" } }/>
              <p>If you purchased our macOS app <a href="https://wallcal.app/" target="_blank" rel="nofollow noopener noreferrer">WallCal/WallCal Lite</a> and you encountered any troubles, or need
                support regarding a specific function, please don't hesitate to email us at <a href="mailto:tsukie.studio@gmail.com">tsukie.studio@gmail.com</a>. We are more than happy to assist you!
              </p>
            </div>
          </MiddleArea>

          <RightSidebar>
            <WidgetSponsor imageRotationClass="rotate-1" title="My latest project" pjName="WallCal" img="/images/wallcal-screenshot.webp"
                           pjDesc="The best sticky calendar on desktop background for macOS" link="https://wallcal.app/"/>
          </RightSidebar>
        </div>
      </MainContent>
    </Screen>
  )
}

export default ContactUs
