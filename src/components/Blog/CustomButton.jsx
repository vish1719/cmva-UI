// components/CustomButton.jsx
import React from 'react';
import { Button } from 'react-bootstrap';
import './BlogList.css';

const CustomButton = ({ children, variant = 'primary', ...props }) => {
  return (
    <Button variant={variant} className="custom-btn" {...props}>
      {children}
    </Button>
  );
};

export default CustomButton;
