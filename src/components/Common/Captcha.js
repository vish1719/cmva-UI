import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react';

/**
 * Captcha component:
 * Renders an alphanumeric visual challenge on an HTML5 canvas with background noise/lines,
 * paired with an input field and refresh button.
 * Can be used as a controlled or uncontrolled validator via ref:
 * ref.current.validate() returns boolean
 * ref.current.refresh() resets the code
 */
const Captcha = forwardRef(({ onValidateChange, className = "" }, ref) => {
  const [captchaCode, setCaptchaCode] = useState('');
  const [userInput, setUserInput] = useState('');
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const canvasRef = useRef(null);

  const generateRandomCode = (length = 5) => {
    // Avoid ambiguous chars like 0, O, I, l, 1
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghkmnpqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const drawCaptcha = (code) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#f1f5f9');
    gradient.addColorStop(1, '#e2e8f0');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Random background noise lines
    for (let i = 0; i < 5; i++) {
      ctx.strokeStyle = `rgba(${Math.floor(Math.random() * 150)}, ${Math.floor(Math.random() * 150)}, ${Math.floor(Math.random() * 150)}, 0.4)`;
      ctx.lineWidth = 1 + Math.random();
      ctx.beginPath();
      ctx.moveTo(Math.random() * width, Math.random() * height);
      ctx.lineTo(Math.random() * width, Math.random() * height);
      ctx.stroke();
    }

    // Random noise dots
    for (let i = 0; i < 30; i++) {
      ctx.fillStyle = `rgba(${Math.floor(Math.random() * 180)}, ${Math.floor(Math.random() * 180)}, ${Math.floor(Math.random() * 180)}, 0.5)`;
      ctx.beginPath();
      ctx.arc(Math.random() * width, Math.random() * height, 1 + Math.random(), 0, Math.PI * 2);
      ctx.fill();
    }

    // Draw characters with rotation & spacing
    const charWidth = (width - 24) / code.length;
    for (let i = 0; i < code.length; i++) {
      const char = code[i];
      ctx.save();
      const x = 14 + i * charWidth + (Math.random() * 4 - 2);
      const y = height / 2 + (Math.random() * 6 - 3);
      const angle = (Math.random() - 0.5) * 0.4; // +/- ~11 deg

      ctx.translate(x, y);
      ctx.rotate(angle);

      ctx.font = `bold ${Math.floor(height * 0.58)}px "Courier New", Courier, monospace`;
      ctx.fillStyle = ['#1e293b', '#0f766e', '#1d4ed8', '#7c2d12', '#4338ca'][i % 5];
      ctx.textBaseline = 'middle';
      ctx.fillText(char, 0, 0);
      ctx.restore();
    }
  };

  const refresh = () => {
    const newCode = generateRandomCode(5);
    setCaptchaCode(newCode);
    setUserInput('');
    setHasError(false);
    setErrorMessage('');
    if (onValidateChange) onValidateChange(false);
  };

  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (captchaCode) {
      drawCaptcha(captchaCode);
    }
  }, [captchaCode]);

  const validate = () => {
    if (!userInput.trim()) {
      setHasError(true);
      setErrorMessage('Please enter the captcha code.');
      return false;
    }
    // Case-insensitive comparison for friendly UX
    if (userInput.trim().toLowerCase() !== captchaCode.toLowerCase()) {
      setHasError(true);
      setErrorMessage('Incorrect captcha code. Please try again.');
      refresh();
      return false;
    }
    setHasError(false);
    setErrorMessage('');
    return true;
  };

  useImperativeHandle(ref, () => ({
    validate,
    refresh,
    reset: refresh,
    isValid: () => userInput.trim().toLowerCase() === captchaCode.toLowerCase(),
  }));

  const handleInputChange = (e) => {
    const val = e.target.value;
    setUserInput(val);
    if (hasError) {
      setHasError(false);
      setErrorMessage('');
    }
    if (onValidateChange) {
      onValidateChange(val.trim().toLowerCase() === captchaCode.toLowerCase());
    }
  };

  return (
    <div className={`captcha-container my-3 ${className}`} style={{ maxWidth: '380px' }}>
      <label className="form-label d-block fw-semibold" style={{ fontSize: '13px', color: '#444', marginBottom: '6px' }}>
        Security Verification <span style={{ color: '#e53e3e' }}>*</span>
      </label>
      <div className="d-flex align-items-center" style={{ gap: '10px', marginBottom: '8px' }}>
        <canvas
          ref={canvasRef}
          width={150}
          height={42}
          title="Captcha Image"
          style={{
            borderRadius: '6px',
            border: '1px solid #cbd5e1',
            boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.06)',
            backgroundColor: '#f8fafc',
            flexShrink: 0,
            cursor: 'default',
            userSelect: 'none'
          }}
        />
        <button
          type="button"
          onClick={refresh}
          className="btn btn-outline-secondary btn-sm d-flex align-items-center justify-content-center"
          title="Refresh Captcha"
          style={{
            height: '42px',
            padding: '0 12px',
            borderRadius: '6px',
            border: '1px solid #cbd5e1',
            backgroundColor: '#fff',
            color: '#475569',
            fontSize: '13px',
            cursor: 'pointer'
          }}
        >
          <span style={{ fontSize: '16px', marginRight: '4px', lineHeight: 1 }}>&#x21bb;</span> Reload
        </button>
      </div>

      <input
        type="text"
        className={`form-control ${hasError ? 'is-invalid' : ''}`}
        placeholder="Enter the code shown above"
        value={userInput}
        onChange={handleInputChange}
        autoComplete="off"
        spellCheck="false"
        style={{
          borderRadius: '6px',
          fontSize: '14px',
          height: '40px',
          borderColor: hasError ? '#dc3545' : '#ced4da'
        }}
      />
      {hasError && (
        <div className="text-danger mt-1" style={{ fontSize: '12px', fontWeight: 500 }}>
          {errorMessage}
        </div>
      )}
    </div>
  );
});

export default Captcha;
