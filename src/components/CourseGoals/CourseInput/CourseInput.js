
import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import  styles from './CourseInput.module.css';
//import styled from 'styled-components';

// const FormControl = styled.div`
//   margin: 0.5rem 0;

// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid #ccc;
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }
// &.invalid input {
//   border-color: red;
//   background: #ffd7d7;
// }

// &.invalid label {
//   color: red;
// }
// `;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  //set a new state to detect change in value
  const [isSetValue, setValue] = useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    //submitting the form triggers the actions in this block
    event.preventDefault();
    //this ensures that the user does not submit an empty form
    //the if
   if(enteredValue.trim().length === 0){
     //set value changes the setState to false
      setValue(false);
      return;
  }
    props.onAddGoal(enteredValue);
  };

  //USING STYLED COMPONENTS
  // return (
  //   <form onSubmit={formSubmitHandler}>
  //       <FormControl className={!isSetValue && 'invalid'}>
  //       <label>Course Goal</label>
  //       <input type="text" onChange={goalInputChangeHandler} />
  //       </FormControl>
  //     <Button type="submit">Add Goal</Button>
  //   </form>
  // );

  return (
    <form onSubmit={formSubmitHandler}>
          {/**accessing the form-control class in the css file*/}
        <div className={`${styles['form-control']} ${!isSetValue && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
        </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
