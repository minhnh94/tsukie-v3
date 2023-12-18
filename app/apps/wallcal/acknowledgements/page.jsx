import SideNavigation from "@/partials/SideNavigation"
import MainContent from "@/partials/MainContent"
import MiddleArea from "@/partials/MiddleArea"
import RightSidebar from "@/partials/RightSidebar"
import WidgetSponsor from "@/partials/WidgetSponsor"
import Screen from "@/partials/Screen"
import React from "react"

function Page() {
  return (
    <Screen>
      <SideNavigation/>

      <MainContent>
        {/* Content */ }
        <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
          <MiddleArea>
            <div className="space-y-10 react_markdown">
              <p>WallCal uses a number of excellent open source projects, information for these and their copyright notices
                are below.</p>
              <h3>https://github.com/sindresorhus/Defaults</h3>
              <h4>MIT License</h4>
              <p>{ `Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)` }</p>
              <p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
                associated
                documentation files (the "Software"), to deal in the Software without restriction, including without
                limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
                the
                Software, and to permit persons to whom the Software is furnished to do so, subject to the following
                conditions:

                The above copyright notice and this permission notice shall be included in all copies or substantial
                portions
                of the Software.

                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
                LIMITED
                TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
                SHALL
                THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
                OF
                CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
                DEALINGS IN THE SOFTWARE.</p><br/>
              <h3>https://github.com/sindresorhus/KeyboardShortcuts</h3>
              <h4>MIT License</h4>

              <p>{ `Copyright(c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com)` }</p>

              <p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
                associated documentation files (the "Software"), to deal in the Software without restriction, including
                without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
                following conditions:

                The above copyright notice and this permission notice shall be included in all copies or substantial
                portions of the Software.

                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
                LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO
                EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
                AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
                OR OTHER DEALINGS IN THE SOFTWARE.</p><br/>
              <h3>https://github.com/sindresorhus/LaunchAtLogin</h3>
              <h4>MIT License</h4>

              <p>{ `Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)` }</p>

              <p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
                associated documentation files (the "Software"), to deal in the Software without restriction, including
                without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
                following conditions:

                The above copyright notice and this permission notice shall be included in all copies or substantial
                portions of the Software.

                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
                LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO
                EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
                AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
                OR OTHER DEALINGS IN THE SOFTWARE.</p><br/>
              <h3>https://github.com/sindresorhus/Preferences</h3>
              <h4>MIT License</h4>

              <p>{ `Copyright(c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)` }</p>

              <p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
                associated documentation files (the "Software"), to deal in the Software without restriction, including
                without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
                following conditions:

                The above copyright notice and this permission notice shall be included in all copies or substantial
                portions of the Software.

                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
                LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO
                EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
                AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
                OR OTHER DEALINGS IN THE SOFTWARE.</p><br/>
              <h3>https://github.com/malcommac/SwiftDate</h3>
              <h4>MIT License</h4>

              <p>Copyright (c) 2018 Daniele Margutti</p>

              <p>Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:

                The above copyright notice and this permission notice shall be included in all
                copies or substantial portions of the Software.

                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                SOFTWARE.</p><br/>
              <h3>https://github.com/RevenueCat/purchases-ios</h3>
              <h4>MIT License</h4>

              <p>Copyright (c) 2017 Jacob Eiting</p>

              <p>Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:

                The above copyright notice and this permission notice shall be included in all
                copies or substantial portions of the Software.

                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                SOFTWARE.</p><br/>
              <h3>https://github.com/microsoft/appcenter-sdk-apple</h3>
              <h4>MIT License</h4>
              <p>Visual Studio App Center SDK for Apple platforms</p>

              <p>Copyright (c) Microsoft Corporation</p>

              <p>All rights reserved.</p>


              <p>Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:

                The above copyright notice and this permission notice shall be included in
                all copies or substantial portions of the Software.

                THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                THE SOFTWARE.</p><br/>
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
