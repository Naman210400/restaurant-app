import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { db } from '../firebase'
import styled from 'styled-components'

const ViewForm = () => {

    const [ users ,setUsers ] = useState([]);
    const [ urestaurantName , setUName ] = useState("");
    const [ urestaurantManagerName , setUManagerName ] = useState("");
    const [ uemail , setUEmail ] = useState("");
    const [ ustate , setUState ] = useState("");
    const [ ucity , setUCity ] = useState("");
    const [ uaddress , setUAddress ] = useState("");
    const [ umobile , setUMobile ] = useState("");
    const [ userid, setUserid ] = useState("");

    const handleFormUpdate = (e) => {
        e.preventDefault();

        db.collection('restaurants-detail').doc(userid).update({
            Restaurant_Name : urestaurantName,
            Restaurant_Manager_Name : urestaurantManagerName,
            Email : uemail,
            State : ustate,
            City : ucity,
            Address : uaddress,
            Mobile_Number: umobile
        })
        .then(() => {
            alert("Updated Successfully 👍")
        })
        .catch(error => {
            alert(error.message);
        })

        setUName('');
        setUManagerName('');
        setUEmail('');
        setUState('');
        setUCity('');
        setUAddress('');
        setUMobile('');
        }

    useEffect(() => {
        let info = [];
        db.collection('restaurants-detail').get()
        .then((res) => {
            res.forEach(action => {
                info.push({...action.data(), id: action.id})
                console.log(action.id)
            })
            setUsers(info);
        })
    },[])

    const deleteIt = (uid) => {
        db.collection('restaurants-detail').doc(uid).delete()
        console.log("User Deleted")
    }

    const updateIt = (items) => {
        setUserid(items.id);
        setUName(items.Restaurant_Name);
        setUManagerName(items.Restaurant_Manager_Name);
        setUEmail(items.Email);
        setUState(items.State);
        setUCity(items.City);
        setUAddress(items.Address);
        setUMobile(items.Mobile_Number);
    }
    return (
        <>  
        <Head1>
            <Title><p><b>List of Restaurant</b></p></Title>
        </Head1>
        <TableView>
            <table>
                <tr>
                    <th>Restauarnt</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                    {
                        users.map((item) => (
                            <tr key={item.id}>
                                <td>{item.Restaurant_Name}</td>
                                <td>{item.Address},{item.City}</td>
                                <td>{item.Mobile_Number}</td>  
                                <td><a onClick={() => updateIt(item)}><FontAwesomeIcon icon={faCheckSquare} size="lg" color="green"/></a></td>
                                <td><a onClick={() => deleteIt(item.id)}><FontAwesomeIcon icon={faTimesCircle} size="lg" color="red"/></a></td> 
                            </tr>
                        ))
                    }
                    
            </table>
            </TableView>
            <Content>
            <Head2>
                <Title><p><b>Update Details</b></p></Title>
            </Head2>
            <Form>   
                <form className="form" onSubmit={handleFormUpdate}>                        
                        <label><b>Restauarnt Name :</b></label><br />
                        <input type="text" placeholder="Restaurant Name" size="50" value={urestaurantName} onChange={(e) => setUName(e.target.value)}/><br />

                        <label><b>Restauarnt Manager :</b></label><br />
                        <input type="text" placeholder="Restaurant Manager Name" size="50" value={urestaurantManagerName}
                        onChange={(e) => setUManagerName(e.target.value)}/><br />

                        <label><b>Email Address :</b></label><br />
                        <input type="email" placeholder="Email" size="50" value={uemail}
                        onChange={(e) => setUEmail(e.target.value)}/><br />

                        <label><b>State :</b></label><br />
                        <input type="text" placeholder="State" size="50" value={ustate}
                        onChange={(e) => setUState(e.target.value)}/><br />
                
                        <label><b>City :</b></label><br />
                        <input type="text" placeholder="City" size="50" value={ucity}
                        onChange={(e) => setUCity(e.target.value)}/><br />

                        <label><b>Address :</b></label><br />
                        <input type="text" placeholder="Address" size="50" value={uaddress}
                        onChange={(e) => setUAddress(e.target.value)}/><br />

                        <label><b>Phone Number :</b></label><br />
                        <input type="phone" placeholder="Phone Number" size="50" value={umobile}
                        onChange={(e) => setUMobile(e.target.value)}/><br /><br /> 

                        <button type="submit">Update</button>
                </form>
            </Form> 
            </Content>
        </>
    )
}
export default ViewForm ;

const Content = styled.div`
    align-items: center;
    display: block;
    justify-content: center;
    margin-left: 250px;
    padding-bottom: 50px;
`
const Head2 = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 300px;
`
const Head1 = styled.div`
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
const TableView = styled.div`
    padding-bottom: 10px;
    padding-right: 30px;
    padding-left: 10px;
    table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    }
  
    td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    }
  
    tr:nth-child(even) {
    background-color: #dddddd;
    }
`
const Form = styled.div`
    margin-left: 50px;
    margin-right: 350px;
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