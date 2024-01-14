import React, { useState } from "react"
import Form from "./Form"
import { ThemeContext } from "./ThemeContext"

export const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <ThemeContext value={darkMode}>
        <input
          type="checkbox"
          name="darkmode"
          id="darkmode"
          onChange={() => setDarkMode(!setDarkMode)}
        />
        <Form />
      </ThemeContext>
    </>
  )
}
