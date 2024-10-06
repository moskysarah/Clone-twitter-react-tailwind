


import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TweetForm from '../components/TweetForm';

import Tweet from '../components/Tweet';
import TrendLists from '../components/TrendLists';
import TweetUsers from '../components/TweetUsers';

const Home: React.FC = () => {
    const [tweets, setTweets] = useState<{ author: string; content: string }[]>([]);

    const handleTweet = (content: string) => {
        setTweets([...tweets, { author: 'John Lewis', content, }]);
    };

    return (
        <div className="flex bg-black h-full">
            <Sidebar />
            
            <div className="flex-grow p-4 bg-black">
                
                <TweetForm onTweet={handleTweet} />
                {tweets.map((tweet, index) => (
                    <Tweet key={index} author={tweet.author} content={tweet.content} />
                ))}
                 <TweetUsers />
            </div>
            <TrendLists/>
        </div>
    );
};

export default Home;