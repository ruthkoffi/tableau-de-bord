import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './Header'
import Home from './Home'

const App = () => {
  return (
    <div>
      <Header />

      <div class="flex ">
        <Sidebar />
        <Home />
      </div>
      
    </div>
  )
}

export default App
