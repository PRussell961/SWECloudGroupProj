import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { createContext, useState} from 'react';
import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import { signInWithEmailAndPassword, updateCurrentUser } from 'firebase/auth';
import { auth } from "./firebase";
function LogIn() {
  const [name, setName] =  useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (e) => {
      e.preventDefault();

      signInWithEmailAndPassword(auth, email, password)
      .then((userCredentail) => {
        console.log(userCredentail);
        window.location.reload();
      }).catch((error)=> {
        alert(error);
        window.location.reload();
      })
      
      
    };
    
    return (
    <>
    <div class="d-flex justify-content-center">
        <h2>Log In</h2>           
    </div>

    <div class="align-self-center" style={{ padding: 60, textAlign: 'center'}}>
    <Form onSubmit={onSubmit}>
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
      <div class="d-flex justify-content-center"><Button variant="success" type="submit" value="Submit">Log In</Button> </div>
    </Form>
    
    <div class="d-flex justify-content-center"><Link to='/SignUp'><Button variant="outline-primary" style={{ margin: 10,}}>Sign Up</Button> </Link></div>
    </div>
    </>
  );
}

export default LogIn;