import React from "react"
import { PasswordInput, TextInput } from "@mantine/core"
import { Link } from "react-router-dom"

const TextInputWrapper = (props) => {
  const { password, value, onChange, children, ...rest } = props

  if (password) {
    return (
      <PasswordInput
        onChange={(event) => {
          console.log(event.target)
          onChange(event.target.value)
        }}
        value={value}
        {...rest}
      >
        {children}
      </PasswordInput>
    )
  }
  return (
    <TextInput
      onChange={(event) => {
        onChange(event.target.value)
      }}
      value={value}
      {...rest}
    >
      {children}
    </TextInput>
  )
}

export default TextInputWrapper
