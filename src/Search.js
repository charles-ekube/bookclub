import React, {useContext} from 'react';
import './App.css';
import SearchImage from './images/Search-image.png';
import { FaSearch } from 'react-icons/fa';
import { ThemeContext } from './Context/ThemeContext';


function Search () {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <>
            <main style={{background:theme.ui, color:theme.syntax}}>
                <section className="search-container">
                    <h2>Find amazing comics that are  out of this world</h2>
                    <div className="search-box" style={{background:theme.ui, color:theme.syntax}}>
                        <form>
                            {/* <label for="search"><FaSearch /></label> */}
                            <input type="text" placeholder="Search Books" id="search"/>
                            <button style={{background:theme.ui, color:theme.syntax}}>
                                <FaSearch />
                            </button>
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