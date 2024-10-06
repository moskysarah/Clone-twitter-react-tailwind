import React from 'react';

interface TweetProps {
    author: string;
    content: string;
}

const Tweet: React.FC<TweetProps> = ({ author, content }) => {
    return (
        <div className="border-b border-gray-600 p-4">
            <h3 className="font-bold">{author}</h3>
            <p>{content}</p>
        </div>
    );
};

export default Tweet;