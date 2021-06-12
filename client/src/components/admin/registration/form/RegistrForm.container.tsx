import React from 'react';
import RegistrationForm from "./RegistrForm";
import useHttp from "../../../../assets/hooks/http";
import { Redirect } from 'react-router-dom';


const RegistrationFormContainer = () => {
  const {request} = useHttp();

  const handleSubmit = async (form) => {
    try{
      await request('/api/auth/register', "POST", {...form});
    } catch (e) {

    }
  }

  return(
    <RegistrationForm
      onSubmit={handleSubmit}
    />
  )
}

export default RegistrationFormContainer;