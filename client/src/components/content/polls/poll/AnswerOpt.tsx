import  React from 'react';
import {Field} from "redux-form";


interface IProps {
  id: number;
}

const AnswerOpts = (props: IProps) => {
  return (
    <div>
      <div>
        <label className="s18 px-2" htmlFor={`${props.id}-1`}>Совершенно согласен</label>
        <Field
          type="radio"
          component="input"
          id={`${props.id}-1`}
          value="agree"
          name={`${props.id}`}
        />
      </div>
      <div>
        <label className="s18 px-2" htmlFor={`${props.id}-2`}>Скорее согласен</label>
        <Field
          type="radio"
          component="input"
          id={`${props.id}-2`}
          value="rather-agree"
          name={`${props.id}`}
        />
      </div>
      <div>
        <label className="s18 px-2" htmlFor={`${props.id}-3`}>
          Не знаю/ Не владею информацией
        </label>
        <Field
          component="input"
          type="radio"
          id={`${props.id}-3`}
          value="not-sure"
          name={`${props.id}`}
        />
      </div>
      <div>
        <label className="s18 px-2" htmlFor={`${props.id}-4`}>
          Скорее не согласен
        </label>
        <Field
          component="input"
          type="radio"
          id={`${props.id}-4`}
          value="rather-not-agree"
          name={`${props.id}`}
        />
      </div>
      <div>
        <label className="s18 px-2" htmlFor={`${props.id}-5`}>Полностью не согласен</label>
        <Field
          component="input"
          type="radio"
          id={`${props.id}-5`}
          value="not-agree"
          name={`${props.id}`}
        />
      </div>
    </div>
  );
}

export default AnswerOpts;