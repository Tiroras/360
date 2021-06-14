import React from 'react';
import Welcome from "./welcome/Welcome";
import Metod from "./metod/Metod";
import CompetenceMainPage from "./competence/CompetencesMainPage";


const Main = () =>{
  return(
    <div>
      <Welcome />
      <Metod />
      <CompetenceMainPage />
    </div>
  )
}

export default Main;