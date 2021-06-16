import React from 'react';
import NavbarCompContainer from "./nav/NavbarComp.container";


const Header = React.memo(() => {
  return(
    <header>
      <NavbarCompContainer />
    </header>
  )
})

export default Header