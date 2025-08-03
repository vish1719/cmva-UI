import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import api, { API_BASE_URL } from '../../api';

const BlogEditor = () => {
  const { slug } = useParams();
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [featuredImage, setFeaturedImage] = useState(null);
  const [existingImage, setExistingImage] = useState('');
  const [isPublished, setIsPublished] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('blogAuthToken');
    if (!token) {
      history.push('/blog/login');
      return;
    }

    if (slug && slug !== 'create') {
      setIsEditing(true);

      const fetchPost = async () => {
        try {
          const response = await api.get(`/blog/${slug}/`, {
            headers: { Authorization: `Token ${token}` },
          });

          setTitle(response.data.title);
          setContent(response.data.content);
          setIsPublished(response.data.is_published);
          setExistingImage(response.data.featured_image);
        } catch (error) {
          setError('Error loading post');
        }
      };

      fetchPost();
    }
  }, [slug, history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const token = localStorage.getItem('blogAuthToken');
    if (!token) {
      history.push('/blog/login');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('is_published', isPublished);

    if (featuredImage) {
      formData.append('featured_image', featuredImage);
    }

    try {
      const config = {
        headers: {
          Authorization: `Token ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      };

      if (isEditing) {
        await api.patch(`/blog/${slug}/update/`, formData, config);
      } else {
        await api.post('/blog/create/', formData, config);
      }

      history.push('/blog/admin');
    } catch (error) {
      setError('Error saving post. Please try again.');
    }
  };

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>{isEditing ? 'Edit Post' : 'Submit a Guest Post'}</h2>
        <button className="btn btn-primary" onClick={() => history.push('/blog/admin')}>
          ← Back to Dashboard
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="card shadow-sm">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter blog title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Content</label>
              <textarea
                className="form-control"
                placeholder="Write your post here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows="6"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Your Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="example@example.com"
                required
              />
            </div>

            {existingImage && !featuredImage && (
              <div className="mb-3">
                <p className="form-label">Current Featured Image:</p>
                <img
                  src={
                    existingImage.startsWith('http')
                      ? existingImage
                      : `${API_BASE_URL}${existingImage}`
                  }
                  alt="Featured"
                  className="img-fluid mb-2"
                />
              </div>
            )}

            <div className="mb-3">
              <label className="form-label">Featured Image (optional)</label>
              <input
                type="file"
                className="form-control"
                onChange={(e) => setFeaturedImage(e.target.files[0])}
                accept="image/*"
              />
            </div>

            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="publishCheck"
                checked={isPublished}
                onChange={(e) => setIsPublished(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="publishCheck">
                Publish
              </label>
            </div>

            <button type="submit" className="btn btn-primary">
              {isEditing ? 'Update Post' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogEditor;
