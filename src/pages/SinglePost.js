import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const SinglePost = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [relatedPosts, setRelatedPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://blogs.qavisiontestlab.com/wp-json/wp/v2/posts/${id}?_embed`)
            .then(response => {
                setPost(response.data);
                setLoading(false);

                axios.get(`https://blogs.qavisiontestlab.com/wp-json/wp/v2/posts?_embed&per_page=3`)
                    .then(res => setRelatedPosts(res.data))
                    .catch(() => setRelatedPosts([]));
            })
            .catch(() => {
                setError("Failed to load post. Please try again.");
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p className="text-center text-lg font-semibold mt-10">Loading...</p>;
    if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Cover Image */}
            {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                <img 
                    src={post._embedded['wp:featuredmedia'][0].source_url} 
                    alt="Post Cover" 
                    className="w-full h-96 object-cover rounded-lg mb-6"
                />
            )}

            {/* Title and Date */}
            <h1 className="text-4xl font-extrabold text-center text-gray-900">{post.title.rendered}</h1>
            <p className="text-gray-500 text-center text-lg mt-2">📅 {new Date(post.date).toDateString()}</p>

            {/* Blog Content */}
            <div className="mt-6 text-lg leading-relaxed text-gray-700"
                 dangerouslySetInnerHTML={{ __html: post.content.rendered }}>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">You May Also Like</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {relatedPosts.map((blog) => (
                            <Link key={blog.id} to={`/blogs/${blog.id}`} className="block rounded-lg shadow-md overflow-hidden">
                                {blog._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                                    <div 
                                        className="w-full h-48 bg-cover bg-center"
                                        style={{ backgroundImage: `url(${blog._embedded['wp:featuredmedia'][0].source_url})` }}
                                    />
                                )}
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800">{blog.title.rendered}</h3>
                                    <p className="text-sm text-gray-500 mt-1">{new Date(blog.date).toDateString()}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SinglePost;
