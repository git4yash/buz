import React, { useState, useEffect } from 'react'
import VideoCard from './VideoCard'

const Feed = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    // Fetch videos from an API
    // For now, we'll use dummy data
    setVideos([
      { id: 1, url: 'https://example.com/video1.mp4', likes: 1000, user: 'user1' },
      { id: 2, url: 'https://example.com/video2.mp4', likes: 2000, user: 'user2' },
      { id: 3, url: 'https://example.com/video3.mp4', likes: 1500, user: 'user3' },
    ])
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recommended for you</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  )
}

export default Feed