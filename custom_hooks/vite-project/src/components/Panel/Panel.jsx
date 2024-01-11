import { useThemeContext } from "../../context/ThemeContext";
import './Panel.css'
import { Products } from "../Products";

export const Panel = () => {
  const {darkMode} = useThemeContext()

  return (
    <>
      <div className={`panel-${darkMode ? "dark" : "light"}`}>
        <Products />
      </div>
    </>
  )
}
