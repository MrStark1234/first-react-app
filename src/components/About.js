import React from 'react'
import photo from '../image/photo.png'
import '../App.css';
import Footer from './Footer';


export default function About(props) {

  
    let myStyle = {
        color: props.mode === "dark"? "White":"black",
        backgroundColor: props.mode === "dark"?"black":"white",
        border: "2px solid",
        borderColor: props.mode === "dark"? "White":"black", 
    }

    
    
    
  return (

    <div className="container">
        <h1 className="my-3" style={{color: props.mode === "dark"? "White":"black"}}>About Us</h1>
      <div className="accordion mx-3" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Analyze your Text
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>Here you can analyze your text with simple way.</strong> Text-Utilizer give you a way to analyze your text quickly and efficiently. Be it word count, character count or copy your text and even remove extra spaces very easily 
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Free to use
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>You no need to pay for this, it's free to use</strong> Text-Utilizer is a free character counter tool that provides instant character count & word count statistics for a giventext. Text-Utilizer reports the number of word and characters. Thus it is suitable for writing text with words and characters limit.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Browser Compatible
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>Work in any Browser easily</strong> This word counter software works in any type of browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel documents, pdf documents, essays, etc.
                </div>
             </div>
         </div>
       </div>
       <div className="logo" >
       <div style={{textAlign: "center"}} className="left">
        <img style={{width: "150px", height: "150px", borderRadius: "50%", border: "2px solid white", marginTop: "100px",}} src={photo} alt="" />
        </div>

        <div  style={{textAlign: "center", color: props.mode === "dark"? "White":"black",}} className="right">This Text-Utilizer is developed by-- <br /> <strong>Suraj Singhal</strong><br /><strong>A Aspiring Full Stack Developer</strong></div>
       </div>
       <Footer />
       
    </div>
    
  )
}
