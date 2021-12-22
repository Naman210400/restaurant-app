import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import styled from 'styled-components'

const UpdateForm = (usersId) => {           
    console.log("props:",usersId)

    const [ urestaurantName , setUName ] = useState("");
    const [ urestaurantManagerName , setUManagerName ] = useState("");
    const [ uemail , setUEmail ] = useState("");
    const [ ustate , setUState ] = useState("");
    const [ ucity , setUCity ] = useState("");
    const [ uaddress , setUAddress ] = useState("");
    const [ umobile , setUMobile ] = useState("");

    // const handleFormUpdate = (e) => {
    //     e.preventDefault();

    //     db.collection('restaurants-detail').doc(userId.id).update({
    //         Restaurant_Name : urestaurantName,
    //         Restaurant_Manager_Name : urestaurantManagerName,
    //         Email : uemail,
    //         State : ustate,
    //         City : ucity,
    //         Address : uaddress,
    //         Mobile_Number: umobile
    //     })
    //     .then(() => {
    //         alert("Updated Successfully 👍")
    //     })
    //     .catch(error => {
    //         alert(error.message);
    //     })

    //     setUName('');
    //     setUManagerName('');
    //     setUEmail('');
    //     setUState('');
    //     setUCity('');
    //     setUAddress('');
    //     setUMobile('');
    //     }
    return ( 
        <> 
        <Container> 
            <Head>
                <Title><p><b>Update Details</b></p></Title>
            </Head>
            <Form>   
                <form className="form">                        
                        <label><b>Restauarnt Name :</b></label><br />
                        <input type="text" placeholder="Restaurant Name" name="restaurantName" size="50" value={urestaurantName} onChange={(e) => setUName(e.target.value)}/><br />

                        {/* <label><b>Restauarnt Manager :</b></label><br />
                        <input type="text" placeholder="Restaurant Manager Name" size="50" value={props.restaurantManagerName}
                        onChange={(e) => setManagerName(e.target.value)}/><br />

                        <label><b>Email Address :</b></label><br />
                        <input type="email" placeholder="Email" size="50" value={props.email}
                        onChange={(e) => setEmail(e.target.value)}/><br />

                        <label><b>State :</b></label><br />
                        <input type="text" placeholder="State" size="50" value={props.state}
                        onChange={(e) => setState(e.target.value)}/><br />
                
                        <label><b>City :</b></label><br />
                        <input type="text" placeholder="City" size="50" value={props.city}
                        onChange={(e) => setCity(e.target.value)}/><br />

                        <label><b>Address :</b></label><br />
                        <input type="text" placeholder="Address" size="50" value={props.address}
                        onChange={(e) => setAddress(e.target.value)}/><br />

                        <label><b>Phone Number :</b></label><br />
                        <input type="phone" placeholder="Phone Number" size="50" value={props.mobile}
                        onChange={(e) => setMobile(e.target.value)}/><br /><br />  */}

                        <button type="submit">Update</button>
                </form>
            </Form> 
        </Container>             
        </>
    );
}

export default UpdateForm;

const Container = styled.div`
    display: block;
    align-items: center;
    judtify-content: center;
    margin-left: 300px;
    margin-right: 280px;
`
const Head = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Title = styled.div`
    p{
        margin-top: 25px;
        font-size: 20px;
    }
`
const Form = styled.div`
    margin-right: 50px;
    display: block;
    padding: 20px;
    box-shadow: rgba(0 0 0/50%) 0px 0px 12px 0px;
    border-radius: 15px;
    background-color: #F0F0F0;

    input{
        border: 1px solid #C8C8C8;
        border-radius: 10px;
    }

    select{
        border: 1px solid #C8C8C8;
        border-radius: 10px;
    }

    button{
        border: 1px solid #C8C8C8;
        border-radius: 10px;
        background-color: green;
        color: white;
        padding-left: 20px;
        padding-right: 20px;
    }
`