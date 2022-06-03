import React, { useState } from 'react';
import UsersListComponent from './UserListComponent';

const AutoComplete = ({ users, autoCompleteSearch, getUser }) => {
  const [activeUserIndex, setActiveUserIndex] = useState(0);
  const [showUsers, setShowUsers] = useState(false);
  const [input, setInput] = useState("");

  const onChange = e => {
    autoCompleteSearch(e.target.value);
    console.log(users);
    setInput(e.target.value);
    setActiveUserIndex(0);
    setShowUsers(true);
  };

  const onClick = selectedUsername => {
    setInput(selectedUsername);
    setActiveUserIndex(0);
    setShowUsers(false);
    getUser(selectedUsername);
  };

//   const onKeyDown = (e) => {
//     // User pressed the enter key
//     if (e.keyCode === 13) {
//       setInput(filteredSuggestions[activeSuggestionIndex]);
//       setActiveSuggestionIndex(0);
//       setShowSuggestions(false);
//     }
//     // User pressed the up arrow
//     else if (e.keyCode === 38) {
//       if (activeSuggestionIndex === 0) {
//         return;
//       }

//       setActiveSuggestionIndex(activeSuggestionIndex - 1);
//     }
//     // User pressed the down arrow
//     else if (e.keyCode === 40) {
//       if (activeSuggestionIndex - 1 === filteredSuggestions.length) {
//         return;
//       }

//       setActiveSuggestionIndex(activeSuggestionIndex + 1);
//     }
//   };

  

  return <div>
      <form className='form'>
        <input
          type="text"
          onChange={onChange}
          //onKeyDown={onKeyDown}
          value={input}
          placeholder='Search users'
        />
        {showUsers && input && <UsersListComponent users={users} activeUserIndex={activeUserIndex} onClick={onClick} />}
      </form>
    </div>
};

export default AutoComplete;
