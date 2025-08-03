/* eslint-disable */
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Seo from "../Seo";
import api from '../../api'; // Axios instance

const Chat = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      mode: '',
      message: '',
    },
  });

  const addChatInfo = async (data) => {
    const widgetCode = '6ee9d37906c7b20e8fb4da063dffef463ec27de171190bbe7dd94fd96bd6dd60';
    const thriveRefId = localStorage.getItem(`${widgetCode}_thrive_ref_id`) || '';

    const payload = {
      name: data.name,
      email: data.email,
      mode: data.mode,
      message: data.message,
      thriveRefId: thriveRefId,
    };

    try {
      const response = await api.post('/api/chat/', payload);

      // ✅ Match the exact key name returned by Django backend
      if (response?.data?.success) {
        toast.success('✅ Message has been sent successfully!', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
          theme: 'colored',
        });
        reset();
        setTimeout(() => {
          window.location.replace('/');
        }, 1000);
      } else {
        toast.error('⚠️ Message failed to send. Please try again.', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 4000,
          theme: 'colored',
        });
        console.warn('Unexpected response:', response?.data);
      }
    } catch (error) {
      toast.error('⚠️ Message failed to send. Please try again.', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 4000,
        theme: 'colored',
      });
      console.error('Chat submission error:', error?.response?.data || error);
    }
  };

  return (
    <>
      <Seo path="/chat" />
      <section id="contact" className="contact new-contact">
        <div className="container">
          <div className="section-title">
            <h2>Schedule a Chat</h2>
          </div>

          <div className="row">
            <div className="col-lg-1 d-flex align-items-stretch" />
            <div className="col-lg-10">
              <form className="php-email-form" onSubmit={handleSubmit(addChatInfo)}>
                <div className="form-group">
                  <h6 className="head req">Full Name:</h6>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Full Name"
                    {...register('name', {
                      required: 'Name is required',
                      pattern: {
                        value: /^[a-zA-Z0-9\s\.,\-_()]+$/,
                        message: 'Please provide a valid name',
                      },
                    })}
                  />
                  <div className="error-message-form">{errors.name?.message}</div>
                </div>

                <div className="form-group">
                  <h6 className="head req">Email:</h6>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'Please provide a valid email address',
                      },
                    })}
                  />
                  <div className="error-message-form">{errors.email?.message}</div>
                </div>

                <div className="form-group">
                  <h6 className="head3 req">Chat Mode:</h6>
                  <select
                    className="form-select form-control"
                    {...register('mode', {
                      required: 'This field is required',
                    })}
                  >
                    <option value="">Select mode</option>
                    <option value="Skype">Skype</option>
                    <option value="Hangout">Hangout</option>
                    <option value="Whatsapp">Whatsapp</option>
                  </select>
                  <div className="error-message-form">{errors.mode?.message}</div>
                </div>

                <div className="form-group">
                  <h6 className="head3 req">Message:</h6>
                  <textarea
                    rows="5"
                    className="form-control"
                    placeholder="Enter your message"
                    {...register('message', {
                      required: 'Message is required',
                      pattern: {
                        value: /^[a-zA-Z0-9\s\.,\-_()]+$/,
                        message: 'Please provide a valid message',
                      },
                    })}
                  />
                  <div className="error-message-form">{errors.message?.message}</div>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </div>
                <hr />
              </form>
            </div>
            <div className="col-lg-1 contact-sec" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Chat;
