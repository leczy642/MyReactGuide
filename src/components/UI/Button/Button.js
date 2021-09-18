import React from 'react';
//import styled from 'styled-components';

//importing a CSS file if you want to use CSS Modules 

import styles from './Button.module.css'; 
//import './Button.css';

// const Button = styled.button`
// {
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;
// }
// @media(min-width: 768px){
//   width: auto;
// }

// &:focus {
//   outline: none;
// }

// &:hover,
// &:active {
//   background: #ac0e77;
//   border-color: #ac0e77;
//   box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
// }

// `;

//STYLED COMPONENTS
//using styled components no need to return the button here again
//the button component is already created and render where necessary

//using CSS modules the button class name is referenced here using the
//styles.button
const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
