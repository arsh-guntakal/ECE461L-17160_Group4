import React from 'react';

const UserSignInTextBoxes = () =>{
    return(
        <div>
            <input
            type="text"
            placeholder="Username"
            style={{ display: 'block', margin: '10px 0' }} // Basic styling
            />
            <input
            type="text"
            placeholder="User ID"
            style={{ display: 'block', margin: '10px 0' }}
            />
            <input
            type="text"
            placeholder="Password"
            style={{ display: 'block', margin: '10px 0' }}
        />
      </div>
    )
}


export default UserSignInTextBoxes


