/* eslint-disable */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../api';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const BlogLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Send POST request to the backend login endpoint
      const response = await api.post('/api/blog/login/', {
        email,
        password,
      });

      console.log('Login response:', response.data);

      const { access, refresh } = response.data;

      if (!access) throw new Error('No access token received');

      // ✅ Store tokens in localStorage manually
      localStorage.setItem('blogAuthToken', access);
      localStorage.setItem('blogRefreshToken', refresh);

      // ✅ Redirect to blog admin
      history.push('/blog/admin');
    } catch (err) {
      console.error('Login error:', err.response?.data || err.message);

      const errorMessage =
        err.response?.data?.error ||
        err.response?.data?.detail ||
        'Login failed. Please try again.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="blog-login" className="contact new-contact">
      <div className="container">
        <div className="section-title">
          <h2>Login to <span style={{ color: "#58b958" }}>Blog Admin</span></h2>
        </div>
        <div className="row">
          <div className="col-lg-3 contact-sec" />
          <div className="col-lg-6">
            {loading ? (
              <Spin indicator={antIcon} />
            ) : (
              <form onSubmit={handleSubmit} role="form" className="php-email-form">
                {error && <div className="error-message text-danger">{error}</div>}

                <div className="form-group">
                  <h6 className="head3">Email:</h6>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email Address"
                    required
                  />
                </div>

                <div className="form-group">
                  <h6 className="head3">Password:</h6>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                    required
                  />
                </div>

                <div className="text-center">
                  <button className="btn btn-primary" type="submit" disabled={loading}>
                    Login
                  </button>
                </div>
              </form>
            )}
          </div>
          <div className="col-lg-3 contact-sec" />
        </div>
      </div>
    </section>
  );
};

export default BlogLogin;
