import React, { useState, useEffect } from 'react';
import './Rightsection.css';
import Defultfrontpage from './Defultpage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'; 

const RightSection = ({ selectedGroup }) => {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (selectedGroup && selectedGroup.name) {
      const storedMessages = JSON.parse(localStorage.getItem(selectedGroup.name)) || [];
      setMessages(storedMessages);
    } else {
      setMessages([]);
      setInputValue('');
    }
  }, [selectedGroup]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); 
      addMessage(); 
    }
  };

  const addMessage = () => {
    if (selectedGroup && selectedGroup.name && inputValue.trim() !== '') {
      const currentTime = new Date();
      const formattedTime = currentTime.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
      const formattedDate = getFormattedDate(currentTime);



      

      function getFormattedDate(date) {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const formatted = date.toLocaleDateString(undefined, options);
        
        
        const dateParts = formatted.split(' ');
        
        
        const day = dateParts[1];
        const month = dateParts[0];
        const year = dateParts[2];
        
        
        let cur_date= `${day} ${month} ${year}`;
        const formattedDateWithoutCommas = cur_date.replace(/,/g, '');
        return formattedDateWithoutCommas;
    }
    



      const newMessage = {
        text: inputValue,
        time: formattedTime,
        date: formattedDate,
        id: Date.now() 
      };

      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);
      localStorage.setItem(selectedGroup.name, JSON.stringify(updatedMessages));
      setInputValue('');
    }
  };

  return (
    <div className="right-section">
      <div className="header">
        {selectedGroup ? 
        <div className="group-section">
        <span className='back-btn'><button></button></span>
        <span className='group-logo' style={{background:selectedGroup.color}}>{selectedGroup.name.substring(0, 2)}</span>
        <span className="group-name">{selectedGroup.name}</span>
        <div className="input-area">
        <div className="input-with-button">
          <input
            type="text"
            placeholder="Type a message..."
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <button className="enter-button" onClick={addMessage}>
          <FontAwesomeIcon icon={faPaperPlane} /> 
          </button>
        </div>
      </div>
      </div> :<Defultfrontpage/>
      }
      </div>

      <div className='main-body'>
        <div className="chat-container">
          <div className="message-list">
            <ul>
              {messages.map((message) => (
                <li key={message.id} className="chat-message">
                  <div className='date-time'>
                    <div className="message-time">{message.time}</div>
                    <div className="message-date">{message.date}</div>
                  </div>
                  <div className="message-text">{message.text}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default RightSection;
