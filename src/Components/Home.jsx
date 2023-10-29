import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function Home() {
  return (
    <>
    <div class="d-flex justify-content-center">
        <h2>Search for a book to read reviews,</h2>           
    </div>
    <div class="d-flex justify-content-center">
    <h3>or log in to write your own!</h3>
    </div>
    <div class="align-self-center" style={{ padding: 60, textAlign: 'center'}}>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label style={{textAlign: 'center',}} ><p>Enter Book Title Here</p></Form.Label>
        <Form.Control type="search" placeholder="Enter Title" />
        
      </Form.Group>
    </Form>
    <Button variant="outline-success">Search</Button>
    </div>
    </>
  );
}

export default Home;