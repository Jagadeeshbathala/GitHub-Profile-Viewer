import React from 'react';
import "./Repository.css"

function Repository({ user, repository }) {
  return (
    <div className='repos'>
        <div>
        <ul>
            <li>
            <h2><a href={`https://github.com/${user}/${repository.name}`} target="_blank">{repository.name}</a></h2>
            </li>
            <li>
            <p>{repository.description}</p>
            </li>
            <li>
            <p>Topics: {repository.topics && repository.topics.join(', ')}</p>
            </li>
        </ul>
        </div>
    </div>
  );
}

export default Repository;
