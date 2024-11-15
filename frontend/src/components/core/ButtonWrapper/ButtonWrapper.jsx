import React from "react"
import { Button } from "@mantine/core"
import { Link } from "react-router-dom"

const ButtonWrapper = (props) => {
  const { children, to, target, onClick, component, ...rest } = props

  const buttonComponent = component || (to ? Link : "button")

  return (
    <Button component={buttonComponent} to={to} target={target} {...rest}>
      {children}
    </Button>
  )
}

export default ButtonWrapper
