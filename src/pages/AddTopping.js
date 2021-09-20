import React, { useState } from "react";
import { Form, Button, Image } from "react-bootstrap";
import img from "../assets/topping1.svg"
import attach from "../assets/attach.svg"

function AddTopping() {
    const dataTopping = JSON.parse(localStorage.getItem("dataTopping"));

    const [data, setData] = useState({
        id: "",
        imgUrl:"",
        price: "",
        name: ""
      });

    function handleOnSubmit(e) {
        e.preventDefault();
        data.id=Object.keys(dataTopping).length+1;
        dataTopping.push(data);
        console.log(dataTopping);
        localStorage.setItem("dataTopping", JSON.stringify(dataTopping)); 
      }
    
      function handleChange(e) {
        e.preventDefault();
        setData({
          ...data,
          id:"", 
          [e.target.name]: e.target.value,
        });
      }

    return (
        <div class="container">
            <div className="row text-red">
                <div className="col-md-7">
                    <h3>Topping</h3>
                    <Form onSubmit={handleOnSubmit} className="my-5">
                        <Form.Group className="formGroup">
                            <Form.Control className="formInput" name="name" onChange={(e)=>handleChange(e)} placeholder="Topping Name"></Form.Control>
                        </Form.Group>
                        <Form.Group className="formGroup">
                            <Form.Control className="formInput"  name="price" type="number" min={0} onChange={(e)=>handleChange(e)} placeholder="Price"></Form.Control>
                        </Form.Group>
                        <Form.Group className="input_container">
                            <Form.Control name="imgUrl" className="formInput" type="text" onChange={(e)=>handleChange(e)} placeholder="Photo Product" />
                            <Image src={attach} className="input_img" />
                        </Form.Group>
                        <Form.Group className="formGroup">
                            <Button type="submit" className="button1" style={{ width: "100%" }}  block>Add Topping</Button>
                        </Form.Group>
                    </Form>
                </div>
                <div className="col-md-5">
                         <Image src={img} alt="product" style={{width:"85%", marginLeft: 80 }}/>
                </div>
            </div>
        </div>
    );
}

export default AddTopping;