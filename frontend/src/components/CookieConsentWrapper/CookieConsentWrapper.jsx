import React from "react"
import CookieConsent from "react-cookie-consent"
import ReactPixel from "react-facebook-pixel"
import ReactGA from "react-ga4"

const CookieConsentWrapper = ({consentCookieName}) => {
    return (
        <CookieConsent
            location="bottom"
            buttonText="Accept"
            cookieName={consentCookieName}
            style={{
                background: "#FFFFFF",
                color: "#fff",
                fontSize: "14px",
                zIndex: 1201,
            }}
            buttonStyle={{
                background: "#0073ce",
                color: "white",
                fontSize: "14px",
                borderRadius: "2px",
            }}
            declineButtonStyle={{
                background: "transparent",
                borderRadius: "2px",
                border: "none",
                color: "black",
                fontSize: "14px",
            }}
            expires={150}
            enableDeclineButton
            declineButtonText="Decline"
            onAccept={() => {
                ReactGA.ga("consent.grant")
                ReactPixel.grantConsent()
            }}
            onDecline={() => {
                ReactGA.ga("consent.revoke")
                ReactPixel.revokeConsent()
            }}
        >
            <div
                style={{
                    color: "black",
                }}
            >
                This website uses cookies to enhance your experience. By accepting,
                you consent to the use of cookies.
                <span style={{fontSize: "12px", marginLeft: "5px"}}>
            <a href="/cookies" style={{color: "#0073ce"}}>
              View Cookie Policy
            </a>
          </span>
            </div>
        </CookieConsent>
    )
}
export default CookieConsentWrapper