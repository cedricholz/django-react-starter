import React, { useState } from "react"
import "./Home.css"

const reactLogo = "react.svg"
const viteLogo = "vite.svg"
const djangoLogo = "django.svg"

const djangoLogoPath = `/static/${djangoLogo}`
const reactLogoPath = `/static/${reactLogo}`
const viteLogoPath = `/static/${viteLogo}`

const Home = ({ prop }) => {
  const [count, setCount] = useState(0)

  return (
    <div className="home">
      <div>
        <a href="https://www.djangoproject.com/" target="_blank">
          <img src={djangoLogoPath} className="logo" alt="Django logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogoPath} className="logo react" alt="React logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogoPath} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Django + React + Vite</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default Home
