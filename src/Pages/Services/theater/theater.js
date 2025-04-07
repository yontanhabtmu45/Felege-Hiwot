import React from 'react'
import Layout from '../../../Components/Layout/Layout'
import Services from '../Services'
import classes from './theater.module.css'

function theater() {
  return (
    <Layout>
      <Services/>
        <div id="theater" style={{textAlign: "center", margin: "26px"}}>ኪነ-ጥበብ ክፍል</div>
    </Layout>
  )
}

export default theater