/*Name this external file gallery.js*/
var divColor;
var divText;
var divURL;

function upDate(previewPic){
    /*In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image*/

      var divImage = document.getElementById("image");
     
      console.log("function upDate called **********")
      console.log ("save original properties");
      divText = divImage.innerHTML;
      divColor = divImage.style.backgroundColor;
      divURL = divImage.style.backgroundImage;
      
      console.log("change URL to:", previewPic.src);
      divImage.style.backgroundImage = "url('" + previewPic.src + "')";

    /*2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image*/ 
      console.log("change text for div to:", previewPic.alt);
      divImage.innerHTML = previewPic.alt;
}

function unDo(){
    /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    */
        var divImage = document.getElementById("image");
        console.log("function unDo called **********");
        console.log(divImage);

        console.log("Restore original properties");
        divImage.style.backgroundImage = divURL;
        divImage.style.backgroundColor = divColor;

    /*2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
        divImage.innerHTML = divText;
}