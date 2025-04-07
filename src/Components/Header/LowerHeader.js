import React, {useState} from 'react'
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
            <p>እንኳን በደኅና መጡ !</p>
            <span><bold>{count}</bold><sup>ኛ</sup>ዓመት የምስረታ በዓል!!!</span>
            <p>እንኳን አደረሳቹ።</p>
        </div>
    </div>
  )  
}    

export default LowerHeader
