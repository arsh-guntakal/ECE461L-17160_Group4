const CreateNewProjectComponent = () => {
    return (
        <div>
            <h2>Create New Project</h2>
                <p>Name</p>
                <input
                type="text"
                placeholder="Name"
                style={{ display: 'block', margin: '10px 0' }} // Basic styling
                />
                <p>Date</p>
                <input
                type="text"
                placeholder="Date"
                style={{ display: 'block', margin: '10px 0' }} // Basic styling
                />
                <p>ProjectID</p>
                <input
                type="text"
                placeholder="projID"
                style={{ display: 'block', margin: '10px 0' }} // Basic styling
                />
                <button>Submit</button>
            
        </div>
    )
}

export default CreateNewProjectComponent;