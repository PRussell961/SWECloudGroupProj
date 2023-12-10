import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { createUserWithEmailAndPassword } from 'firebase/auth';

function SignUp() {

    
    const [name, setName] =  useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const attributes = [];
    const onSubmit = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentail) => {
          updateProfile(auth.currentUser, {
            displayName: name
          });
          window.location.reload();
        }).catch((error)=> {
          alert(error);
        })
        
        
      };
  

    return ( 
    <>
    <div class="d-flex justify-content-center">
        <h2>Sign Up</h2>           
    </div>
    <div class="align-self-center" style={{ padding: 60, textAlign: 'center'}}>
    <Form onSubmit={onSubmit}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control  placeholder="Name" 
        value={name}
        onChange={(event) => setName(event.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control  placeholder="Email" 
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control  placeholder="Password" 
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
        />
      </Form.Group>
      <div class="d-flex justify-content-center"><Button variant="success" type="submit" value="Submit">Finish</Button> </div>
    </Form>
    
    </div>
    </>
  );
}

export default SignUp;