import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Layout from '../Layout/Layout'
import '../Css/Addbook.css'

function Updatebook() {

  const API = "http://localhost:3000/books";

  const navigate = useNavigate();

  const { id } = useParams();

  const [book, setBook] = useState({
    title: "",
    Author: "",
    genre: "",
    year: "",
    image: "",
  });

  const getSingleBook = async () => {

    const res = await axios.get(`${API}/${id}`);

    setBook(res.data);

  };

  useEffect(() => {

    getSingleBook();

  }, []);

  
  const HandelChange = (e) => {

    setBook({
      ...book,
      [e.target.name]: e.target.value
    });

  };

  
  const updateBook = async () => {

    await axios.put(`${API}/${id}`, book);

    alert("Book Updated");

    navigate('/viewbook');

  };

  return (

    <Layout>

      <div className='addbook'>

        <h1 className='text-center'>
          Update Book
        </h1>

        <div className='card'>

          <div>

            <label>Title</label>

            <input   type='text'  name='title'  value={book.title} onChange={HandelChange} />

          </div>

          <div>

            <label>Author</label>

            <input type='text' name='Author' value={book.Author}   onChange={HandelChange} />

          </div>

          <div>

            <label>Genre</label>

            <input
              type='text' name='genre'  value={book.genre}onChange={HandelChange}/>

          </div>

          <div>

            <label>Year</label>

            <input type='text'name='year' value={book.year} onChange={HandelChange}/>

          </div>

          <div>

            <label>Image URL</label>

            <input  type='text' name='image'value={book.image}  onChange={HandelChange}  />

          </div>

          <button className='btn btn-primary w-100' onClick={updateBook} >
            Update Book
          </button>

        </div>

      </div>

    </Layout>

  )
}

export default Updatebook