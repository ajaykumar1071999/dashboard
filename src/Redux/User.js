import react from 'react';
import {useState} from 'react';
function User(props){
    console.log(props.data.name)
    const {data}=props
    const [name,setName]=useState("");
    return(<>
<h1>Redux Components</h1>
<h1>{data.name}</h1>
{/* <h1>{props.data.age}</h1> */}
    </>)
}export default User;