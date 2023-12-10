import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import { getAuth } from "firebase/auth";

function WriteReview() {
    const[content, setContent] = useState("");
    const[book, setBook] = useState("");
    const[author, setAuthor] = useState("");   
    const auth = getAuth();
    const user = auth.currentUser; 

    const submitReview = () => {       
      try{
      console.log(user.displayName);
      Axios.put('http://18.216.35.114:8080/create',{content: content, book: book, author: user.displayName}).catch((err) => {
          alert(err)
      }
      );
      alert("Review posted!");
    }
      catch{
        alert("Please log in");
      }
      
    }
    return (
    <>
    <div class="d-flex justify-content-center">
        <h2>Write Your Review Here:</h2>           
    </div>
    <div class="align-self-center" style={{ padding: 60, textAlign: 'center'}}>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Book Name</Form.Label>
        <Form.Control placeholder="Book Name" onChange= {(e) => { setBook(e.target.value); }}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your Review!</Form.Label>
        <Form.Control as="textarea" rows={3} onChange= {(e) => { setContent(e.target.value);}}/>
      </Form.Group>
    </Form>
    <Button variant="outline-success" on onClick={submitReview}>Post!</Button>
    </div>
    </>
  );
}


export default WriteReview;