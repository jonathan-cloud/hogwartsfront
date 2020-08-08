import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const StudentData = () => {

  const Mockdata = [
      
      {email: 'test@gmail.com',
      firstname: 'Jon',
      lastname: 'doe',
      skills: 'potion making level 1, spells level 2, quidditch level 3',
      desired: 'potion making level 1, spells level 2, quidditch level 3'},
      {email: 'test2@gmail.com',
      firstname: 'Jon1',
      lastname: 'doe1',
      skills: 'potion making level 1, spells level 2, quidditch level 3',
      desired: 'potion making level 1, spells level 2, quidditch level 3'},
      {email: 'test3@gmail.com',
      firstname: 'Jon3',
      lastname: 'doe3',
      skills: 'potion making level 1, spells level 2, quidditch level 3',
      desired: 'potion making level 1, spells level 2, quidditch level 3'},
      {email: 'test4@gmail.com',
      firstname: 'Jon4',
      lastname: 'doe4',
      skills: 'potion making level 1, spells level 2, quidditch level 3',
      desired: 'potion making level 1, spells level 2, quidditch level 3'},

    ] 

    const handleDelete = (e) =>{
      let parent = e.target.parentElement
      console.log(parent.id)
      console.log(e.target.id)
      if(window.confirm('are you sure you want to delete ' + parent.id + '?')){
      Mockdata.splice(parent.id,1)
      }
      
    }
  

  return (
    <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>email</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>skills</th>
      <th>desired</th>
    </tr>
  </thead>
  <tbody>
  
    
    {Mockdata.map((res,index)=>(
      <tr id={res.firstname} key={index}>
      <td>{res.email}</td>
      <td>{res.firstname}</td>
      <td>{res.lastname}</td>
      <td>{res.skills}</td>
      <td>{res.desired}</td>
      <td><Button>Edit</Button>
      <Button onClick={handleDelete}>Delete</Button></td>
      </tr>

    ))}
    
  </tbody>
</Table>
  )
}

export default StudentData