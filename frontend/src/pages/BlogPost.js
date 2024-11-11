import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './css/Blog.css';

function BlogPost() {
    const { fileName } = useParams();  // Get the file name from the URL
    const [content, setContent] = useState('');

    useEffect(() => {
        import(`./markdown_files/${fileName}.md`)
            .then((module) => fetch(module.default))
            .then((response) => response.text())
            .then((text) => setContent(text))
            .catch((err) => console.error("Error loading markdown file:", err));
    }, [fileName]);

    return (
        <div className="blog-container">
            <Link to="/Blogs" className="back-link">← Back to Blogs</Link>
            <h2>{fileName.replace('-', ' ')}</h2>
            <div className="blog-content">
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>
        </div>
    );
}

export default BlogPost;

