import React from 'react';

const UseExistingProjectComp = () =>{
    return(
        <div>
            <h2>Use Existing Project</h2>
            <p>Project ID:</p>
            <input
            type="text"
            placeholder="projID"
            style={{ display: 'block', margin: '10px 0' }} // Basic styling
            />
            <button>Submit</button>
      </div>
    )
}


export default UseExistingProjectComp


