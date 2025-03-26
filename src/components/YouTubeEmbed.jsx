// import React from 'react';
// import './YouTubeEmbed.css';

// const YouTubeEmbed = ({ videoId }) => {
//   return (
//     <div className="youtube-container">
//       <iframe
//         width="560"
//         height="315"
//         src={`https://www.youtube.com/embed/${videoId}`}
//         frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//         title="YouTube Video"
//       ></iframe>
//     </div>
//   );
// };

// export default YouTubeEmbed;
import React from 'react';
import './YouTubeEmbed.css';

const YouTubeEmbed = ({ videoId }) => {
  return (
    <div className="youtube-container">
      <iframe
        width="560"
        height="315"
         src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Video"
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
