import React from 'react';


const ErrorMessage = ({error}) => {
  return(
    <div>
      {error}
    </div>
  )
}

export const FormControl = ({input, meta: {touched, error}, children}) => {
  const hasError: boolean = touched && error;
  return(
    <div>
      <div>
        {children}
      </div>
      {hasError && <ErrorMessage error={error} />}
    </div>
  )
}

export const Input = (props) => {
  const {input, meta, child, ...restProps} = props;
  return(
    <FormControl {...props}>
      <input {...input} {...restProps}/>
    </FormControl>
  )
}

export const Textarea = (props) => {
  const {input, meta, child, ...restProps} = props;
  return(
    <FormControl {...props}>
      <textarea {...input} {...restProps}/>
    </FormControl>
  )
}