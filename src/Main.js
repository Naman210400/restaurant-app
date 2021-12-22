import React from 'react'
import styled from 'styled-components'
import DetailForm from './components/DetailForm'
import UpdateForm from './components/UpdateForm'
import ViewForm from './components/ViewForm'

function Main() {
    return (
        <Container>
            <Form>
                <DetailForm />
            </Form>
            <List>
                <ViewForm />
            </List>
        </Container>
    )
}

export default Main

const Container = styled.div`
    height: calc(100vh - 70px);
`
const Form = styled.div`
    display: flex;
`
const List = styled.div``