import { useEffect } from "react"
import "./App.css"
import ReactGA from "react-ga4"
import Cookies from "js-cookie"
import ReactPixel from "react-facebook-pixel"
import CookieConsentWrapper from "./components/CookieConsentWrapper/CookieConsentWrapper.jsx"
import Header from "./components/Header/Header.jsx"
import Home from "./components/Home/Home.jsx"
import { Routes, Route } from "react-router-dom"
import Router from "./components/Router/Router.jsx"

const App = () => {
  const consentCookieName = "my_consent_cookie"
  const consentCookie = Cookies.get(consentCookieName)
  const GoogleTrackingId = "" // TODO
  const MetaPixelId = "" // TODO

  useEffect(() => {
    if (import.meta.env.REACT_APP_ENV === "production") {
      if (MetaPixelId) {
        ReactPixel.init(MetaPixelId)
      }
      if (GoogleTrackingId) {
        ReactGA.initialize([
          {
            trackingId: GoogleTrackingId,
          },
        ])
      }
      if (!consentCookie) {
        ReactGA.ga("consent.revoke")
        ReactPixel.revokeConsent()
      }
    }
  }, [])

  return (
    <div className="app">
      <Header />
      <Router />
      <CookieConsentWrapper consentCookieName={consentCookieName} />
    </div>
  )
}

export default App
