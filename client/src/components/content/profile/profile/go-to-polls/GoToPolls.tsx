import React from 'react';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";


const GoToPolls = () => {
  return (
    <div>
      <div>
        У вас есть непройденные опросы
      </div>
      <div>
        <Link to={'/polls'}>
          <Button variant="warning">
            Перейти к опросам
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default GoToPolls;