import { Button } from '@material-ui/core';
import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import BookDemo from '../demo/demo';

const API_BASE_URL = "https://gymmanagementsystembackend-1.onrender.com";

const DemoList = () => {
  const listRef = useRef(null);
  const [demos, setDemos] = useState([]);
  const [showBookDemo, setShowBookDemo] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Fetch demo list from backend
  useEffect(() => {
    const fetchDemos = async () => {
      const token = localStorage.getItem('token');
      const headers = token ? { Authorization: `Bearer ${token}` } : {};

      try {
        const response = await axios.get(`${API_BASE_URL}/demoList/findDemoList`, {
          headers,
        });
        setDemos(response.data);
      } catch (error) {
        console.error("Error fetching demo list:", error);
      }
    };

    fetchDemos();
  }, []);

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const handleClick = () => {
    setShowBookDemo(true);
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden', paddingBottom: '20px' }} id="demolist">
      <br />
      <h1 style={{ textAlign: 'center', margin: '10px' }}>OUR DEMOS</h1>

      <div style={{ position: 'relative' }}>
        <div
          style={{
            display: 'flex',
            overflow: 'hidden',
            scrollBehavior: 'smooth',
            paddingRight: '30px',
            position: 'relative',
          }}
          ref={listRef}
        >
          {demos.map((demo, index) => (
            <div
              key={index}
              style={{
                flex: '0 0 auto',
                padding: '8px',
                margin: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                width: '335px',
                height: '400px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
              className="demo-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <img
                src={`https://localhost:8080/images${demo.imageUrl}`}
                alt={demo.fullName}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <h3 style={{ marginBottom: '8px', textAlign: 'center' }}>{demo.fullName}</h3>
              <p style={{ marginBottom: '8px', textAlign: 'justify' }}>{demo.description}</p>
            </div>
          ))}
        </div>

        {/* Scroll buttons */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            transform: 'translateY(-50%)',
            width: '60px',
            height: '60px',
            background: 'white',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 2,
          }}
          onClick={scrollLeft}
        >
          <span style={{ color: 'black', fontSize: '24px', fontWeight: 'bold' }}>{'<'}</span>
        </div>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            right: 0,
            transform: 'translateY(-50%)',
            width: '60px',
            height: '60px',
            background: 'white',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 2,
          }}
          onClick={scrollRight}
        >
          <span style={{ color: 'black', fontSize: '24px', fontWeight: 'bold' }}>{'>'}</span>
        </div>
      </div>

      <br />
      <div style={{ textAlign: 'center' }}>
        {showBookDemo ? (
          <BookDemo />
        ) : (
          <Button
            variant="contained"
            style={{
              color: 'white',
              fontWeight: 'bold',
              backgroundColor: isHovered ? 'red' : 'blue',
              width: '25%',
            }}
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Book a Demo
          </Button>
        )}
      </div>
    </div>
  );
};

export default DemoList;
