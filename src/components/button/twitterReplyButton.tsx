import { useState } from 'react'
import { Repeat2 } from 'lucide-react'
import { motion } from 'framer-motion'

interface TwitterReplyButtonProps {
  initialReplies?: number
}

export default function TwitterReplyButton({ initialReplies = 0 }: TwitterReplyButtonProps) {
  const [isReplied, setIsReplied] = useState(false)
  const [replyCount, setReplyCount] = useState(initialReplies)

  const handleReply = () => {
    if (isReplied) {
      setReplyCount(replyCount - 1)
    } else {
      setReplyCount(replyCount + 1)
    }
    setIsReplied(!isReplied)
  }

  return (
    <button
      onClick={handleReply}
      className="flex items-center space-x-1 group"
      aria-label={isReplied ? "Annuler le retweet" : "Retweeter"}
    >
      <motion.div
        whileTap={{ scale: 0.8 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Repeat2
          className={`w-5 h-5 ${
            isReplied
              ? 'text-green-500'
              : 'text-gray-500 group-hover:text-green-500'
          } transition-colors duration-200`}
        />
      </motion.div>
      <span
        className={`text-sm ${
          isReplied ? 'text-green-500' : 'text-gray-500 group-hover:text-green-500'
        } transition-colors duration-200`}
      >
        {replyCount}
      </span>
    </button>
  )
}