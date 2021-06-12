import React, {useEffect, useState} from 'react';
import Poll from "./Poll";
import {useDispatch, useSelector} from "react-redux";
import {Redirect, withRouter} from "react-router-dom"
import useHttp from "../../../../assets/hooks/http";
import {setQuestionsAC} from "../../../../store/pools-reducer";
import {TQuestion} from "../../../../interfaces/Polls.types";
import {ReducersType} from "../../../../store/store";


const PollContainer = (props) => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [redirect, setRedirect] = useState(false);
  const questions: Array<TQuestion> = useSelector((state: ReducersType) => state.pools.questions);
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

  const handleSubmit = async (form) => {
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
        poll_id: new URLSearchParams(props.location.search).get("id"),
        inter_id: new URLSearchParams(props.location.search).get("inter_id")
      });
    setRedirect(true)
  }

  if(redirect){
    return <Redirect to={"/polls"} />
  }

  return(
    <Poll
      {...data}
      onSubmit={handleSubmit}
    />
  )
}

export default withRouter(PollContainer);