import Button from 'react-bootstrap/Button';
import {useState,useEffect} from 'react';
// import './Register.css';
function Register(){
    const [name,Setname]=useState("");
    const [email,Setemail]=useState("");
    const [mobile,Setmobile]=useState("");
    const [dob,Setdob]=useState("");
    
    function GetData(e){
     console.log(name,email,mobile,dob)
    }
    return(
        <>
        
            
                <div className="col-sm-6 offset-sm-3">
                <h1>Registraion Form</h1>
                <input type="text" name="fname" placeholder="Name" className='form-control' onChange={(e)=>Setname(e.target.value)}/><br/><br/>
                <input type="text" name="email" placeholder="Email" className='form-control'onChange={(e)=>Setemail(e.target.value)}/><br/><br/>
                <input type="text" name="mobile" placeholder="Mobile" className='form-control'onChange={(e)=>Setmobile(e.target.value)}/><br/><br/>
                <input type="text" name="dob" placeholder="Date Of Birth" className='form-control' onChange={(e)=>Setdob(e.target.value)}/><br/><br/>
                <Button variant="outline-primary" className='form-control' onClick={GetData}>Register</Button>
                </div>
                
  </>        
    );
}export default Register;