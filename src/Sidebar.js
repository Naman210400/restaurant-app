import React from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
    return (
        <Container>
            <Logo>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_sNCaThPiGfbxxwNjiYmUx5iyZosZRnrSIg&usqp=CAU" alt=""></img>
            </Logo>
            <Icon>
                <FontAwesomeIcon icon={faHome}/>
                <p>Dashboard</p>
            </Icon>
            <hr/>
            <Icon2>
                <FontAwesomeIcon icon={faUtensils}/>
                <p>Restaurants</p>
            </Icon2>
            <Icon2>
                <FontAwesomeIcon icon={faUser}/>
                <p>Customers</p>
            </Icon2>
            <Icon2>
                <FontAwesomeIcon icon={faPhoneAlt}/>
                <p>Support</p>
            </Icon2>
            <Icon3>
                <div className="logout">
                    <FontAwesomeIcon icon={faPowerOff}/>
                    <p>LogOut</p>
                </div>    
            </Icon3>
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
    background-color: white;
    flex: 0.2;
    min-width: 230px;
    padding-left: 10px;
    padding-right: 10px;
    box-shadow: rgb(0 0 0/50%) 0px 0px 18px 0px;

    hr{
        border: 2px solid greenyellow;
        border-radius: 10px;
        width: 80%; 
        margin-left: 16px;
    }
`
const Logo = styled.div`
    width: 100%;
    padding-left: 50px;
    padding-top: 20px; 
    align-items: center;
    justify-content: center;

    img{
        width: 60%;
        height: 60%;
    }
`
const Icon = styled.div`
    color: greenyellow;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 45px;
    margin-top: 20px;
    max-height: 30px;

    p{
        font-size: 20px;
        margin-top: 10px;
        margin-left: 10px;
    }
`

const Icon2 = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    margin-top: 20px;
    max-height: 30px;

    p{
        font-size: 20px;
        margin-top: 10px;
        margin-left: 10px;
    }
`

const Icon3 = styled.div`    
    background-color: greenyellow;
    color: white;

    .logout{
        display: flex;
        align-items: center;
        margin-top: 200px;
        max-height: 30px;
        justify-content: center;
    }

    p{  
        font-size: 20px;
        margin-top: 10px;
        margin-left: 8px;
    }
`