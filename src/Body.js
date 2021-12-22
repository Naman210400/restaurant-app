import React from 'react'
import Header from './Header'
import Main from './Main'
import styled from 'styled-components'

function Body() {
    return (
        <Container>
            <Header />
            <Main />
        </Container>       
    )
}

export default Body

const Container = styled.div`
    flex: 0.8;
    height: 100vh;
`