import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function SignUp() {
  
    return (
    <>
    <div class="d-flex justify-content-center">
        <h2>Sign Up</h2>           
    </div>
    <div class="align-self-center" style={{ padding: 60, textAlign: 'center'}}>
    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control  placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control  placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control  placeholder="Password" />
      </Form.Group>
    </Form>
    <div class="d-flex justify-content-center"><Button variant="success">Finish</Button> </div>
    </div>
    </>
  );
}

export default SignUp;