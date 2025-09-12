import axios from 'axios';
import React, { useRef, useState } from 'react';
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

  // Hardcoded backend URL
  const BACKEND_URL = 'https://gymmanagementsystembackend-1.onrender.com';

  const demos = [
    { name: 'John Smith', price:'$15/hour' },
    { name: 'Emily Johnson', price:'$12/hour' },
    { name: 'Michael Davis', price:'$18/hour' },
    { name: 'Jessica Brown', price:'$10/hour' },
    { name: 'Alexandra Martinez', price:'$15/hour' },
    { name: 'Daniel Garcia', price:'$20/hour' },
  ];

  const times = ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00'];
  const user = { fullName, email, selectedDate, selectedTime, selectedDemo };

  const handleSubmit = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setMessage('No token found. Please log in.');
      return;
    }

    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    };

    try {
      const response = await axios.post(`${BACKEND_URL}/demo/book`, user, { headers });

      if (response.status === 200) {
        setMessage('Demo booked successfully!');
        setTimeout(() => setMessage(''), 1000);
        generatePDF();
      } else {
        setMessage('Failed to book demo. Please try again.');
      }
    } catch (error) {
      console.error('Error booking demo:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };

  const handleUpdate = async (query) => {
    const token = localStorage.getItem('token');
    if (!token) return setMessage('No token found. Please log in.');

    const headers = { 'Authorization': `Bearer ${token}` };

    try {
      const response = await axios.get(`${BACKEND_URL}/demo/findBookByQuery`, {
        headers,
        params: { query }
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
    const token = localStorage.getItem('token');
    if (!token) return setMessage('No token found. Please log in.');

    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    };

    if (!editing) {
      setMessage('Please select the field you want to update & update ');
      setTimeout(() => setMessage(''), 2000);
    }

    if (editing && id) {
      try {
        const updatedDemo = { fullName, email, selectedDate, selectedTime, selectedDemo };
        const response = await axios.put(`${BACKEND_URL}/demo/updateBook/${id}`, updatedDemo, { headers });

        if (response.status === 200) {
          setSearchResults(false);
          setMessage('Demo updated successfully!');
          setTimeout(() => setMessage(''), 1000);
          generatePDF();
          setEditing(false);
        }
      } catch (error) {
        console.error('Error updating demo:', error);
      }
    }
  };

  const handleDelete1 = async (id) => {
    const token = localStorage.getItem('token');
    if (!token) return setMessage('No token found. Please log in.');

    const headers = { 'Authorization': `Bearer ${token}` };

    if (!deleting) {
      setMessage('Please select the field you want to delete');
      setTimeout(() => setMessage(''), 2000);
      return;
    }

    if (deleting && id) {
      try {
        const response = await axios.delete(`${BACKEND_URL}/demo/delete/${id}`, { headers });

        if (response.status === 200) {
          setSearchResults(false);
          setMessage('Booking cancelled successfully!');
          setDeleting(false);
          setTimeout(() => window.location.reload(), 2000);
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
    const token = localStorage.getItem('token');
    if (!token) return setMessage('No token found. Please log in.');

    const headers = { 'Authorization': `Bearer ${token}` };

    try {
      const response = await axios.get(`${BACKEND_URL}/demo/findBook`, { headers });
      const demolists = response.data;
      const demolist = demolists.find((demolist) =>
        demolist.selectedDemo === selectedDemo &&
        demolist.selectedDate === selectedDate &&
        demolist.selectedTime === selectedTime
      );
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

  // ...rest of your component code (UI, generatePDF, event handlers)
  
  return (
    // your JSX code unchanged
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px'}} id='demo'>
      {/* ... your form JSX ... */}
    </div>
  );
};

export default BookDemo;
