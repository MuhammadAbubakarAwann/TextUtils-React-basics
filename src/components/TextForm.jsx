import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    let [vowCount, setvowCount] = useState(0);
    let vowCountChar = 0;




    const handleVoClick = () => {
        for (vowCount = 0; vowCount <= text.length; vowCount++) {
            if (text.charAt(vowCount).match(/[aeiouAEIOU]/)) {
                vowCountChar++;
                setvowCount(vowCountChar);
            }
        }
    };

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted To Uppercase.", "success");

    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted To Lower.", "success")

    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text Area cleared.", "success")

    }
    const handleOnChange = (event) => {
        setText(event.target.value)

    }


    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <button className="btn btn-danger my-2 float-end" onClick={handleClearClick}>Clear Text</button>
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UPPERCASE</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert To lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleVoClick}>vowCount Vowels</button>
            </div>
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text summary</h2>
                <p>{text.trim().split(/\s+/).filter(word => word !== '').length} Words, and {text.length} characters</p>
                <p>{0.008 * text.trim().split(/\s+/).filter(word => word !== '').length} minutes read</p>
                <p><b>{vowCount} vowels Found.</b></p>
            </div>

        </>
    )
}
