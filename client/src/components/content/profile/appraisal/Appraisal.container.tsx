import React, {useEffect} from 'react';
import Appraisal from "./Appraisal";
import useHttp from "../../../../assets/hooks/http";
import {useSelector} from "react-redux";
import {ReducersType} from "../../../../store/store";


const AppraisalContainer = () => {
  const user_id = useSelector((state: ReducersType) => state.user.user.info.id);
  const {request} = useHttp();

  useEffect(() => {
    request("/api/users/results", "POST", {user_id}).then(res => {
      console.log("Загрузка")
    });
  }, []);

  return(
    <Appraisal comptences={[]} />
  )
}

export default AppraisalContainer;