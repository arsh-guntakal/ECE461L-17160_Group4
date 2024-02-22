


/**
 * A React component that renders a form with an input field for the user to 
 * enter their name.
 * @component
 */
import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';

function InputSizesExample() {
  return (
    <>
      <Form.Control size="lg" type="text" placeholder="username" />
      <br />
      <Form.Control type="text" placeholder="userid" />
      <br />
      <Form.Control size="sm" type="text" placeholder="password" />
    </>
  );
}

export default InputSizesExample;

// function Form() {
//   const [inputValue, setInputValue] = useState('Enter your name here');

//   /**
//    * Event handler for input change.
//    * Updates the input value state with the new value entered by the user.
//    * @param {object} event - The event object.
//    */
//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   }

//   return(
//     <div>
//       <center>
//       <form>
//         <label>
//           Name: 
//           <input type="text" value={inputValue} onChange={handleInputChange}/>
          
//         </label>
//         <p>Your name is: {inputValue}</p>
//       </form>
//       </center>
      
//     </div>
//   )
// }

// export default Form;

  