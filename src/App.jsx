
import {alertDictionary} from './components/layoutcomponents/Alerts'
import {layoutDictionary} from './components/layoutcomponents/Layout'

function App() {
  console.info("🤔🤯 que onda?")
  return (
    <div className="container">
      {layoutDictionary["encabezado de página"]()}
      {alertDictionary.danger()}
      {alertDictionary.primary()}
      {alertDictionary.success()}
      {layoutDictionary["formulario básico"]()}
    </div>
  )
}

export default App
