import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api, { API_BASE_URL } from '../../api';



const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await api.get(`/blog/${slug}/`);
        setPost(response.data);
        setLoading(false);
      } catch (err) {
        setError('Post not found or error loading post.');
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading)
    return (
      <div className="d-flex justify-content-center align-items-center my-5">
        <div className="spinner-border text-success" role="status" aria-hidden="true"></div>
        <span className="ms-2">Loading...</span>
      </div>
    );

  if (error)
    return (
      <div className="alert alert-danger text-center my-5" role="alert">
        {error}
      </div>
    );

  return (
    <div className="container my-5" style={{ maxWidth: '900px' }}>
      {/* Back to Blogs button */}
      <Link
        to="/blog"
        className="btn btn-outline-success mb-4 back-to-blogs-btn"
        style={{
          transition: 'all 0.3s ease',
          borderRadius: '50px',
          padding: '0.5rem 1.5rem',
          fontWeight: '500',
          boxShadow: '0 4px 8px rgba(40, 167, 69, 0.2)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = '#28a745';
          e.currentTarget.style.color = '#fff';
          e.currentTarget.style.boxShadow = '0 6px 12px rgba(40, 167, 69, 0.4)';
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = '#28a745';
          e.currentTarget.style.boxShadow = '0 4px 8px rgba(40, 167, 69, 0.2)';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        ← Back to Blogs
      </Link>

      <article>
        <h1 className="mb-3 fw-bold">{post.title}</h1>

        <div className="text-muted mb-4" style={{ fontSize: '0.9rem' }}>
          <span>By <strong>{post.author}</strong></span>
          <span> | </span>
          <span>{new Date(post.created_at).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>

        {post.featured_image && (
          <img
            src={
              post.featured_image.startsWith('http')
                ? post.featured_image
                : `${API_BASE_URL}${post.featured_image}`
            }
            alt={post.title}
            className="img-fluid rounded mb-4 shadow-sm"
            style={{ maxHeight: '450px', objectFit: 'cover', width: '100%' }}
          />
        )}

        <div
          className="post-content"
          style={{ lineHeight: '1.8', fontSize: '1.125rem', color: '#212529', whiteSpace: 'pre-wrap' }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
};

export default BlogPost;
