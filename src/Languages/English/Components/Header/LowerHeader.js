import React, {useEffect, useState} from 'react'
import classes from './LowerHeader.module.css'

const LowerHeader = () => {

  const [count, setCount] =  useState((25));

  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     setCount((year) => year + 1)
  //   }, 7000)

  //   return () => clearInterval(interval)
  // }, [])




  return (
    <div className={classes.lower_header}>
        <div className={classes.welcome_page}>
            <p>Welcome !</p>
            <span><bold>{count}</bold><sup>th</sup>anniversary!!!</span>
            <p>Happy Anniversary!</p>
        </div>
    </div>
  )  
}    

export default LowerHeader