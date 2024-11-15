import React, { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "../Home/Home.jsx"
import NotFound from "../NotFound/NotFound.jsx"
import Login from "../Login/Login.jsx"
import SignUp from "../SignUp/SignUp.jsx"

const Router = ({ prop }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Router
