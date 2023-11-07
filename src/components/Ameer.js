import React,{useState}from 'react'

export default function Ameer(props) {
    const [text,setText]=useState('');
    const change=(event)=>{
       setText(event.target.value);
       
    }
    const uppercase=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to UpperCase","Successfull");
    }
    const lowecase=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
    }
    const reset=()=>{
        setText("");
    }
    const copy=()=>{
        const copy=document.getElementById("floatingTextarea2");
        copy.select();
        document.execCommand("copy");
    }
  return (
    <>
    <div >
      <div className="form-floating cols=30 mx-5 my-5" >
       <textarea className="form-control"    onChange={change}   value={text}  id="floatingTextarea2" style={{backgroundColor:props.mode==='dark'?'#042743':'white',height:'100px',width:'100%',color:props.mode==='dark'?'white':'dark'}}></textarea>
       <label for="floatingTextarea2"></label>
     </div>
    </div>
    <div   className="button " style={{color:props.mode==='dark'?'white':'dark'}}>
    <button disabled={text.length===0}  type="button" className="btn btn-primary my-3" onClick={uppercase}>UpperCase</button>
    <button disabled={text.length===0}  type="button" className="btn btn-primary mx-5" onClick={lowecase}>LowerCase</button>
    <button  disabled={text.length===0}  type="button" className="btn btn-primary my-3" onClick={reset}>Reset</button>
    <button  disabled={text.length===0}  type="button" className="btn btn-primary my-3 mx-5" onClick={copy}>copy</button>
    <h4>Your Text Summary</h4>
    <h6>words {text.split(" ").filter((element)=>{return element.length!==0}).length}</h6>
    <h6>characters {text.length}</h6>
    </div>
   
    </>
  )
}