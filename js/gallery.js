/*Name this external file gallery.js*/
var divColor;
var divText;
var divURL;
const origText = "Hover over an image below to display here.";


function setTabIndexes() {
    console.log("Setting tab indexes for all preview images");
    var currentImages = document.querySelectorAll(".preview");
    var divImage = document.getElementById("image");
    divImage.tabindex = 0;
    var j = 1;
    for (var i = 0; i < currentImages.length; i++) {
        console.log("currentImages[" + i + "].tabIndex=" + j);
        currentImages[i].tabIndex = j++;
        currentImages[i].style.filter = 'blur(2px)';
    }
}

function upDate(previewPic){
    /*
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    2) Change the text  of the div with the id = "image" to the alt text of the preview image
    3) unblur the preview image by setting its css filter property to none
    */ 

    console.log("function upDate() called **********", previewPic.src);
    var divImage = document.getElementById("image"); 
    divColor = divImage.style.backgroundColor;
    divText = divImage.innerHTML;
    divURL = divImage.style.backgroundImage;

    divImage.style.backgroundImage = "url('" + previewPic.src + "')";
    divImage.innerHTML = previewPic.alt;
    previewPic.style.filter = 'none'
}

function unDo(previewPic){
    /*
    1) Update the url and background color for the background image of the div with the id = "image" 
    back to the orginal-image.
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    3) Blur the preview image by setting its css filter property to blur(2px)*/
        console.log("function unDo() called **********");

        var divImage = document.getElementById("image");
        divImage.style.backgroundColor = divColor;
        divImage.innerHTML = divText;
        divImage.style.backgroundImage = divURL;       
        previewPic.style.filter = 'blur(2px)';
}


