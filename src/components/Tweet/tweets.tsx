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
      } catch (err) {
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
        <Tweet key={tweet} tweet={tweet} avatar={''} name={''} username={''} handle={''} time={''} content={''} numberLike={0} numberComment={0} numberRetweet={0} numberShare={0} image={''} tweetContent={0} />
      ))}
    </div>
  );
};

export default HomeTweets;