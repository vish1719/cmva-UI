import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api, { API_BASE_URL } from '../../api';
import './BlogList.css';
import Seo from "../Seo";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/blog/');
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const btnStyle = {
    transition: 'all 0.3s ease',
    borderRadius: '50px',
    padding: '0.5rem 1.5rem',
    fontWeight: '500',
    boxShadow: '0 4px 8px rgba(40, 167, 69, 0.2)',
    backgroundColor: 'transparent',
    color: '#28a745',
    border: '1px solid #28a745',
    cursor: 'pointer',
    outline: 'none',
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.backgroundColor = '#28a745';
    e.currentTarget.style.color = '#fff';
    e.currentTarget.style.boxShadow = '0 6px 12px rgba(40, 167, 69, 0.4)';
    e.currentTarget.style.transform = 'scale(1.05)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.backgroundColor = 'transparent';
    e.currentTarget.style.color = '#28a745';
    e.currentTarget.style.boxShadow = '0 4px 8px rgba(40, 167, 69, 0.2)';
    e.currentTarget.style.transform = 'scale(1)';
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <Seo
        title="Top Virtual Assistant Insights & Business Growth Tips | ConnectMyVA Blog"
        description="Explore expert tips, success stories, and smart strategies for growing your business with virtual assistants. Stay ahead with the latest from ConnectMyVA."
        path="/blog"
        keywords="virtual assistant services, virtual assistant for entrepreneurs, ConnectMyVA blog, VA productivity tips, benefits of virtual assistants, small business automation"
      />

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
        <h1 className="mb-3 mb-md-0 fw-bold">Our Blogs</h1>
        <div className="d-flex">
          <Link
            to="/blog/guest-post"
            className="btn btn-outline-success me-3"
            style={btnStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Submit a Guest Post
          </Link>

          <Link
            to="/blog/login"
            className="btn btn-outline-success"
            style={btnStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Login
          </Link>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <div className="input-group shadow-sm rounded-pill border border-success">
          <input
            type="text"
            className="form-control border-0 rounded-pill ps-4"
            placeholder="Search blog posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ outline: 'none' }}
          />
          <button
            className="btn btn-success rounded-pill"
            type="button"
            style={{ padding: '0 1.5rem' }}
          >
            🔍
          </button>
        </div>
      </div>

      {/* Blog List */}
      {filteredPosts.length === 0 ? (
        <p className="text-muted">No blog posts found.</p>
      ) : (
        <div className="row">
          {filteredPosts.slice(0, visibleCount).map((post) => (
            <div className="col-md-6 col-lg-4 mb-4" key={post.id}>
              <div className="card h-100 shadow-sm blog-card">
                {post.featured_image && (
                  <img
                    src={
                      post.featured_image.startsWith('http')
                        ? post.featured_image
                        : `${API_BASE_URL}${post.featured_image}`
                    }
                    alt={post.title}
                    className="card-img-top"
                    style={{ objectFit: 'cover', height: '200px' }}
                  />
                )}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">
                    <Link to={`/blog/${post.slug}`} className="text-decoration-none text-dark blog-title">
                      {post.title}
                    </Link>
                  </h5>
                  <p className="text-muted small mb-1">
                    Posted by {post.author} on {new Date(post.created_at).toLocaleDateString()}
                  </p>
                  <p className="card-text mt-2">
                    {post.content.replace(/<[^>]+>/g, '').substring(0, 150)}...
                  </p>
                  <div className="mt-auto">
                    <Link to={`/blog/${post.slug}`} className="btn btn-outline-primary btn-sm">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Load More */}
      {visibleCount < filteredPosts.length && (
        <div className="text-center mt-4">
          <button
            style={btnStyle}
            onClick={handleLoadMore}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogList;
