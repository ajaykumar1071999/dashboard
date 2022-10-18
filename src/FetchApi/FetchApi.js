import './FetchApi.css';
import {useState,useEffect} from 'react'
function FetchApi(){
const [user,setUser]=useState([]);

useEffect(() => {
    fetch("http://localhost:3000/user")
    .then((result)=>result.json())
    .then((resp)=>{
        console.log(resp);
            setUser(resp);

        })
},[])
    
    
    return(
<>
    <table border="1" className='table container mt-2'>
            <thead className='table table-dark'>

                <tr>
                    <th>Sr. No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile No</th>
                    <th>DOB</th>
                    <th>Delete</th>
                    
                </tr>
            </thead>
            
        
                {
                 user.map((item,i)=>
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.mobile}</td>
                        <td>{item.dob}</td>
                        <td><button className='btn btn-outline-danger form-control'>Delete</button>
                        </td>
                    </tr>
                 )   
                }
                
        
    </table>
    
</>
    );
    
}export default FetchApi;