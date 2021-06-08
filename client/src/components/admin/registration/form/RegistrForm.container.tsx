import React, {useCallback, useEffect, useState} from 'react';
import RegistrationForm from "./RegistrForm";
import {useDispatch} from "react-redux";
import {registration} from "../../../../store/user-reducer";
import {authAPI} from "../../../../api/api";
import useHttp from "../../../../assets/hooks/http";


const RegistrationFormContainer = () => {
  const dispatch = useDispatch();
  const {error, request} = useHttp();

  const handleSubmit = async (form) => {
    // console.log(form);
    // authAPI.postRegistr(form)
    // dispatch(registration(form.email, form.password));
    try{
      const data = await request('/api/auth/register', "POST", {...form});
      console.log("Data", data)
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