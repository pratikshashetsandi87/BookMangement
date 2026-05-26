import React, { useState } from 'react'
import axios from 'axios'
import Layout from '../Layout/Layout'
import '../Css/Addbook.css'

function Addbook() {

  
 const API = "http://localhost:3000/books";

  
  const [book, setBook] = useState({
    title: "",
    Author: "",
    genre: "",
    year: "",
    image: "",
  });

 
  const HandelChange = (e) => {

    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });

  };

 const addBook = async () => {

  if (
    !book.title ||
    !book.Author ||
    !book.genre ||
    !book.year ||
    !book.image
  ) {
    alert("Fill all fields");
    return;
  }

  const res = await axios.post(API, book);

  console.log(res.data);

  alert("Book Added");

};
  return (

    <Layout>

      <div className='addbook'>

        <h1 className='text-center'>
          Add Book
        </h1>

        <div className='card'>

          
          <div>

            <label>Title</label>

            <input   type='text' placeholder='Enter Title' name='title'value={book.title} onChange={HandelChange}/>

          </div>

          
          <div>

            <label>Author</label>

            <input type='text' placeholder='Enter Author'  name='Author'  value={book.Author} onChange={HandelChange}  />

          </div>

         
          <div>

            <label>Genre</label>

            <input
              type='text'   placeholder='Enter Genre'   name='genre'    value={book.genre}    onChange={HandelChange}  />
          </div>

         
          <div>

            <label>Publication Year</label>

            <input
              type='number' placeholder='Enter Year'   name='year'    value={book.year}onChange={HandelChange}  />

          </div>

          <div>

            <label>Image URL</label>

            <input type='text' placeholder='Paste Image URL' name='image'  value={book.image} onChange={HandelChange} />

          </div>

         
          <div>

            <button className='btn btn-success w-100'  onClick={addBook}  >
              Add Book
            </button>

          </div>

        </div>

      </div>

    </Layout>

  )
}

export default Addbook