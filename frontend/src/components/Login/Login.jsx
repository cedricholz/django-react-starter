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

const Login = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate() // To programmatically navigate to other routes

  const handleSubmit = (event) => {
    event.preventDefault()
    setLoading(true)

    // Simulate an API call
    setTimeout(() => {
      setLoading(false)
      console.log("Logged in!")
    }, 2000)
  }

  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={{ fontFamily: "Greycliff CF, sans-serif", fontWeight: 900 }}
      >
        Welcome Back!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Don't have an account?{" "}
        <Anchor
          size="sm"
          component="button"
          onClick={() => navigate("/signup")}
        >
          Sign up here
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={handleSubmit}>
          <Stack spacing="md">
            <TextInput
              label="Email"
              placeholder="you@example.com"
              required
              type="email"
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              required
            />
            <Button type="submit" fullWidth mt="md" loading={loading}>
              {loading ? "Logging in..." : "Log In"}
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  )
}

export default Login
