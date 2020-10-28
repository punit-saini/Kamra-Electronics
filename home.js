
var img = document.querySelector('.toggle-button')

var count = 0;





    img.addEventListener('click', function(){
        count++;
        console.log(count);
        document.querySelector('.nav-links').classList.toggle("active");
 });