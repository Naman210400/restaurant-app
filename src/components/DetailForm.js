import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import styled from 'styled-components'

const DetailForm = () => {           

    const [ restaurantName , setName ] = useState("");
    const [ restaurantManagerName , setManagerName ] = useState("");
    const [ email , setEmail ] = useState("");
    const [ state , setState ] = useState("");
    const [ city , setCity ] = useState("");
    const [ address , setAddress ] = useState("");
    const [ mobile , setMobile ] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        db.collection('restaurants-detail').add({
            Restaurant_Name : restaurantName,
            Restaurant_Manager_Name : restaurantManagerName,
            Email : email,
            State : state,
            City : city,
            Address : address,
            Mobile_Number: mobile
        })
        .then(() => {
            alert("Registered Successfully 👍")
        })
        .catch(error => {
            alert(error.message);
        })

        setName('');
        setManagerName('');
        setEmail('');
        setState('');
        setCity('');
        setAddress('');
        setMobile('');
        }
    return ( 
        <>
        <Container>
            <Head>
                <Title><p><b>Add New Restaurant</b></p></Title>
            </Head>
            <Form>       
            <form className="form" onSubmit={handleFormSubmit}>
                <label><b>Restauarnt Name :</b></label><br />
                <input type="text" placeholder="Restaurant Name" autoFocus required size="50" value={restaurantName}
                 onChange={(e) => setName(e.target.value)}/><br />

                <label><b>Restauarnt Manager :</b></label><br />
                <input type="text" placeholder="Restaurant Manager Name" required size="50" value={restaurantManagerName}
                 onChange={(e) => setManagerName(e.target.value)}/><br />

                <label><b>Email Address :</b></label><br />
                <input type="email" placeholder="Email" required size="50" value={email}
                 onChange={(e) => setEmail(e.target.value)}/><br />

                <label><b>State :</b></label><br />
                <input type="text" placeholder="State" required size="50" value={state}
                 onChange={(e) => setState(e.target.value)}/><br />
                
                <label><b>City :</b></label><br />
                <input type="text" placeholder="City" required size="50" value={city}
                 onChange={(e) => setCity(e.target.value)}/><br />

                <label><b>Address :</b></label><br />
                <input type="text" placeholder="Address" required size="50" value={address}
                 onChange={(e) => setAddress(e.target.value)}/><br />

                <label><b>Phone Number :</b></label><br />
                <input type="phone" placeholder="Phone Number" required size="50" value={mobile}
                 onChange={(e) => setMobile(e.target.value)}/><br /><br />

                <button type="submit">Submit</button> 
            </form>
            </Form>
        </Container>
        </>
    );
}

export default DetailForm;

const Container = styled.div`
    align-items: center;
    display: block;
    justify-content: center;
    margin-left: 250px;
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
        font-size: 25px;
    }
`
const Form = styled.div`
    margin-left: 50px;
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
        background-color: blue;
        color: white;
        padding-left: 20px;
        padding-right: 20px;
    }
`