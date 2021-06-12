import React, {useEffect} from 'react';
import Appraisal from "./Appraisal";
import useHttp from "../../../../assets/hooks/http";
import {useDispatch, useSelector} from "react-redux";
import {ReducersType} from "../../../../store/store";
import {setCompetenceAC} from "../../../../store/user-reducer";


const AppraisalContainer = () => {
  const user_id = useSelector((state: ReducersType) => state.user.user.info.id);
  const competences = useSelector((state: ReducersType) => state.user.user.competences);
  const {request} = useHttp();
  const dispatch = useDispatch();

  useEffect(() => {
    request("/api/users/results", "POST", {user_id}).then(res => {
      dispatch(setCompetenceAC(res));
    });
  }, []);

  return(
    <Appraisal comptences={competences} />
  )
}

export default AppraisalContainer;