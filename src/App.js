import React, { useState } from 'react';
import LeftSection from './component/Leftsection';
import PopupForm from './component/Popup';
import RightSection from './component/RightSection';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [showRightSection, setShowRightSection] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleGroupSelection = (group) => {
    setSelectedGroup(group);
    setShowRightSection(true); 
  };

  return (
    <div style={{ display: 'flex' }}>
      <LeftSection
        toggleForm={toggleForm}
        handleGroupSelection={handleGroupSelection}
        showRightSection={showRightSection}
      />
      <RightSection
        selectedGroup={selectedGroup}
        showRightSection={showRightSection}
        setShowRightSection={setShowRightSection}
      />
      {showForm && <PopupForm toggleForm={toggleForm} />}
    </div>
  );
}

export default App;
