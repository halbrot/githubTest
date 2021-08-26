const target = elem.contentWindow.document.querySelector('body > div.s3-rc-h-standard > div.s3-rc-h-section-bar > div > div > div');
const btn = document.getElementById('trigger');



btn.addEventListener('click', function(){
    console.log(target.value)
   });