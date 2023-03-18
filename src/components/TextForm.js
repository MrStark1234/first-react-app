import React, {useState} from 'react';
import Footer from './Footer';


export default function TextForm(props) {

    const handleUpClick = () => {
        setText(text.toUpperCase())
        props.showAlert('Converted to UpperCase', 'success')
    }

    const handleLoClick = () => {
        setText(text.toLowerCase())
        props.showAlert('Converted to LowerCase', 'success')
    }
    const clearText = () => {
        setText("")
        props.showAlert('Text Cleared', 'success')
    }
    
    const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Text Copied', 'success');

}
 
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert('Extra Spaces removed', 'success')
    }
    

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('');
  return (
    <>
<div className="container" style={{color: props.mode==='dark'?'white':'black'}} >
    <h4 className= "mb-4">{props.heading}</h4>
    <p>Write your text below...</p>
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'black' }} id="myBox" rows="8"></textarea>
    </div>
    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick = {handleUpClick} >Convert to Uppercase</button>
    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick = {handleLoClick} >Convert to Lowercase</button>
    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick = {clearText} >Clear Text</button>
    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick = {copyText} >Copy Text</button>
    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick = {handleExtraSpaces} >Remove Extra Spaces</button>
</div>
<div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}} >
    <h2>Your Text Summary</h2>
    <p>{text.split(/\s+/).filter( (e) => {return e.length !==0}).length} words, and {text.length} characters</p>
    <p>{0.008* text.split(" ").filter( (e) => {return e.length !==0}).length} Minutes to read the total words. </p>
    <h2>Preview</h2>
    <p>{text.length > 0 ? text : 'Enter some text in the Textbox above to preview here......'}</p>
</div>
<Footer />
</>
)
}
 