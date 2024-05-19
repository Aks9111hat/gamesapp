import React, { useState, useEffect } from 'react';

const Game = ({ src }) => {
  const [iframeSrc, setIframeSrc] = useState(src);

  useEffect(() => {
    setIframeSrc(src);
  }, [src]);

  return (
    <div>
      <iframe
        src={iframeSrc}
        title="Game"
        style={{ width: '100%', height: '100vh', border: 'none' }}
      />
    </div>
  );
};

export default Game;
