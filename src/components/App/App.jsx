import '@/components/App/App.module.css'
import { useState } from 'react'
import QRArea from '../QRArea'

const App = () => {
  const [string, setString] = useState()
  return (
    <div className="App">
      <input onChange={(e) => setString(e.target.value)} />
      <QRArea string={string} />
    </div>
  )
}

export default App
