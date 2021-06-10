import React from 'react';
import RegistrationForm from "./RegistrForm";
import useHttp from "../../../../assets/hooks/http";


const RegistrationFormContainer = () => {
  const {request} = useHttp();

  const handleSubmit = async (form) => {
    // console.log(form);
    // authAPI.postRegistr(form)
    // dispatch(registration(form.email, form.password));
    try{
      const data = await request('/api/auth/register', "POST", {...form});
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