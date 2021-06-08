import React from 'react'
import classes from "./Content.module.css";
import Router from "./router/Router";


const Content = () => {
  return(
    <div>
      <main className={classes.content}>
        <Router />
      </main>
    </div>
  )
}

export default Content;