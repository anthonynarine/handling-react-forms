import React, { useState } from 'react';


function BookCreate ({onCreate}) {
    const [title, setTitle] = useState('')

    //binds to title input
    const handleChange = (event) => {
        setTitle(event.target.value);

    };
    //when user submits the form this func will call
    // onCreate which will send the data back up to APP. 
    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTitle('');    //This will clear the input title bar after user submits form. 
    };


    return <div>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input value={title} onChange={handleChange} />
            <button>Create</button>
        </form>
    </div>;
}


export default BookCreate;