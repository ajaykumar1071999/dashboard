import "./FetchApi.css";
import { useState, useEffect } from "react";
function FetchApi() {
  const [user, setUser] = useState([]);
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [mobile,setMobile]=useState("");
  const [dob,setDob]=useState("");

  useEffect(() => {
    fetchData();
  }, []);
  function fetchData() {
    fetch("http://localhost:3004/user")
      .then((result) => result.json())
      .then((resp) => {
        console.log(resp);
        setUser(resp);
        
        
      });
  }
  function deleteData(id) {
    // alert(id)

    fetch(`http://localhost:3004/user/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
      })
    });
    fetchData();
  }
  function updateData(id)
  {
    let items=user[id-1];
    console.log(user[id-1])
        setName(items.name)
        setEmail(items.email)
        setMobile(items.mobile);
        setDob(items.dob)
  }

  return (
    <>
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
              <td>{item.id-1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
              <td>{item.dob}</td>
              <td>
                <button
                  className="btn btn-outline-danger form-control"
                  onClick={(id) => deleteData(item.id)}
                >
                  Delete
                </button>
              </td>
              <td><button
                  className="btn btn-outline-warning form-control" onClick={(id) => updateData(item.id)}
                >
                  Update
                </button></td>
            </tr>
          ))}
        </table>

        <div>
          <input type="text" name="name" className="form-control offset-5" value={name}/>
          <input type="text" name="email" className="form-control offset-5" value={email} />
          <input type="text" name="mobile" className="form-control offset-5" value={mobile} />
          <input type="text" name="dob" className="form-control offset-5" value={dob}/>
          <button className="btn btn-outline-success form-control offset-5">Update</button>
        </div>
      </div>
    </>
  );
}
export default FetchApi;
