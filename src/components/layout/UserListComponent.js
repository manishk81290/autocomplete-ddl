import React from "react";

const UsersListComponent = ({users, activeUserIndex, onClick}) => {
    return users.length ? (
      <ul className="list-item">
        {users.map((user, index) => {
          let className;

          if (index === activeUserIndex) {
            className = "user-active";
          }

          return (
            <li className={`${className}`} key={user.id} onClick={()=>onClick(user.login)}>
              <div>
                <img
                  src={user.avatar_url}
                  alt=''
                  className='round-img'
                  style={{ width: "50px" }}
                />
              </div>
              <div>
                <h3>{user.login}
                <span>Location: {user.location}</span>
                </h3>
              </div>
              
              
            </li>
          );
        })}
      </ul>
    ) : (
      <div>
        <em>sorry no user found</em>
      </div>
    );
  };

  export default UsersListComponent;