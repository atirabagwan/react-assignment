import React, { useState, useEffect } from 'react';



const Count = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
       alert("yes clicked");
    }, []);

    const IncNum = () => {
        setCount(count + 1);
        // console.log("clicked");
    }
    return (
        <>
            <h1> {count} </h1>
            <button onClick={IncNum}>Click me</button>
        </>
    );
}

export default Count;