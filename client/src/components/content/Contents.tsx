import React from 'react'
import classes from "./Content.module.css";
import Router from "./router/Router";
import Preloader from "../../assets/elements/Preloadre";


interface IProps {
  initialized: boolean;
}

const Content = (props: IProps) => {
  return(
    <div>
      <main className={classes.content}>
        {props.initialized ? <Router /> : <Preloader />}
      </main>
    </div>
  )
}

export default Content;