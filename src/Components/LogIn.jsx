import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
function LogIn() {
  
    return (
    <>
    <div class="d-flex justify-content-center">
        <h2>Log In</h2>           
    </div>
    <div class="align-self-center" style={{ padding: 60, textAlign: 'center'}}>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control  placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control  placeholder="Password" />
      </Form.Group>
    </Form>
    <div class="d-flex justify-content-center"><Button variant="success">Log In</Button> </div>
    <div class="d-flex justify-content-center"><Link to='/SignUp'><Button variant="outline-primary" style={{ margin: 10,}}>Sign Up</Button> </Link></div>
    </div>
    </>
  );
}

export default LogIn;