import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'; // ✅ Import Modal components
import api from '../../api';
import { Link } from 'react-router-dom';

const GuestPostForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    submitted_by: '',
  });
  const [featuredImage, setFeaturedImage] = useState(null);
  const [modalMessage, setModalMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFeaturedImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('title', formData.title);
    data.append('content', formData.content);
    data.append('submitted_by', formData.submitted_by);
    if (featuredImage) {
      data.append('featured_image', featuredImage);
    }

    try {
      await api.post('/api/blog/guest-submit/', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setModalMessage('Post submitted for review!');
      setShowModal(true);
      setFormData({ title: '', content: '', submitted_by: '' });
      setFeaturedImage(null);
    } catch (error) {
      console.error('Submission Error:', error);
      setModalMessage('Submission failed!');
      setShowModal(true);
    }
  };

  return (
    <div className="container py-5">
      {/* ✅ Modal from react-bootstrap */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Guest Post Submission</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {modalMessage}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Form Code */}
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold">Submit a Guest Post</h2>
            <Link to="/blog" className="btn btn-primary">&larr; Back to Blog</Link>
          </div>

          <div className="card shadow">
            <div className="card-body">
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                {/* Form fields */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    placeholder="Enter blog title"
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Content</label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Write your post here..."
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Your Email</label>
                  <input
                    type="email"
                    name="submitted_by"
                    value={formData.submitted_by}
                    onChange={handleChange}
                    required
                    placeholder="example@example.com"
                    className="form-control"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">Featured Image (optional)</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="form-control"
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GuestPostForm;
