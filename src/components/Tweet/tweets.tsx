import React, { useState, useEffect } from 'react';

import Tweet from './tweet';
import api from '../../api/axios';

const HomeTweets: React.FC = () => {
  const [tweets, setTweets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await api.get('/tweets');
        setTweets(response.data);
        setIsLoading(false);
      } catch (error) {
        setError('Erreur lors du chargement des tweets');
        setIsLoading(false);
      }
    };

    fetchTweets();
  }, []);

  if (isLoading) return <div>Chargement...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Accueil</h1>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
};

export default HomeTweets;