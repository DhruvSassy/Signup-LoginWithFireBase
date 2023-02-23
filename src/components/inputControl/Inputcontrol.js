import React from 'react';
import classes from './inputcontrol.module.css'

const Inputcontrol = (props) => {
  return (
    <div className={classes.container}>
        {props.label && <label>{props.label}</label>}
        <input type='text' {...props} />
    </div>
  );
}

export default Inputcontrol
