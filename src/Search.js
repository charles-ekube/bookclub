import React from 'react';
import './App.css';
import SearchImage from './images/Search-image.png';
import { FaSearch } from 'react-icons/fa';


function Search () {
    return (
        <>
            <main>
                <section className="search-container">
                    <h2>Find amazing comics that are  out of this world</h2>
                    <div className="search-box">
                        <form>
                            <label for="search"><FaSearch /></label>
                            <input type="text" placeholder="Search comics" id="search"/>
                            <button><FaSearch /></button>
                        </form>
                    </div>
                    <div className="search-img">
                        <img src={SearchImage} alt='poster'/>
                    </div>
                </section> 
            </main>
        </>
    );
}

export default Search;