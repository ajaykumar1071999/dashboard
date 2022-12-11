import "./FetchApi.css";
import { useState, useEffect } from "react";
import Head from "../Components/Head/Head";
function FetchApi() {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  const [userId,setUserId]=useState(null);


  useEffect(() => {
    fetchData();
  }, []);

  // Fetch Data

  function fetchData(id) {
    fetch("http://localhost:3004/user")
      .then((result) => result.json())
      .then((resp) => {
        // console.log(resp);        
        setUser(resp);
        setUserId(resp[0].id)
        setName(resp[0].name);
        setEmail(resp[0].email);
        setMobile(resp[0].mobile);
        setDob(resp[0].dob);
        
        
      });
  }


// Delete Data



  function deleteData(id) {


    fetch(`http://localhost:3004/user/${id}`, {
      method: "DELETE"
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        fetchData();
      });
    });
    
  }



//Edit Data

function selectUser(id) {
  let items = user[id-1]
  setName(items.name);
  setEmail(items.email);
  setMobile(items.mobile); 
  setDob(items.dob);
  setUserId(items.id);
  console.log({id,name,email,mobile,dob})
  
}


//Update User


  function updateUser()
  {
  let item ={userId,name, email, mobile,dob}
  fetch(`http://localhost:3004/user/${userId}`, {
  method: 'PUT',
  headers:{
  'Accept':'application/json',
  'Content-Type': 'application/json'
  },
  body:JSON.stringify(item)
  }).then((result) => {
  result.json().then((resp) => {
  console.warn(resp)
  fetchData()
  })
  })


  }
  return (
    <>
      <Head />
      <div>
        <table style={{ width: "100%" }}>
          <tr>
            <th>Sr. No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>DOB</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>

          {user.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
              <td>{item.dob}</td>
              <td>
                <button
                  className="btn btn-outline-danger form-control"
                  onClick={() => deleteData(item.id)}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  className="btn btn-outline-danger form-control"
                  onClick={() => selectUser(item.id)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </table>

        <div className="col-sm-6 offset-sm-3 ">
          <input
            type="text"
            name="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            name="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            name="mobile"
            className="form-control"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <input
            type="text"
            name="dob"
            className="form-control "
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <button
            className="btn btn-outline-success form-control"
            onClick={updateUser}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
}
export default FetchApi;
