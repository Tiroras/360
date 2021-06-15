import React from 'react';
import classes from "./Footer.module.css";
import FooterNavContainer from "./three/FooterNav.container";


const Footer = React.memo(() => {
  return(
    <footer className={`${classes.footer} bg-success text-light mt-auto mb-0 footer`}>
      <div className={classes.block}>
        <div className={classes.el}>
          Icons made by&nbsp;
          <a href="https://www.freepik.com"
             title="Freepik"
             className={'text-light'}>Freepik</a> from&nbsp;
          <a
            href="https://www.flaticon.com/"
            title="Flaticon"
            className={'text-light'}>www.flaticon.com</a>
        </div>
        <div className={classes.el}>

        </div>
        <div className={classes.el}>
          <FooterNavContainer />
        </div>
      </div>
    </footer>
  )
})

export default Footer;