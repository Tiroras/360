import React from 'react'
import classes from "./Content.module.css";
import Router from "./router/Router";


interface IProps {
  // initialized: boolean;
}

const Content = (props: IProps) => {
  return (
    <main className={`${classes.content} content`}>
      <div>
        <Router/>
      </div>
      {/*{props.initialized ? <Router /> : <Preloader />}*/}
    </main>
  );
}

export default Content;