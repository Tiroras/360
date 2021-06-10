import React, {useState} from 'react';
import AdminAddInterviewer from "./AdminAddInterviewer";


const AdminAddInterviewerContainer = () => {
  const [input, setInput] = useState("");
  return(
    <AdminAddInterviewer
      input={input}
      setInput={setInput}
    />
  )
}

export default AdminAddInterviewerContainer;