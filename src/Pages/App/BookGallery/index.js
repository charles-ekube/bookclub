import React, { useState, useEffect } from "react";
import './bookgallery.css';
import posts from "../../../GalleryPosts";
import 'animate.css';
import Search from '../../../Search';
import Posts from "../../../Components/Cards/ChatCards/BookCard";
import NavBar from "../../../NavBar";



const postsPerPage = 8;
let arrayForHoldingPosts = [];

const GalleryPage = () => {
  const [postsToShow, setPostsToShow] = useState([]);
  const [next, setNext] = useState(3);

  const loopWithSlice = (start, end) => {
    const slicedPosts = posts.slice(start, end);
    arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
    setPostsToShow(arrayForHoldingPosts);
  };
  useEffect(() => {
    loopWithSlice(0, postsPerPage);
  }, []);

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + postsPerPage);
    setNext(next + postsPerPage);
  };

  return (
    <>
          <NavBar />
          <Search />
          <section className="gallery-container">
            <Posts postsToRender={postsToShow} />
            <button onClick={handleShowMorePosts} className="load-more animate__animated animate__fadeInUp">Load more</button>
          </section>
    </>
  );
};

export default GalleryPage;




