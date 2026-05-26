import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Layout from '../Layout/Layout'
import '../Css/Viewbook.css'

function Viewbook() {

  const API = "http://localhost:3000/books";

  const [books, setBooks] = useState([]);
  const getBooks = async () => {

    const res = await axios.get(API);

    setBooks(res.data);

  };

  useEffect(() => {

    getBooks();

  }, []);


  const deleteBook = async (id) => {

    await axios.delete(`${API}/${id}`);

    alert("Book Deleted");

    getBooks();

  };

  return (

    <Layout>

      <div className='viewbook'>

        <h1>
          📚 All Books
        </h1>

        <div className='book-container'>

          {
            books.map((item) => (

              <div className='book-card' key={item.id}>

                <img src={item.image}  alt=''/>

                <h2>
                  {item.title}
                </h2>

                <p>
                  Author : {item.Author}
                </p>

                <p>
                  Genre : {item.genre}
                </p>

                <p>
                  Year : {item.year}
                </p>

                <div className='btns'>

                  <a href={`/updatebook/${item.id}`}>
                    <button className='edit'> Update
                    </button>
                  </a>

                  <button  className='delete'  onClick={() => deleteBook(item.id)} >  Delete </button>

                </div>

              </div>

            ))
          }

        </div>

      </div>

    </Layout>

  )
}

export default Viewbook