import { GlobalProvider } from "@hooks/globalContext";
import { AppUI } from "./AppUI";
import './styles/App.css'
function App() {
  return (
    <GlobalProvider>
      <AppUI/>
    </GlobalProvider>
  )
}

export default App
