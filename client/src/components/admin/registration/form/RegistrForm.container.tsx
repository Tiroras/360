import React, {useState} from 'react';
import RegistrationForm from "./RegistrForm";
import useHttp from "../../../../assets/hooks/http";
import { Redirect } from 'react-router-dom';


const RegistrationFormContainer = () => {
  const {request} = useHttp();
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (form) => {
    try{
      await request('/api/auth/register', "POST", {...form});
      setRedirect(true)
    } catch (e) {

    }
  }

  if(redirect){
    return <Redirect to={"/"} />
  }

  return(
    <RegistrationForm
      onSubmit={handleSubmit}
    />
  )
}

export default RegistrationFormContainer;