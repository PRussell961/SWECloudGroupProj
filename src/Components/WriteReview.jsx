import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function WriteReview() {
  
    return (
    <>
    <div class="d-flex justify-content-center">
        <h2>Write Your Review Here:</h2>           
    </div>
    <div class="align-self-center" style={{ padding: 60, textAlign: 'center'}}>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Book Name</Form.Label>
        <Form.Control placeholder="Book Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your Review!</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    <Button variant="outline-success">Post!</Button>
    </div>
    </>
  );
}

export default WriteReview;