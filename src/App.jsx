
import { useEffect, useState } from 'react';
import './App.css';

import Home from './pages/Home/Home';
import Memories from './pages/Memories/Memories';
import RelationshipRequest from './pages/RelationshipRequest/RelationshipRequest';
import Gallery from './pages/Gallery/Gallery';
import Letter from './pages/Letter/Letter';
import RelationshipCounter from './components/RelationshipCounter';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <>
      <aside className="music-player" aria-label="Playlist do Spotify">
        <span className="music-player__label">
          Nossa trilha sonora
        </span>

        <iframe
          title="Playlist Nossa trilha sonora no Spotify"
          src="https://open.spotify.com/embed/playlist/4tIeETJWlNsiXHau46FC2Y?utm_source=generator&theme=1&autoplay=1"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="eager"
        />
      </aside>
      <RelationshipCounter />

      {currentPage === 'home' && (
        <Home onStart={() => setCurrentPage('memories')} />
      )}

      {currentPage === 'memories' && (
        <Memories
          onBack={() => setCurrentPage('home')}
          onContinue={() => setCurrentPage('relationship-request')}
        />
      )}

      {currentPage === 'relationship-request' && (
        <RelationshipRequest
          onBack={() => setCurrentPage('memories')}
          onContinue={() => setCurrentPage('gallery')}
        />
      )}

      {currentPage === 'gallery' && (
        <Gallery
          onBack={() => setCurrentPage('relationship-request')}
          onContinue={() => setCurrentPage('letter')}
        />
      )}

      {currentPage === 'letter' && (
        <Letter onBack={() => setCurrentPage('gallery')} />
      )}
    </>
  );
}

export default App;
