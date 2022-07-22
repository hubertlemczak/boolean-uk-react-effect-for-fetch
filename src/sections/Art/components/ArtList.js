import { ArtListItem } from './ArtListItem';
import { useEffect, useState } from 'react';

export const ArtList = () => {
  const [artworks, setArtworks] = useState([]);
  const api =
    'https://api.artic.edu/api/v1/artworks?fields=image_id,artist_title,title,id,subject_titles&limit=100';

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setArtworks(data.data));
  }, []);
  console.log(artworks);

  return (
    <ul className="art-list">
      {artworks.map((artwork) => (
        <ArtListItem key={artwork.id} artwork={artwork} />
      ))}
    </ul>
  );
};
