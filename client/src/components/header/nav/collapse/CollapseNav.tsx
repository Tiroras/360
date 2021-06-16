import React from 'react';
import CollapseNavbar from "./CollapseNavbar";
import CollapseButton from "./CollapseButton";


interface IProps {
  open: boolean;
  isIn: boolean;
  setCollapse: any;
}

const CollapseNav = (props: IProps) => {
  return(
    <div>
      <CollapseButton setCollapse={props.setCollapse} />
      <CollapseNavbar isIn={props.isIn} open={props.open} />
    </div>
  )
}

export default CollapseNav;