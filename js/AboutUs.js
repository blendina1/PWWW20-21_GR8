var img=0;
function changeimage(seconds){
    if(!img){
        document.getElementById("box-img").setAttribute("style", "background-image: url(images/AboutUs.jpg);");
        img++;
    }
    else{if(img==1){
        document.getElementById("box-img").setAttribute("style", "background-image: url(images/A.jpg);");
        img=0;
    }}
    setTimeout("changeimage("+seconds+")",((seconds)*1000));
}