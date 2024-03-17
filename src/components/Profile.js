import React from 'react';
import "./Profile.css"

function Profile({ user }) {
  return (
    <div className='profile-page'>
      <h1>{user.name}</h1>
      <img className='profile-pic' src={user.avatar_url} alt="User Avatar" />
      <p>{user.bio}</p>
      <p>Number of repositories: {user.public_repos}</p>
      <a href={`/repos/${user.login}`}>View Repositories</a>
    </div>
  );
}

export default Profile;
