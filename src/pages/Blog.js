import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class Blog extends Component {
    state = { blogs: [], isLoaded: false, error: null };

    componentDidMount() {
        axios.get('https://blogs.qavisiontestlab.com/wp-json/wp/v2/posts?_embed&order=asc', {
            headers: {
                Authorization: `Bearer ${"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2Jsb2dzLnFhdmlzaW9udGVzdGxhYi5jb20iLCJpYXQiOjE3NDA1NzEzOTMsIm5iZiI6MTc0MDU3MTM5MywiZXhwIjoxNzQxMTc2MTkzLCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.2eifBS2-Qao3BuXQCT-UTFBv4RDT03uK0k5cVmWIh2I"}`,
                "Content-Type": "application/json",
            }
        })
        .then(res => this.setState({ blogs: res.data, isLoaded: true }))
        .catch(err => {
            console.error("Error fetching blogs:", err);
            this.setState({ error: "Failed to load blogs. Please try again later.", isLoaded: true });
        });
    }

    render() {
        const { blogs, isLoaded, error } = this.state;
        
        if (!isLoaded) return <p className="text-center text-lg">Loading...</p>;
        if (error) return <p className="text-center text-red-500">{error}</p>;

        return (
            <div className="py-16 px-8">
                <h2 className="text-center text-blue-600 font-bold text-2xl mb-6">Blog Posts</h2>
                
                {/* Grid Layout: 3 posts per row (Responsive) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {blogs.map((blog, i) => {
                        // ✅ Handle missing images with a fallback
                        const featuredImage = blog._embedded?.['wp:featuredmedia']?.[0]?.source_url;

                        return (
                            <div key={i} className="shadow-lg rounded-lg overflow-hidden bg-white">
                                {/* Blog Image */}
                                <img src={featuredImage} alt="blog" className="w-full h-48 object-cover" />

                                {/* Blog Content */}
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800">{blog.title.rendered}</h3>
                                    <p className="text-sm text-gray-600 line-clamp-2 mt-2" dangerouslySetInnerHTML={{ __html: blog.excerpt.rendered }}></p>
                                    <Link className="inline-block mt-3 text-blue-500 hover:text-blue-700" to={`/blogs/${blog.id}`}>Read More →</Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Blog;
