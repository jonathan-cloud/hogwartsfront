import React, { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import { Container } from 'react-bootstrap';
import {userContext} from './MyContext'
import AdminLogin from './Adminlogin'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState([])
  const [pass, setPass] = useState([])
  const [name, setName] = useState([])
  const inputEl = useRef(null)
  const passEl1 = useRef(null)
  const passEl2 = useRef(null)
  const nameEl = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    let emailInput = inputEl.current.value
    let nameInput = nameEl.current.value
    let pass1 = passEl1.current.value
    let pass2 = passEl2.current.value
    if (pass1 === pass2) {
      setPass(prevPass => {
        return [...prevPass, pass1]
      })
      setEmail(prevEmail => {
        return [...prevEmail, emailInput]
      })
      setName(prevName => {
        return [...prevName, nameInput]
      })
    }

  }

  return (
    <userContext.Provider value={email}>
      <Container fluid>
        <Row className="justify-content-center" >
          <Form>
            <h1>Sign up</h1>
            <Form.Group>
              <Form.Label> Name</Form.Label>
              <Form.Control ref={nameEl} type="text" placeholder="Enter name" />

            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control ref={inputEl} type="email" placeholder="Enter email" />

            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control ref={passEl1} type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Re-enter Password</Form.Label>
              <Form.Control ref={passEl2} type="password" placeholder="Password" />
            </Form.Group>
            <Button onClick={handleSubmit} variant="primary" type="submit">
              Submit
  </Button>

          </Form>
        </Row>
      </Container>
      </userContext.Provider>
  )
}

export default Signup