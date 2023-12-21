import SideNavigation from "@/partials/SideNavigation"
import MainContent from "@/partials/MainContent"
import MiddleArea from "@/partials/MiddleArea"
import RightSidebar from "@/partials/RightSidebar"
import WidgetSponsor from "@/partials/WidgetSponsor"
import Screen from "@/partials/Screen"

function Page() {
  return (
    <Screen>
      <SideNavigation/>

      <MainContent>
        {/* Content */ }
        <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
          <MiddleArea>
            <div className="space-y-10 react_markdown">
              <h2>WallCal Expert calendar add-on feature preview</h2>
              <br/>
              <h3>🗓 Option to replace the month view with the weekly agenda view</h3>
              <br/>
              <img src="/images/weekly-agenda.gif" alt="WeeklyAgenda WallCal"
                   style={ { width: "70%", height: "70%", margin: "auto" } }/>
              <br/>
              <h3>🗓 You can change the visible time range while in week view mode</h3>
              <br/>
              <img src="/images/visible-period.gif" alt="VisiblePeriod WallCal"
                   style={ { width: "70%", height: "70%", margin: "auto" } }/>
              <br/>
              <h3>🗓 And you can change the number of days displayed in week view mode (the leftmost day is today)</h3>
              <br/>
              <img src="/images/day-num.gif" alt="DayNum WallCal"
                   style={ { width: "70%", height: "70%", margin: "auto" } }/>
              <br/>
              <h3>📐 Resize the calendar freely as you see fit</h3>
              <br/>
              <img src="/images/resize-calendar.gif" alt="ResizeCalendar WallCal"
                   style={ { width: "70%", height: "70%", margin: "auto" } }/>
              <br/>
              <h3>📌 Choose which calendar/reminder sets to be displayed on the calendar</h3>
              <br/>
              <img src="/images/toggle-calendar-set.gif" alt="ToggleCalendarSetToggleCalendarSet WallCal"
                   style={ { width: "70%", height: "70%", margin: "auto" } }/>
              <br/>
              <h3>👁 Option to completely hide the to-do list view or the calendar view</h3>
              <br/>
              <img src="/images/toggle-hidden-view.gif" alt="ToggleHiddenViewToggleHiddenView WallCal"
                   style={ { width: "70%", height: "70%", margin: "auto" } }/>
              <br/>
              <h3>🎨 Change the calendar's background color freely</h3>
              <br/>
              <img src="/images/change-color.gif" alt="ChangeColor WallCal"
                   style={ { width: "70%", height: "70%", margin: "auto" } }/>
              <br/>
              <h3>⏱ Set the hour indicator between 12-hour or 24-hour format</h3>
              <br/>
              <p>We hope the title was self-explanatory enough 😬</p>
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

export default Page
