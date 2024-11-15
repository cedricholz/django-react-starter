import React, { useState } from "react"
import {
  TextInput,
  PasswordInput,
  Button,
  Anchor,
  Paper,
  Text,
  Container,
  Title,
  Stack,
} from "@mantine/core"
import { useNavigate } from "react-router-dom"
import Axios from "../../util/Axios.js"
import TextInputWrapper from "../core/TextInputWrapper/TextInputWrapper.jsx"

const SignUp = () => {
  const [loading, setLoading] = useState(false)
  const [username, setUsername] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password1, setPassword1] = useState("")
  const [password2, setPassword2] = useState("")
  const navigate = useNavigate()

  console.log("firstName", firstName)
  console.log("lastName", lastName)
  console.log("email", email)
  console.log("password1", password1)
  console.log("password2", password2)

  const handleSignUp = (event) => {
    event.preventDefault()
    setLoading(true)
    console.log("SING")

    Axios.post("/api/signup/", {
      username: username,
      first_name: firstName,
      last_name: lastName,
      email: email,
      password1: password1,
      password2: password2,
    })
      .then((e) => {
        setLoading(false)
        navigate("/login")
      })
      .catch((e) => {
        setLoading(false)
      })
  }

  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={{ fontFamily: "Greycliff CF, sans-serif", fontWeight: 900 }}
      >
        Create an Account
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Already have an account?{" "}
        <Anchor size="sm" component="button" onClick={() => navigate("/login")}>
          Log in here
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={handleSignUp}>
          <Stack spacing="md">
            <TextInputWrapper
              label="Username"
              placeholder="Your username"
              required
              value={username}
              onChange={setUsername}
            />
            <TextInputWrapper
              label="First Name"
              placeholder="Your first name"
              required
              value={firstName}
              onChange={setFirstName}
            />
            <TextInputWrapper
              label="Last Name"
              placeholder="Your last name"
              required
              value={lastName}
              onChange={setLastName}
            />
            <TextInputWrapper
              label="Email"
              placeholder="you@example.com"
              required
              type="email"
              value={email}
              onChange={setEmail}
            />
            <TextInputWrapper
              label="Password"
              placeholder="Create a password"
              required
              password={true}
              value={password1}
              onChange={setPassword1}
            />
            <TextInputWrapper
              label="Confirm Password"
              placeholder="Confirm your password"
              required
              password={true}
              value={password2}
              onChange={setPassword2}
            />
            <Button type="submit" fullWidth mt="md" loading={loading}>
              {loading ? "Creating Account..." : "Sign Up"}
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  )
}

export default SignUp
