import { Dialog } from "./Dialog"

function App() {
  return (
    <div>
      <h1>Mi aplicación</h1>
      <Dialog>
        <h1>Este es mi titulo</h1>
        <h3>Este es mi subtitulo</h3>
        <p>
          <span>Este es mi <strong>mensaje</strong>.</span>
        </p>
      </Dialog>
    </div>
  )
}
