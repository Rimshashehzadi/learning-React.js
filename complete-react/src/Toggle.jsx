import React, { useState } from 'react'
function Toggle() {
    const [isOn, setIsOpen] = useState(true)

    return (
        <div>
            <br />
            <button className='bg-blue-500 text-white p-2 rounded' onClick={() => setIsOpen(!isOn)}>button</button>
            {isOn ? <h1>Toggle Button</h1> : null}


        </div>
    )
}
export default Toggle;
//  header component is used to create a toggle button that can show or hide content based on the state. In this example, we have a state variable called 'isOn' initialized to 'true'. When the button is clicked, the 'setIsOpen' function is called with the opposite value of 'isOn', which toggles the state between true and false. The content (in this case, an <h1> element) is conditionally rendered based on the value of 'isOn'. If 'isOn' is true, the <h1> element will be displayed; if 'isOn' is false, it will not be rendered.