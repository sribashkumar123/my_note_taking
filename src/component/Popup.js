import React, { useState } from 'react';
import './pop_up.css';

const PopupForm = ({ toggleForm }) => {
  const [groupName, setGroupName] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const handleGroupNameChange = (e) => {
   
      setGroupName(e.target.value);
    console.log(e.target.value);
    
  };
  const handleColorChange = (e) => {
   
    setSelectedColor(e.target.value);
    console.log(e.target.value);
    
  };


  const handleCreateGroup = () => {
    if (groupName === '') {
      window.alert("Please Enter Group Name");
      return;
    }

    if (selectedColor === '') {
      window.alert("Please Select a Group Color");
      return; 
    }

    const newGroup = {
      name: groupName,
      color: selectedColor,
    };


 



    const existingGroups = JSON.parse(localStorage.getItem('groups')) || [];
    const updatedGroups = [...existingGroups, newGroup];

    localStorage.setItem('groups', JSON.stringify(updatedGroups));

    toggleForm();
  };

  return (
    <div className='pop-up'>
      <div className="close-button" onClick={toggleForm}>×</div> 
      <p className='create_grp'>Create New Group</p>
      <section className='groupname'>

        <span><label>Group Name</label></span>
        <input type="text" placeholder="Group Name" value={groupName} onChange={handleGroupNameChange} className='group-input' />

      </section>


      <section className='color-pick'>

        <div className="select-color" onChange={handleColorChange}>

          <span><label>Group Name</label></span>
          <div class="radio-group">
            <label class="radio-item">
              <input type="radio" name="color" value="#B38BFA" />
              <span class="radio-custom col-1"></span>

            </label>
            <label class="radio-item">
              <input type="radio" name="color" value="#FF79F2" />
              <span class="radio-custom col-2"></span>

            </label>
            <label class="radio-item">
              <input type="radio" name="color" value="#43E6FC" />
              <span class="radio-custom col-3"></span>

            </label>
            <label class="radio-item">
              <input type="radio" name="color" value="#F19576" />
              <span class="radio-custom col-4"></span>

            </label>
            <label class="radio-item">
              <input type="radio" name="color" value="#0047FF" />
              <span class="radio-custom col-5"></span>

            </label>
            <label class="radio-item">
              <input type="radio" name="color" value="#6691FF" />
              <span class="radio-custom col-6"></span>

            </label>

          </div>

        </div>

      </section>

      <button onClick={handleCreateGroup} className='create-btn'>Create</button>
    </div>
  );
};

export default PopupForm;
