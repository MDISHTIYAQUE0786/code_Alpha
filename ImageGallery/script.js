let fullImgBox=document.querySelector('#fullImgBox');
let fullImg=document.getElementById('fullImg');
function openFullImg(pic){
    fullImgBox.style.display="flex"
    fullImg.src=pic;
}

function closeFullImg(){
    fullImgBox.style.display='none';
}

