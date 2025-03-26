import React from 'react'
import classes from './LowerHeader.module.css'

const LowerHeader = () => {
  return (
    <div className={classes.lower_header}>
        <div className={classes.welcome_page}>
            <p>እንኳን በደኅና መጡ !</p>
            <span><bold>25</bold><sup>ኛ</sup>ዓመት የምስረታ በዓል!!!</span>
            <p>እንኳን አደረሳቹ።</p>
        </div>
    </div>
  )  
}    

export default LowerHeader