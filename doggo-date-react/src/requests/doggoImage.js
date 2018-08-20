const DoggoImage = {
  random() {
    return fetch(`https://dog.ceo/api/breeds/image/random`).then(response =>
      response.json()
    );
  }
};

// {
//   "status": "success",
//   "message": "https://images.dog.ceo/breeds/rottweiler/n02106550_11903.jpg"
// }

export default DoggoImage;
