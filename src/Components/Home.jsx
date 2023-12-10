import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import { useState, useEffect } from 'react';
function Home() {

  const[allReviews, setAllReviews] = useState([]);
  const[book, setBook] = useState("");
  const[print, setPrint] = useState("");
  
  const searchBooks = () => {
    console.log(book);
    Axios.post('http://18.216.35.114:8080/read',{books: book}).then((response) => {
      setAllReviews(response.data)
    }).then(console.log(allReviews));
  }


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
        <Form.Control type="search" placeholder="Enter Title" onChange= {(e) => { setBook(e.target.value);}}/>
        
      </Form.Group>
    </Form>
    <Button variant="outline-success" onClick={searchBooks}>Search</Button>
    </div>

    {allReviews.map((val)=>{
        return <>
        <div><h4>{val.author}'s review of {val.book}</h4>
        </div><h5>{val.content}</h5>
        </>
    })}
    </>
  );
}

export default Home;