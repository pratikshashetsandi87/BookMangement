import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../Layout/Layout";
import "../Css/Home.css";

function Home() {

const API = "https://bookmangement-t7qe.onrender.com/books";

  const [books, setBooks] = useState([]);

  const [search, setSearch] = useState("");

 
  const getBooks = async () => {

    const res = await axios.get(API);

    setBooks(res.data);

  };

  useEffect(() => {

    getBooks();

  }, []);

  const filteredBooks = books.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <Layout>

      <div className="home-container">

        <div className="hero-section">

          <h1> 📚 Book Management System</h1>

          <p>
            Manage your books easily and efficiently
          </p>

          <input
            type="text"
            placeholder="Search books..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-box"
          />

        </div>

    
        <div className="book-container">

          {
            filteredBooks.slice(0,3).map((book) => (

              <div className="book-card" key={book.id}>

                <img src={book.image} alt=""/>

                <div className="book-content">

                  <h3>
                    {book.title}
                  </h3>

                  <p>
                    {book.Author}
                  </p>

                  <button>
                   <a href="/viewbook"> View Details</a>  
                  </button>

                </div>

              </div>

            ))
          }

        </div>

      </div>

    </Layout>

  );
}

export default Home;