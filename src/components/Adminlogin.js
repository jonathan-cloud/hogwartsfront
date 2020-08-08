import React, { useContext } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { userContext } from './MyContext'
import Container from 'react-bootstrap/Container'


const AdminLogin = () => {

  return (
    <Container fluid>
    <Form>
      <h1>Admin Login</h1>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
            Submit
  </Button>

    </Form>
    </Container>
  )
}

export default AdminLogin