import React from 'react'
import './App.css'
import ModelViewer from './components/SplineViewer'

const App: React.FC = () => {
  const splinePath = import.meta.env.VITE_SPLINE_PATH

  return (
    <div className="App">
      <ModelViewer splinePath={splinePath} />
    </div>
  )
}

export default App
