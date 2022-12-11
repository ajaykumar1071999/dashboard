import Head from "../Head/Head";
import { useState } from "react";


function AddProduct() {
  const [productName, setProductName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");                                                                                                                         

  function AddProduct() {
  const data={productName,file,price,description};
  
  fetch("http://localhost:3004/addProduct", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(data)
  }).then((resp)=>{
    resp.json().then((result)=>{
      console.warn("result",result)
      
    })
    console.log(productName,file,price,description)
  })


  }
  return (
    <>
      <div>
        <Head />
        <div className="col-sm-6 offset-sm-3">
          <h1>Add Product</h1>
          <input
            type="text"
            placeholder="Product Name"
            className="form-control"
            onChange={(e) => {
              setProductName(e.target.value)
            }}
          />
          <br />
          <br />
          
          <input type="file" className="form-control" onChange={(e)=>{setFile(e.target.files[0])}}/>
          <br />
          <br />
          <input
            type="text"
            placeholder="Price"
            className="form-control"
            onChange={(e) => {
              setPrice(e.target.value)
            }}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Description"
            className="form-control"
            onChange={(e) => {
              setDescription(e.target.value)
            }}
          />
          <br />
          <br />
          <button className="btn btn-primary form-control" onClick={AddProduct}>
            Add Product
          </button>
        </div>
      </div>
    </>
  );
}
export default AddProduct;
