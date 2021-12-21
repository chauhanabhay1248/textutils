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
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className = "container" style = {{color: props.mode === 'light' ? '#042743' : 'white'}}>
            <h1 className = 'mb-4'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value = {text} onChange = {handleOnChange} style = {{backgroundColor: props.mode === 'light' ? 'white' : '#13466e', color: props.mode === 'light' ? '#042743' : 'white'}} rows="8" id = "myBox"></textarea>
            </div>
            <button disabled = {text.length === 0} className = "btn btn-primary mx-1 my-1" onClick = {handleUpClick}>Convert to Uppercase</button>
            <button disabled = {text.length === 0} className = "btn btn-primary mx-1 my-1" onClick = {handleLowClick}>Convert to Lowercase</button>
            <button disabled = {text.length === 0} className = "btn btn-primary mx-1 my-1" onClick = {handleCapFirst}>Capitalize First</button>
            <button disabled = {text.length === 0} className = "btn btn-primary mx-1 my-1" onClick = {handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled = {text.length === 0} className = "btn btn-primary mx-1 my-1" onClick = {handleCopy}>Copy Text</button>
            <button disabled = {text.length === 0} className = "btn btn-primary mx-1 my-1" onClick = {handleClearClick}>Clear Text</button>
        </div>
        <div className = "container my-3" style = {{color: props.mode === 'light' ? '#042743' : 'white'}}>
            <h2>Your Text Summary !!</h2>
            <p>{text.split(/\s+/).filter((elem) => {return elem.length !== 0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(/\s+/).filter((elem) => {return elem.length !== 0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
        </div>
        </>
    )
}
