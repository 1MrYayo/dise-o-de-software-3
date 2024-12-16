import { useState } from 'react';

function LikeButton() {
  const [likes, setLikes] = useState(0);

  const sumarLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div style={{ marginTop: '10px' }}>
      <button onClick={sumarLike}>Like</button>
      <span style={{ marginLeft: '8px' }}>{likes} Likes</span>
    </div>
  );
}

export default LikeButton;

