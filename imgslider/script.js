var i = 0;
var img = [];
var time = 3000;

// img list
img[0] = 'img1.jpg';
img[1] = 'img2.jpg';
img[2] = 'img3.jpg';
img[3] = 'img4.jpg';
img[4] = 'img5.jpg';



//change img

function changeimg(){
    document.slide.src = img[i];
    

    if( i < img.length - 1 ){
        i++
    }else{
        i = 0
    }

    setTimeout("changeimg()" , time);

}


window.onload = changeimg;

