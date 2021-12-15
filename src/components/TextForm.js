import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }
    const handleLowClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
    }
    const handleCapFirst = () => {
        // console.log("Uppercase was clicked");
        let newText = "";
        for(let i = 0; i < text.length; i ++) {
            let cur = "";
            if(i === 0) {
                cur = text[i].toUpperCase();
            } else {
                if(text[i - 1] === ' ') {
                    cur = text[i].toUpperCase();
                } else {
                    cur = text[i];
                }
            }
            newText = newText + cur;
        }
        setText(newText);
        props.showAlert("First Letter is Capitalized", "success");
    }
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className = "container" style = {{color: props.mode === 'light' ? '#042743' : 'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value = {text} onChange = {handleOnChange} style = {{backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? '#042743' : 'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button className = "btn btn-primary mx-1" onClick = {handleUpClick}>Convert to Uppercase</button>
            <button className = "btn btn-primary mx-2" onClick = {handleLowClick}>Convert to Lowercase</button>
            <button className = "btn btn-primary mx-2" onClick = {handleCapFirst}>Capitalize first of each word</button>
        </div>
        <div className = "container my-3" style = {{color: props.mode === 'light' ? '#042743' : 'white'}}>
            <h2>Your Text Summary !!</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter some text in above textbox"}</p>
        </div>
        </>
    )
}
