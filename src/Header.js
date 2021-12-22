import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <Container>
            <div className="btn">
                <FontAwesomeIcon icon={faBars} />
                <p>Restaurants</p>
            </div> 
            <div className="user">  
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf8qDWZHzqgAsLj2rp1y2uFUWSHa6JjUWEDw&usqp=CAU" alt=""></img>
                <p>USER</p>
            </div>
        </Container>
    )
}

export default Header

const Container = styled.div`
    height: 70px;
    box-shadow: rgb(0 0 0/50%) 0px 0px 28px -10px;
    display: flex;
    
    .btn{
        display: flex;
        align-items: center;
        font-size: 25px;
        margin-left: 25px;
    }
    .btn p{
        margin-left: 15px;
        margin-top: 10px; 
    }
    .user{
        flex: 1;
        display: flex;
        justify-content: flex-end;
    }
    .user img{
        border-radius: 5px;
        width:45px;
        height: 45px;
        margin-top: 8px;
    }
    .user p{
        font-size: 20px;
        margin-top: 14px;
        margin-left: 10px;
        margin-right: 60px;
    }
    
`