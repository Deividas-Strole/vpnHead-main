import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
   home()
  )
}

export default App
