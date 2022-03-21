import React, { useState } from 'react';

const Watch = () => {
    const [steps, setSteps] = useState(0);

    const increaseSteps = () =>{
        const newStepsCount = steps + 1;
        setSteps(newStepsCount);
    }
    return (
        <div>
            <h2>This is my smart watch</h2>
            <h3>My Current Steps: {steps}</h3>
            <button onClick={increaseSteps}>Boost</button>
        </div>
    );
};

export default Watch;