//keep track of whats searched(prevent reload everytime)
//gain access to serverId, secret, id>>photo url
//fetch the searchedImage in photourl in the main photosurl  with image and src attributes
//prevent reload
//convert default url in json(manipulate DOM properly)
//for each photo. append the current pic in img(innerHTML, document.createElement('img'))
//push
//responsive@media queries, asyn .. await(incase of delayed respone)

const form = document.getElementById("image_container");

const imageContainer = document.querySelector(".image-container");
const submit = document.getElementsByClassName("submit");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const searched = data.get("searchedimage");
  const photosUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=d98af0bfdcfa8cc8bd2fd92d5120b951&text=${searched}&format=json&nojsoncallback=1`;

  let imageArr = [];

  fetch(photosUrl).then(async (rvesponse) => {
    const jsonObject = await response.json();
    const imagesUrl = jsonObject.photos.photo;

    imagesUrl.forEach((imageUrl) => {
      const url = `https://live.staticflickr.com/${imageUrl.server}/${imageUrl.id}_${imageUrl.secret}_w.jpg`;
      imageArr.push(url);
    });

    imageArr.forEach((result) => {
      const newImage = document.createElement("img");
      newImage.src = result;

      imageContainer.append (newImage)
      
    });
  });
});
