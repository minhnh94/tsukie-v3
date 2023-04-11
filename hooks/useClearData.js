import { useEffect } from 'react'

const useClearData = () => {
  useEffect(() => {
    clearCookiesAndSiteData()
  }, [])

  const clearCookiesAndSiteData = () => {
    const cookies = document.cookie.split(";")

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i]
      const eqPos = cookie.indexOf("=")
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;"
    }
    // Clear local storage
    localStorage.clear()
    // Clear session storage
    sessionStorage.clear()
  }
}

export default useClearData
