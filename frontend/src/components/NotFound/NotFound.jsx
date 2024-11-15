import React from "react"
import "./NotFound.css"

import ButtonWrapper from "../core/ButtonWrapper/ButtonWrapper.jsx"

const NotFound = ({ prop }) => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-heading">404</h1>
      <p className="not-found-message">
        Oops! The page you're looking for doesn't exist.
      </p>
      <ButtonWrapper to="/">Back Home</ButtonWrapper>
    </div>
  )
}

export default NotFound
