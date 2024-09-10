import React, { useEffect } from 'react';

interface VimeoEmbedProps {
  videoId: string;
  title: string;
  aspectRatio?: string;
  autoplay?: boolean;
  autopause?: boolean;
  badge?: boolean;
}

const VimeoEmbed: React.FC<VimeoEmbedProps> = ({
  videoId,
  title,
  aspectRatio = '56.25%', // 16:9 aspect ratio by default
  autoplay = false,
  autopause = false,
  badge = false,
}) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const embedUrl = `https://player.vimeo.com/video/${videoId}?badge=${Number(badge)}&autopause=${Number(autopause)}&player_id=0&app_id=58479${autoplay ? '&autoplay=1' : ''}`;

  return (
    <div style={{ padding: `${aspectRatio} 0 0 0`, position: 'relative' }}>
      <iframe
        src={embedUrl}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        title={title}
      ></iframe>
    </div>
  );
};

export default VimeoEmbed;