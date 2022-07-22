export const ArtListItem = ({ artwork }) => {
  const image = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`;
  // useEffect(() => {
  //   console.log(imageAPI);
  //   fetch(imageAPI)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, [artwork]);
  return (
    artwork.image_id != null && (
      <li>
        <div className="frame">
          <img src={image} alt="" />
        </div>
        <h3>{artwork.title}</h3>
        <p>Artist: {artwork.artist_title}</p>
        <h4>Artistic Subjects:</h4>
        <ul>
          {artwork.subject_titles.map((subject, i) => (
            <li key={i}>{subject}</li>
          ))}
        </ul>
      </li>
    )
  );
};
