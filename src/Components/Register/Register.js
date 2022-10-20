import Button from 'react-bootstrap/Button';
import {useState,useEffect} from 'react';
// import './Register.css';
function Register(){
    const [name,Setname]=useState("");
    const [email,Setemail]=useState("");
    const [mobile,Setmobile]=useState("");
    const [dob,Setdob]=useState("");
    
    function GetData(){
        let data=({name,email,mobile,dob})
        fetch("http://localhost:3004/user", {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body:JSON.stringify(data)
          }).then((resp)=>{
            // console.warn("resp",resp);;
            resp.json().then((result)=>{
              console.warn("result",result)
            })
          })

    }
        
    return(
        <>
        
            
                <div className="col-sm-6 offset-sm-3">
                <h1>Registraion Form</h1>
                <input type="text" value={name}name="fname" placeholder="Name" className='form-control' onChange={(e)=>Setname(e.target.value)}/><br/><br/>
                <input type="text"value={email} name="email" placeholder="Email" className='form-control'onChange={(e)=>Setemail(e.target.value)}/><br/><br/>
                <input type="text" value={mobile}name="mobile" placeholder="Mobile" className='form-control'onChange={(e)=>Setmobile(e.target.value)}/><br/><br/>
                <input type="text" value={dob}name="dob" placeholder="Date Of Birth" className='form-control' onChange={(e)=>Setdob(e.target.value)}/><br/><br/>
                <Button variant="outline-primary" className='form-control' onClick={GetData}>Register</Button>
                </div>
                
  </>        
    );
}
export default Register;