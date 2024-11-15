import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import { createTheme, MantineProvider } from "@mantine/core"
import "@mantine/core/styles.css"
import { BrowserRouter } from "react-router-dom"

const theme = createTheme({})

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>
)
