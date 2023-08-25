const getGifs = async (category) => {
  const url =
    "https://api.giphy.com/v1/gifs/search?api_key=qsWvjGYkFhgcpXpDklpPMfPvjve4RpUn&q=${category}&limit=20";
  const resp = await fetch(url);
  const { data = [] } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsize_medium_url,
  }));

  console.log(gifs);
  return gifs;
};

export const GifGrid = ({ category }) => {
  getGifs(category);

  return (
    <>
      <h3>{category}</h3>
    </>
  );
};
