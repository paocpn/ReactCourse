const apiKey = "9IOqXZq1BNyeX52EbbIpPwS8B6OPmDio";

const peticion = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
);

peticion
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
  })
  .catch(console.warn);

// In summary, this code fetches a random GIF from Giphy's
// API, extracts the URL of the GIF, creates an img element,
// sets the image source to the GIF URL,
// and displays the image on a webpage.
// It's a simple example of how you can use JavaScript
// and APIs to interact with remote data and
// enhance your web pages with dynamic content
