import React, {useEffect, useState} from 'react';
import Poll from "./Poll";
import {useDispatch, useSelector} from "react-redux";
import useHttp from "../../../../assets/hooks/http";
import {setQuestionsAC} from "../../../../store/pools-reducer";
import {TQuestion} from "../../../../interfaces/Polls.types";
import {ReducersType} from "../../../../store/store";


const PollContainer = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const questions: Array<TQuestion> = useSelector((state: ReducersType) => state.pools.questions);
  const pollInfo = useSelector((state: ReducersType) => state.pools.currentPoll);
  const dispatch = useDispatch();
  const {request} = useHttp();

  useEffect(() => {
    request('/api/polls/questions', "GET").then((res) => {
      dispatch(setQuestionsAC(res));
    }).catch(e => console.log(e));
  }, []);


  const data: any = {
    questions,
    errorMessage
  }

  const handleSubmit = (form) => {
    console.log(pollInfo);
    console.log(pollInfo.inter_id)
    if(Object.keys(form).length !== questions.length){
      setErrorMessage("Ответье на все вопросы!");
      return false;
    }
    setErrorMessage("");
    form.length = questions.length + 1;
    request(
      "/api/polls/answers",
      "POST",
      {
        answers: Array.from(form),
        poll_id: pollInfo.poll_id,
        inter_id: pollInfo.inter_id
      });
  }

  return(
    <Poll
      {...data}
      onSubmit={handleSubmit}
    />
  )
}

export default PollContainer;