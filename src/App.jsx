import { useState } from 'react'
import './App.css'
import Home from './pages/Home/Home';
import Banner from './components/Banner/Banner';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Home />
    
    </div>
  )
}

export default App
