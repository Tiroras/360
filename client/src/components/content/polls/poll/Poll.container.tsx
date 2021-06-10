import React, {useEffect} from 'react';
import Poll from "./Poll";
import {useDispatch} from "react-redux";
import useHttp from "../../../../assets/hooks/http";
import {setQuestionsAC} from "../../../../store/pools-reducer";


const PollContainer = () => {
  const dispatch = useDispatch();
  const {request} = useHttp();

  useEffect(() => {
    request('/api/polls/questions', "GET").then((res) => {
      dispatch(setQuestionsAC(res));
    }).catch(e => console.log(e));
  }, []);


  const handleSubmit = (values: any) => {
    console.log(values)
  }

  return(
    <Poll
      // questions={questions}
    />
  )
}

export default PollContainer;