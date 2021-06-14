import React from 'react';
import classes from "./Metod.module.css";


const Metod = () => {
  return(
    <div className={classes.metod}>
      <div className={`${classes.metod_info} bg-success text-white s34 bold`}>
        Метод «360 градусов» — это метод текущей оценки персонала, который заключается в выявлении степени соответствия сотрудника занимаемой должности посредством опроса делового окружения сотрудника. При использовании этого метода оценку сотруднику дают «со всех сторон», то есть не только непосредственный руководитель, но и коллеги и подчиненные, а также сам сотрудник.
      </div>
    </div>
  )
}

export default Metod;