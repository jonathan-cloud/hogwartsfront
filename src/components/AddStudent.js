import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Container, Row, Col } from 'react-bootstrap'
const AddStudent = () => {
  return (
    <Container fluid>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput2">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="John" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Smith" />
        </Form.Group>
  <h4>Current Skills </h4>
  <Row className="justify-content-center">

          <Col>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Current skills</Form.Label>
              <Form.Control as="select">
                <option>Potion making</option>
                <option>Spells</option>
                <option>Quidditch</option>
                <option>Animagus</option>
                <option>Apparate</option>
                <option>Metamorphmagi</option>
                <option>Parseltongue</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label> Skill Level</Form.Label>
              <Form.Control as="select" multiple>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Button>Add</Button>
        <br/>
       <h4> Desired Skills </h4>
  <Row className="justify-content-center">
    
          <Col>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Magick</Form.Label>
              <Form.Control as="select">
                <option>Potion making</option>
                <option>Spells</option>
                <option>Quidditch</option>
                <option>Animagus</option>
                <option>Apparate</option>
                <option>Metamorphmagi</option>
                <option>Parseltongue</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label> Skill Level</Form.Label>
              <Form.Control as="select" multiple>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Button>Add</Button>
      </Form>
    </Container>
  )
}

export default AddStudent