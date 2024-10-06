
import React, { useState } from 'react';
import MediaIcon from './icons/mediaIcon';
import PollIcon from './icons/pollIcon';
import EmojiIcon from './icons/emojiIcon';
import ScheduleIcon from './icons/scheduleIcon';
import GiftIcon from './icons/gifIcon';
import ProfileImg from './icons/profileImg';
import MyButton from './Button/MyButton';





const TweetForm: React.FC<{ onTweet: (content: string) => void }> = ({ onTweet }) => {
    const [content, setContent] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (content) {
            onTweet(content);
            setContent('');
        }
    };

    return (
           
        <form onSubmit={handleSubmit} className="border-b border-t  border-gray-600 p-4 bg-black w-full">
           
           <div className='flex '>
              <ProfileImg /><input type='text'
                 placeholder="What's happening ?"
                 value={content}
                 onChange={(e) => setContent(e.target.value)}
                 className='bg-black  border-0 p-2 focus:outline-none placeholder:text-xl placeholder-gray-700  text-white px-4 h-10 w-50 mt-3  '   
                />

            </div>
            <div className='flex mt-4 gap-2'>

                 <MediaIcon />
                 <GiftIcon/>
                 <PollIcon />
                 <EmojiIcon />
                 <ScheduleIcon/>

            </div>
           
            <div className='justify-between'>
              <MyButton bg="blue">Tweet</MyButton>
            </div>
            
        </form>
    );
};
export default TweetForm;