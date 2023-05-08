import React from 'react'
import Spline from '@splinetool/react-spline'

interface SplineViewerProps {
  splinePath: string
}

const SplineViewer: React.FC<SplineViewerProps> = ({ splinePath }) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Spline scene={splinePath} title="Spline 3D" />
    </div>
  )
}

export default SplineViewer
