
import { MessageCircle, Heart, Share, } from 'lucide-react'

import RetweetIcon from './icons/retweetIcon'

export default function TweetUsers() {
  return (
    <div className="max-w-xl mx-auto bg-black rounded-xl shadow-md overflow-hidden">
      <div className="border-b border-b  border-gray-600    p-4 ">
        <div className="flex items-center mb-4">
          <img
            className="h-10 w-10 rounded-full mr-2"
            src="/profile-red.png"
            alt="Avatar de l'utilisateur"
          />
          <div className='flex gap-3'>
            <h2 className="font-bold">CNN</h2>
            <p className="text-gray-500 text-1xl">@CNN .7m</p>
          </div>
        </div>
        <div className="text-gray-200">
          <p className="">President Joe biden touted a new agreement reached wih the </p>
          <p>European Union to ease Trump-area tariffs on alliminium and steal as a </p>
          <p>"major breakthrough" that would serve to both strengthen the US steel </p>
          <p>industry and  combat the global climate crisis.</p>
        </div>
        <div className="flex justify-between items-center text-gray-500">
          <button className="flex items-center space-x-1 hover:text-blue-500">
            <MessageCircle className="w-5 h-5" />
            <span>57</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-blue-500">
            <RetweetIcon/>
          </button>
          
          <button className="flex items-center space-x-1 hover:text-red-500">
            <Heart className="w-5 h-5" />
            <span>184</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-blue-500">
            <Share className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="border-b border-b  border-gray-600    p-4 ">
        <div className="flex items-center mb-4">
          <img
            className="h-10 w-10 rounded-full mr-2"
            src="/Tweet-Profile-Photo.png"
            alt="Avatar de l'utilisateur"
          />
          <div className='flex gap-3'>
            <h2 className="font-bold">The New York Times</h2>
            <p className="text-gray-500 text-1xl">@nytimes .2m</p>
          </div>
        </div>
        <div className="text-gray-200">
             <p>Gardening boomed during the pandemic. Six Black writers share how it </p>
              <p>has helped them re-establish, and reimagine, a connection to</p>
              <p>cultivation and the land</p>
        </div>
          
            <img src="/image hand plain.png" 
            className="rounded-3xl mt-3"
               alt="image" 
             />
         
        <div className="flex justify-between items-center text-gray-500">
          <button className="flex items-center space-x-1 hover:text-blue-500">
            <MessageCircle className="w-5 h-5" />
            <span>19</span>
          </button>
          <RetweetIcon/>
          <button className="flex items-center space-x-1 hover:text-red-500">
            <Heart className="w-5 h-5" />
            <span>452</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-blue-500">
            
          </button>
          <button className="flex items-center space-x-1 hover:text-blue-500">
            <Share className="w-5 h-5" />
          </button>
          <button className="flex items-center space-x-1 hover:text-blue-500">
            
          </button>
        </div>
      </div>
      <div className="border-b border-b  border-gray-600    p-4 ">
        <div className="flex items-center mb-4">
          <img
            className="h-10 w-10 rounded-full mr-2"
            src="/profile-twitter.png"
            alt="Avatar de l'utilisateur"
          />
          <div className='flex gap-3'>
            <h2 className="font-bold">Twitter</h2>
            <p className="text-gray-500 text-1xl">@Twitter .29 Oct</p>
          </div>
        </div>
        <div className="text-gray-200">
           <p>BIG NEWS lol jk still twitter !</p>
        </div>
          
            
         
        <div className="flex justify-between items-center text-gray-500">
          <button className="flex items-center space-x-1 hover:text-blue-500">
            <MessageCircle className="w-5 h-5" />
            <span>118.7K</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-blue-500">
            <RetweetIcon/>
          </button>
          <button className="flex items-center space-x-1 hover:text-red-500">
            <Heart className="w-5 h-5" />
            <span>3.3M</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-blue-500">
            <Share className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="border-b border-b  border-gray-600    p-4 ">
        <div className="flex items-center mb-4">
          <img
            className="h-10 w-10 rounded-full mr-2"
            src="/profile-twitter.png"
            alt="Avatar de l'utilisateur"
          />
          <div className='flex gap-3'>
            <h2 className="font-bold">Twitter</h2>
            <p className="text-gray-500 text-1xl">@Twitter .29 Oct</p>
          </div>
        </div>
        <div className="text-gray-200">
           <p>We still believe then kamala harris will be vote!</p>
        </div>
          
            
         
        <div className="flex justify-between items-center text-gray-500">
          <button className="flex items-center space-x-1 hover:text-blue-500">
            <MessageCircle className="w-5 h-5" />
            <span>8.8K</span>
          </button>
          <RetweetIcon/>
          <button className="flex items-center space-x-1 hover:text-red-500">
            <Heart className="w-5 h-5" />
            <span>267.1K</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-blue-500">
            <Share className="w-5 h-5" />
          </button>
        </div>
      </div>

























    </div>
  )
}