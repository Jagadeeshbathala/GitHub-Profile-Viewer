// src/pages/RepositoryListPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Repository from '../components/Repository';
import Pagination from '../components/Pagination';

function RepositoryListPage() {
  const { username } = useParams();
  const [repositories, setRepositories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(10);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const repoData = await response.json();
        setRepositories(repoData);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepositories();
  }, [username]);

  // Pagination
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repositories.slice(indexOfFirstRepo, indexOfLastRepo);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {currentRepos.map((repo) => (
        <Repository key={repo.id} user={username} repository={repo} />
      ))}
      <Pagination
        reposPerPage={reposPerPage}
        totalRepos={repositories.length}
        paginate={paginate}
      />
    </div>
  );
}

export default RepositoryListPage;
