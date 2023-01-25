// function that handles the download of an image that we desplayed through a url
// it takes the url of the image and the name of the image as parameters

const handleDownload = (url, name) => {
  // this is the function that handles the download
  const handleDownloadImage = (url, name) => {
    // we create an anchor tag
    const anchor = document.createElement("a");
    // we set the download attribute to the name of the image
    anchor.setAttribute("download", name);
    // we set the href attribute to the url of the image
    anchor.setAttribute("href", url);
    // we append the anchor tag to the body
    document.body.appendChild(anchor);
    // we click on the anchor tag
    anchor.click();
    // we remove the anchor tag from the body
    document.body.removeChild(anchor);
  };

  // we call the function that handles the download
  handleDownloadImage(url, name);
};
// export the function
export default handleDownload;
