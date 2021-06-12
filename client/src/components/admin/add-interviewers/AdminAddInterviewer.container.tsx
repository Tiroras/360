import React, {useState} from 'react';
import AdminAddInterviewer from "./AdminAddInterviewer";
import useHttp from "../../../assets/hooks/http";


const AdminAddInterviewerContainer = () => {
  const {request} = useHttp();
  const [input, setInput] = useState("");
  const data: any = {
    input,
    setInput
  };

  const handleSubmit = async (form) => {
    try {
      const polls = form.polls;
      delete form.polls;
      for(let key in form){
        if(form[key] === false){
          delete form[key];
        }
      }
      await request(
        '/api/polls/admin/interviewers',
        "POST",
        {polls, userId: Object.keys(form)
        });
    } catch (e) {
      console.log(e)
    }
  }
  return(
    <AdminAddInterviewer
      {...data}
      onSubmit={handleSubmit}
    />
  )
}

export default AdminAddInterviewerContainer;