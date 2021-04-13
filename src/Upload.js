import React from 'react';
import './App.css';


function Upload () {
    return (
        <>
            <main className="upload-section">
                <form className="upload-form">
                    <section className="upload-file">
                        <input type="file"/>
                    </section>
                    <section className="upload-details">
                        <label for="title">Name/Title</label>
                        <input type="text" id="title"/>
                        
                        <label for="genre">Genre</label>
                        <input type="text" id="genre"/>

                        <label for="description">Description</label>
                        <textarea id="description"></textarea>

                        <button>Upload</button>
                    </section>
                </form>
            </main>
        </>
    )
}

export default Upload;