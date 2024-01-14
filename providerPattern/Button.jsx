import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

function Button ({children}) {
  const darkMode = useContext(ThemeContext)
  const className = darkMode ? 'button-dark' : 'button-light'
  return <button className={className}>{children}</button>
}

export default Button