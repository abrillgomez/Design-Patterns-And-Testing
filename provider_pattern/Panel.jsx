import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

function Panel ({title, children}) {
  const darkMode = useContext(ThemeContext)
  const className = darkMode ? 'panel-dark' : 'panel-light'

  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

export default Panel