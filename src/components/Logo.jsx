import React from 'react'

function Logo({ width = "100px" }) {
  return (
    <div style={{ width }}>
      <span style={{ fontWeight: 'bold', fontSize: '1.5em' }}>Log</span>
    </div>
  )
}

export default Logo
