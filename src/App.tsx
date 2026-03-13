import { Provider } from "react-redux"
import { store } from "./lib/app/store/store"
import { HomePage } from "./lib/presentation/pages/HomePage"

function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  )
}

export default App