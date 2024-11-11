import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/Blog.css';

const markdownFiles = require.context('./markdown_files', false, /\.md$/);

function Blog() {
    const [fileNames, setFileNames] = useState([]);

    useEffect(() => {
        const files = markdownFiles.keys().map((file) => file.replace('./', ''));
        setFileNames(files);
    }, []);

    return (
        <div className="blog-container">
            <h1 className="blog-title">Blogs</h1>
            <ul className="blog-list">
                {fileNames.map((fileName, index) => (
                    <li key={index}>
                        <Link to={`/Blogs/${fileName.replace('.md', '')}`}>
                            {fileName.replace('.md', '')}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Blog;
