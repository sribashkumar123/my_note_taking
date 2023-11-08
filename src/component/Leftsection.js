import React, { useState } from 'react';
import './leftsection.css';

const LeftSection = ({ toggleForm, handleGroupSelection }) => {
  const savedGroups = JSON.parse(localStorage.getItem('groups')) || [];
  const [isHidden, setIsHidden] = useState(false);

  const handleClose = () => {
    setIsHidden(true);
  };

  return (
    <div className={`left-section ${isHidden ? 'hidden' : ''}`}>
      <div>
        <div className="close-button" onClick={handleClose}>×</div>
        <h3>Pocket Notes</h3>
        <ul className="group-name">
          <button onClick={toggleForm} className="create-note">
            + Create Note Group
          </button>
          {savedGroups.map((group, index) => (
            <li key={index} className="li-item" onClick={() => handleGroupSelection(group)}>
              <div className="group-section">
                <span className='group-logo' style={{background:group.color}}>{group.name.substring(0, 2)}</span>
                <span className="group-name">{group.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftSection;
