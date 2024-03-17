
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Profile from '../components/Profile';

function ProfilePage() {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        // const response = await fetch(`https://api.github.com/users/sudheerj`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, [username]);

  return (
    <div>
      {user ? <Profile user={user} /> : <p>Loading...</p>}
    </div>
  );
}

export default ProfilePage;
