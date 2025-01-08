// This component contains all the instruction and code of the projects how to make it and how to use the code and where
import React from "react";

// function from here

export default function Tutorial() {

    return (

        <div>
            <h1>Project headlines</h1>

            {/*box for code  */}
            <div className="w-full">
                <div className="mockup-code  w-[85%] mx-auto">
                    <pre data-prefix="1"><code>npm i daisyui</code></pre>
                    <pre data-prefix="2"><code>installing...</code></pre>
                    <pre data-prefix="3" className="bg-warning text-warning-content"><code>Error!</code></pre>
                </div>

            </div>
        </div>


    )
}