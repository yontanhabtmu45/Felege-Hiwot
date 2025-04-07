import React from 'react'
import Services from './Services'

const outLaid = ({children}) => {
  return (
    <div>
      <Services/>
        {children}
    </div>
  )
}

export default outLaid 