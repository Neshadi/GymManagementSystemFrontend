import React, { useState, useRef } from 'react';
import axios from 'axios';
// import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const BookDemo = () => {
  const [selectedResultId, setSelectedResultId] = useState(null);
  const [fullName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDemo, setSelectedDemo] = useState('');
  const [message, setMessage] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked1, setIsClicked1] = useState(false);
  const [showDemoList, setShowDemoList] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [editing, setEditing] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  
    
  const demoInputRef = useRef(null);
  

  const demos = [
    { 
      name: 'John Smith',
      price:'$15/hour' 
    },
    { 
      name: 'Emily Johnson',
      price:'$12/hour'  
    },
    { 
      name: 'Michael Davis',
      price:'$18/hour'  
    },
    { 
      name: 'Jessica Brown',
      price:'$10/hour'  
    },
    { 
      name: 'Alexandra Martinez',
      price:'$15/hour'  
    },
    { 
      name: 'Daniel Garcia',
      price:'$20/hour'  
    },
  ];

  const times = [
    '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00'
  ];

  const user = { fullName, email, selectedDate, selectedTime, selectedDemo };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:8080/demo/book", user, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (response.status === 200) {
        setMessage('Demo booked successfully!');
        setTimeout(() => {
          setMessage(''); 
        }, 1000);
        generatePDF();
       
      } else {
        setMessage('Failed to book demo. Please try again.');
      }
    } catch (error) {
      console.error('Error booking demo:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };

  const handleSelectSearchResult = (result) => {
    setName(result.fullName);
    setEmail(result.email);
    setSelectedDate(result.selectedDate);
    setSelectedTime(result.selectedTime);
    setSelectedDemo(result.selectedDemo);
    setSearchResults([]);
    setSearchQuery('');
    setShowSearch(false);
    // setEditing(prevEditing => !prevEditing);
    setEditing(true);
    setSelectedResultId(result.id); 
    // console.log(editing);
    // handleUpdate1(result.id);
    setDeleting(prevDeleting => !prevDeleting);  
  };
  
  const handleUpdate = async (query) => {
    try {
      const response = await axios.get(`http://localhost:8080/demo/findBookByQuery`, {
        params: { query: query }
      });
      const results = response.data;
      setSearchResults(results);

      if (results.length > 0) {
        const result = results[0];
        setSelectedResultId(result.id); 
        handleUpdate1(selectedResultId);
      }
    } catch (error) {
      console.error('Error searching demos:', error);
      setMessage('An error occurred while searching. Please try again later.');
    }
  };

  const handleUpdate1 = async (id) => {
    if (!editing) {
      
      setMessage('Please select the field you want to update & update ');
      setTimeout(() => {
        setMessage(''); 
      }, 2000);

    }
    if (editing && id) {
      console.log(editing);
      try {
        const updatedDemo = { fullName, email, selectedDate, selectedTime, selectedDemo };
        const response = await axios.put(`http://localhost:8080/demo/updateBook/${id}`, updatedDemo, {
          headers: {
            "Content-Type": "application/json"
          }
        });
        if (response.status === 200) {
          setSearchResults(false);
          setMessage('Demo updated successfully!');
          setTimeout(() => {
            setMessage(''); 
          }, 1000);
          
          generatePDF();
         
          setEditing(false);
        }
      } catch (error) {
        console.error('Error updating demo:', error);
      }
    }
  };

  const handleDelete = async (query) => {
    try {
      const response = await axios.get(`http://localhost:8080/demo/findBookByQuery`, {
        params: { query: query }
      });
      const results = response.data;
      setSearchResults(results);

      if (results.length > 0) {
        const result = results[0];
        setSelectedResultId(result.id);
        handleDelete1(selectedResultId);
      }
    } catch (error) {
      console.error('Error searching demos:', error);
      setMessage('An error occurred while searching. Please try again later.');
    }
  };

  const handleDelete1 = async (id) => {
    if (!deleting) {
      setMessage('Please select the field you want to delete');
      setTimeout(() => {
        setMessage(''); 
      }, 2000);
    }
    if (deleting && id) {
      try {
        const response = await axios.delete(`http://localhost:8080/demo/delete/${id}`);
        if (response.status === 200) {
          setSearchResults(false);
          setMessage('Booking cancelled successfully!');
          setDeleting(false);
          setTimeout(() => {
            window.location.reload(); 
          }, 2000);
        } else {
          setMessage('Failed to delete demo. Please try again.');
        }
      } catch (error) {
        console.error('Error deleting demo:', error);
        setMessage('An error occurred while deleting. Please try again later.');
      }
    }
  };

  const handleDemo = async () => {
    try {
      const response = await axios.get('http://localhost:8080/demo/findBook');
      const demolists = response.data;
      const demolist = demolists.find((demolist) => demolist.selectedDemo === selectedDemo && demolist.selectedDate === selectedDate && demolist.selectedTime === selectedTime);
      if (demolist && selectedDemo && selectedDate && selectedTime) {
        setMessage('Sorry. Demo has been booked already');
      } else if (fullName && selectedDate && selectedTime && selectedDemo) {
        handleSubmit();
      } else {
        setMessage('Please fill out all the fields');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };

  const handleBook = (event) => {
    event.preventDefault();
    handleDemo(); 
  };

  const editBook = (event) => {
    event.preventDefault();
    setIsClicked(true);
    setShowSearch(true);
    handleUpdate(searchQuery);
  };

  const deleteBook = (event) => {
    event.preventDefault();
    setIsClicked1(true);
    setShowSearch(true);
    handleDelete(searchQuery);
  };

  const handleSelectDemo = (demo) => {
    setSelectedDemo(demo.name);
    setShowDemoList(false);
  };

  const handleBlur = (e) => {
    if (e.relatedTarget !== null && e.relatedTarget.parentNode === demoInputRef.current) {
      return;
    }
    setShowDemoList(false);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Add title with background color
    doc.setFontSize(22);
    doc.setTextColor(255, 255, 255); // White color for text
    doc.setFillColor(255, 0, 0); // Red background color
    doc.rect(0, 10, doc.internal.pageSize.width, 20, 'F'); // Rectangle for title background
    doc.text('Booking Details', doc.internal.pageSize.width / 2, 25, { align: 'center' });
    
    // Add content with increased vertical spacing and styling
    doc.setFontSize(20);
    doc.setTextColor(0, 0, 0); // Black color for text
    
    const initialY = 50;
    const lineHeight = 15; // Adjust this value for more or less spacing between lines
  
    // Using fixed width for labels to align colons
    const labelWidth = 40;
  
    doc.text('1. Name   :', 20, initialY);
    doc.text(fullName, 20 + labelWidth, initialY);
    
    doc.text('2. Email    :', 20, initialY + lineHeight);
    doc.text(email, 20 + labelWidth, initialY + lineHeight);
    
    doc.text('3. Date     :', 20, initialY + 2 * lineHeight);
    doc.text(selectedDate, 20 + labelWidth, initialY + 2 * lineHeight);
    
    doc.text('4. Time     :', 20, initialY + 3 * lineHeight);
    doc.text(selectedTime, 20 + labelWidth, initialY + 3 * lineHeight);
    
    doc.text('5. Demo   :', 20, initialY + 4 * lineHeight);
    doc.text(selectedDemo, 20 + labelWidth, initialY + 4 * lineHeight);
    
    const thankYouY = initialY + 5 * lineHeight + 10; // Additional spacing before thank you message
    const thankYouMessage = 'Thank you for booking!';
    const thankYouMessageWidth = doc.getStringUnitWidth(thankYouMessage) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    const centerX = (doc.internal.pageSize.width / 2) - (thankYouMessageWidth / 2);
    
    doc.setFont('helvetica', 'bold');
    doc.text(thankYouMessage, centerX, thankYouY, { align: 'center' });
    
    // Add a footer
    doc.setFontSize(14);
    doc.setTextColor(100, 100, 100); // Gray color for footer
    doc.text(`Generated on: ${new Date().toLocaleString()}`, 20, doc.internal.pageSize.height - 10);
    
    // Save the PDF
    doc.save(`${fullName}_Booking_Demo.pdf`);
  };
  
  
  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }} id='demo'>
      <h1>Book a Demo</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="name" style={{ textAlign: 'left', display: 'block' }}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={fullName}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email" style={{ textAlign: 'left', display: 'block' }}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="date" style={{ textAlign: 'left', display: 'block' }}>Select Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="time" style={{ textAlign: 'left', display: 'block' }}>Select Time:</label>
          <select
            id="time"
            name="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            required
            style={{ width: '105%', padding: '8px', marginTop: '4px' }}
          >
            <option value="">Select Time</option>
            {times.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>
        <div style={{ marginBottom: '10px', position: 'relative' }}>
          <label htmlFor="demo" style={{ textAlign: 'left', display: 'block' }}>Select Demo:</label>
          <input
            type="text"
            id="demo"
            name="demo"
            value={selectedDemo}
            onChange={(e) => {
              setSelectedDemo(e.target.value);
              setShowDemoList(true);
            }}
            onFocus={() => setShowDemoList(true)}
            onBlur={handleBlur}
            required
            ref={demoInputRef}
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          />
            {showDemoList && (
            <div ref={demoInputRef} style={{ position: 'absolute', top: '100%', left: 0, right: 0, border: '1px solid #ccc', borderRadius: '4px', maxHeight: '150px', overflowY: 'auto', backgroundColor: 'black', zIndex: 1 }}>
            {demos.map((demo, index) => (
              <div key={index} tabIndex="0" style={{ padding: '8px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} onMouseDown={() => handleSelectDemo(demo)}>
                <h5 style={{ margin: '0 8px 0 0' }}>{demo.name}</h5>
                <h5 style={{ margin: '0' }}>{demo.price}</h5>
              </div>
            ))}
          </div>
          
          )}
        </div>
        <div style={{ textAlign: 'center' }}>
          <button
            type="submit"
            style={{
              backgroundColor: isHovered ? 'blue' : 'red',
              color: 'white',
              width: '105%',
              padding: '10px',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '4px',
              marginTop: '10px'
              
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleBook}
          >
            Book Demo
          </button>
        </div>
      </form>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <button
          type="button"
          style={{
            backgroundColor: isClicked ? 'blue' : 'red',
            color: 'white',
            width: '105%',
            padding: '10px',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '4px',
            marginTop: '10px'
          }}
          onClick={editBook}
        >
          Edit Booking
        </button>
        {isClicked && showSearch && (
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="search" style={{ textAlign: 'left', display: 'block' }}>Search Booking:</label>
            <input
              type="text"
              id="search"
              name="search"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                handleUpdate(e.target.value);
              }}
              style={{ width: '100%', padding: '8px', marginTop: '4px' }}
            />
            {searchResults.length > 0 && (
              <div style={{ border: '1px solid #ccc', borderRadius: '4px', maxHeight: '150px', overflowY: 'auto', backgroundColor: 'white', marginTop: '4px', zIndex: 1 }}>
                {searchResults.map((result, index) => (
                  <div key={index} style={{ padding: '8px', cursor: 'pointer',color:'black'}} onMouseDown={() => handleSelectSearchResult(result)}>
                    {result.fullName} - {result.email}-{result.selectedDate} - {result.selectedTime}  - {result.selectedDemo}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        <button
          type="button"
          style={{
            backgroundColor: isClicked1 ? 'blue' : 'red',
            color: 'white',
            width: '105%',
            padding: '10px',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '4px',
            marginTop: '20px'
          }}
          onClick={deleteBook}
        >
          Cancel Booking
        </button>
        {isClicked1 && showSearch && (
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="search" style={{ textAlign: 'left', display: 'block' }}>Search Booking:</label>
            <input
              type="text"
              id="search"
              name="search"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                handleUpdate(e.target.value);
              }}
              style={{ width: '100%', padding: '8px', marginTop: '4px' }}
            />
            {searchResults.length > 0 && (
              <div style={{ border: '1px solid #ccc', borderRadius: '4px', maxHeight: '150px', overflowY: 'auto', backgroundColor: 'white', marginTop: '4px', zIndex: 1 }}>
                {searchResults.map((result, index) => (
                  <div key={index} style={{ padding: '8px', cursor: 'pointer',color:'black'}} onMouseDown={() => handleSelectSearchResult(result)}>
                    {result.fullName} - {result.email}-{result.selectedDate} - {result.selectedTime}  - {result.selectedDemo}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      {message && (
         <p style={{ textAlign: 'center', color: message.includes('successfully') ? 'green' : 'red' }}>
         {message}
       </p>
      )}
    </div>
  );
};

export default BookDemo;
