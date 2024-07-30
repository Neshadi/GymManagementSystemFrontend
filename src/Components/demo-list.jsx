import { Button } from '@material-ui/core';
import React, { useRef, useState } from 'react';
import demo6Image from '../Assests/demo1.jpg';
import demo2Image from '../Assests/demo2.jpg';
import demo3Image from '../Assests/demo3.jpg';
import demo5Image from '../Assests/demo4.jpg';
import demo4Image from '../Assests/demo7.jpg';
import demo1Image from '../Assests/demo9.jpg';
import BookDemo from './demo';

const demoListData = [
  {
    name: 'John Smith',
    description: 'John is a certified personal trainer with a specialization in strength training and conditioning.With his extensive experience and knowledge, he helps clients achieve their fitness goals through personalized workout plans and motivation.',
    imageUrl: demo1Image
  },
  {
    name: 'Emil Johnson',
    description: 'Emil is a dedicated fitness coach with expertise in yoga and flexibility training. He guides clients in improving their overall health and well-being and also his experience and motivation helps clients to achieve their fitness goals through .',
    imageUrl: demo2Image
  },
  {
    name: 'Michael Davis',
    description: 'Michael is an esteemed group fitness instructor with a wealth of experience in guiding individuals towards their fitness goals. With a reputation for his high-energy and dynamic classes, Michael creates an environment where participants are motivated. ',
    imageUrl: demo6Image
  },
  {
    name: 'Jessic Brown',
    description: 'Jessica is a certified nutrition coach who specializes in helping clients develop sustainable eating habits and achieve their weight loss goals. He provides personalized meal plans and ongoing support to optimize health and performance.',
    imageUrl: demo4Image
  },
  {
    name: 'Daniel Garcia',
    description: 'Daniel is a knowledgeable martial arts instructor with expertise in various disciplines such as kickboxing and Muay Thai. He empowers clients with self-defense skills while promoting discipline, focus, and confidence.',
    imageUrl: demo5Image
  },
  {
    name: 'Alexandra Martinez',
    description: 'Alexandra has vibrant personality and infectious energy make her a standout cycling instructor who inspires and motivates her students with every class. With a passion for cycling that shines through in her teaching, she creates an atmosphere of excitement.',
    imageUrl: demo3Image
  },
];

const DemoList = () => {
  const listRef = useRef(null);
  const [showBookDemo, setShowBookDemo] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        left: -400, // Adjust the scroll distance to match the width of 3 cards
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        left: 400, // Adjust the scroll distance to match the width of 3 cards
        behavior: 'smooth',
      });
    }
  };

  const handleClick = () => {
    setShowBookDemo(true);
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden', paddingBottom: '20px', paddingTop: '0px' }} id='demolist'><br/>
      <h1 style={{ textAlign: 'center', margin: '10px' }}>OUR DEMOS</h1>

      <div style={{ position: 'relative' }}>
        <div style={{ display: 'flex', overflow: 'hidden', scrollBehavior: 'smooth', paddingRight: '30px', paddingTop: '-10px', position: 'relative' }} ref={listRef}>
          {demoListData.map((demo, index) => (
            <div
              key={index}
              style={{
                flex: '0 0 auto',
                padding: '8px',
                margin: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                width: '435px',
                height: '435px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s, box-shadow 0.3s', // Add transition for smooth effect
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
              <img src={demo.imageUrl} alt={demo.name} style={{ width: '70%', height: '70%', objectFit: 'cover' }} />
              <h3 style={{ marginBottom: '8px', textAlign: 'center' }}>{demo.name}</h3>
              <p style={{ marginBottom: '8px', textAlign: 'center' }}>{demo.description}</p>
            </div>
          ))}
        </div>

        <div style={{ position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)', width: '60px', height: '60px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 2 }} onClick={scrollLeft}>
          <span style={{ color: 'black', fontSize: '24px', fontWeight: 'bold' }}>{'<'}</span>
        </div>
        <div style={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)', width: '60px', height: '60px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 2 }} onClick={scrollRight}>
          <span style={{ color: 'black', fontSize: '24px', fontWeight: 'bold' }}>{'>'}</span>
        </div>
      </div>

      <br />
      <div style={{ textAlign: 'center' }}>
        {showBookDemo ? <BookDemo /> : (
          <Button variant="contained" style={{ color: 'white !important', fontWeight: 'bold', backgroundColor: isHovered ? 'red' : 'blue', width: '25%' }} onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            Book Demo
          </Button>
        )}
      </div>
    </div>
  );
};

export default DemoList;
