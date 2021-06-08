import React from 'react';
import Poll from "./Poll";
import {useSelector} from "react-redux";
import {ReducersType} from "../../../../store/store";
import {TQuestion} from "../../../../interfaces/Polls.types";


const PollContainer = () => {
  const questions: Array<TQuestion> = useSelector((state: ReducersType) => state.pools.questions);

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