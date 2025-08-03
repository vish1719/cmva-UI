import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../api';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const BlogAdmin = () => {
  const [posts, setPosts] = useState([]);
  const [pendingPosts, setPendingPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('published');

  const [publishedPage, setPublishedPage] = useState(1);
  const publishedPageSize = 5;

  const [pendingPage, setPendingPage] = useState(1);
  const pendingPageSize = 5;

  const [selectedPost, setSelectedPost] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsResponse, pendingResponse] = await Promise.all([
          api.get('/blog/admin-posts/'),
          api.get('/blog/pending-posts/'),
        ]);

        setPosts(postsResponse.data);
        setPendingPosts(pendingResponse.data);
      } catch (error) {
        console.error('Fetch error:', error);
        if (error.response?.status === 401) {
          history.push('/blog/login');
        } else {
          setError('Failed to load posts');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [history]);

  const handleLogout = () => {
    localStorage.removeItem('blogAuthToken');
    localStorage.removeItem('refresh');
    history.push('/blog/login');
  };

  const handleDelete = async (slug) => {
    if (!slug || typeof slug !== 'string' || slug.trim() === '') {
      setError('Invalid slug. Cannot delete post.');
      return;
    }

    try {
      const response = await api.delete(`/blog/${slug}/delete/`);
      if (response.status === 204) {
        setPosts(posts.filter(post => post.slug !== slug));
        alert('Post deleted');
      } else {
        setError('Failed to delete post');
      }
    } catch (error) {
      console.error('Delete error:', error);
      setError('Failed to delete post');
    }
  };

  const approvePost = async (id) => {
    try {
      await api.post(`/blog/approve-post/${id}/`);
      setPendingPosts(prev => prev.filter(post => post.id !== id));
      const response = await api.get('/blog/admin-posts/');
      setPosts(response.data);
    } catch (error) {
      console.error('Approve error:', error);
      setError('Failed to approve post');
    }
  };

  const rejectPost = async (id) => {
    try {
      await api.delete(`/blog/reject-post/${id}/`);
      setPendingPosts(prev => prev.filter(post => post.id !== id));
    } catch (error) {
      console.error('Reject error:', error);
      setError('Failed to reject post');
    }
  };

  const handleReview = async (id) => {
    try {
      const response = await api.get(`/blog/post-detail/${id}/`);
      setSelectedPost(response.data);
      setShowModal(true);
    } catch (error) {
      console.error('Review fetch error:', error);
      setError('Failed to fetch post details');
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPost(null);
  };

  const goToCreatePost = () => {
    history.push('/blog/create');
  };

  const goToEditPost = (slug) => {
    history.push(`/blog/${slug}/edit`);
  };

  const paginatedPosts = posts.slice((publishedPage - 1) * publishedPageSize, publishedPage * publishedPageSize);
  const paginatedPendingPosts = pendingPosts.slice((pendingPage - 1) * pendingPageSize, pendingPage * pendingPageSize);

  const BootstrapPagination = ({ currentPage, pageSize, totalItems, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / pageSize);
    if (totalPages <= 1) return null;

    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return (
      <nav>
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => onPageChange(currentPage - 1)} aria-label="Previous">
              &laquo;
            </button>
          </li>
          {pages.map(page => (
            <li key={page} className={`page-item ${page === currentPage ? 'active' : ''}`}>
              <button className="page-link" onClick={() => onPageChange(page)}>{page}</button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => onPageChange(currentPage + 1)} aria-label="Next">
              &raquo;
            </button>
          </li>
        </ul>
      </nav>
    );
  };

  if (loading) return <div className="text-center my-5"><Spin indicator={antIcon} /></div>;
  if (error) return <div className="alert alert-danger text-center my-4">{error}</div>;

  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Blog Admin Dashboard</h2>
        </div>

        <div className="d-flex justify-content-center mb-3 gap-2 flex-wrap">
          <button onClick={handleLogout} className="btn btn-outline-danger">
            Logout
          </button>
          <button onClick={goToCreatePost} className="btn btn-primary">
            Create New Post
          </button>
        </div>

        <div className="d-flex justify-content-center mb-4 gap-2 flex-wrap">
          <button
            onClick={() => setActiveTab('published')}
            className={`btn ${activeTab === 'published' ? 'btn-dark' : 'btn-outline-secondary'}`}
          >
            Published Posts
          </button>
          <button
            onClick={() => setActiveTab('pending')}
            className={`btn ${activeTab === 'pending' ? 'btn-dark' : 'btn-outline-secondary'}`}
          >
            Pending Posts ({pendingPosts.length})
          </button>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            {activeTab === 'published' ? (
              <>
                <h4 className="mb-3">All Blog Posts</h4>
                {posts.length === 0 ? (
                  <p>No blog posts found.</p>
                ) : (
                  <>
                    {paginatedPosts.map(post => (
                      <div key={post.id} className="card mb-3 shadow-sm">
                        <div className="card-body">
                          <h5 className="card-title">{post.title}</h5>
                          <p className="card-text"><strong>Status:</strong> {post.is_published ? 'Published' : 'Draft'}</p>
                          <div className="d-flex gap-2 flex-wrap">
                            <button onClick={() => goToEditPost(post.slug)} className="btn btn-outline-primary btn-sm">
                              Edit
                            </button>
                            <button onClick={() => handleDelete(post.slug)} className="btn btn-outline-danger btn-sm">
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                    <BootstrapPagination
                      currentPage={publishedPage}
                      pageSize={publishedPageSize}
                      totalItems={posts.length}
                      onPageChange={setPublishedPage}
                    />
                  </>
                )}
              </>
            ) : (
              <>
                <h4 className="mb-3">Pending Guest Posts</h4>
                {pendingPosts.length === 0 ? (
                  <p>No pending posts to review.</p>
                ) : (
                  <>
                    {paginatedPendingPosts.map(post => (
                      <div key={post.id} className="card mb-3 shadow-sm">
                        <div className="card-body">
                          <h5>{post.title}</h5>
                          <p>{post.content.substring(0, 200)}...</p>
                          <p><em>Submitted by: {post.submitted_by}</em></p>
                          <div className="d-flex gap-2 flex-wrap">
                            <button onClick={() => handleReview(post.id)} className="btn btn-info btn-sm">
                              Review
                            </button>
                            <button onClick={() => approvePost(post.id)} className="btn btn-success btn-sm">
                              Approve
                            </button>
                            <button onClick={() => rejectPost(post.id)} className="btn btn-danger btn-sm">
                              Reject
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                    <BootstrapPagination
                      currentPage={pendingPage}
                      pageSize={pendingPageSize}
                      totalItems={pendingPosts.length}
                      onPageChange={setPendingPage}
                    />
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {showModal && selectedPost && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} onClick={closeModal}>
          <div className="modal-dialog modal-lg" role="document" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedPost.title}</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={closeModal} />
              </div>
              <div className="modal-body">
                <p><strong>Submitted by:</strong> {selectedPost.author}</p>
                <p><strong>Submitted on:</strong> {selectedPost.submitted_on}</p>
                <hr />
                <p>{selectedPost.content}</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={closeModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogAdmin;
