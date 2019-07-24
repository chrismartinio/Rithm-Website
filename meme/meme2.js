var meme = document.querySelector('#meme');
var count = 0;

document.addEventListener('submit', function(e) {
  e.preventDefault();
  var imgUrl = document.getElementById('imgurl').value;
  var topText = document.getElementById('toptext').value;
  var bottomText = document.getElementById('bottomtext').value;
  var imgDiv = document.getElementsByClassName('imgdiv');


  addImg(imgUrl, count);
  imgDiv[count].classList.add('load');
  addText(topText, bottomText);

  count++
  console.log('countadd', count)
  var imgs = document.getElementsByClassName('imgdiv');

//  for (let i=0; i<count; i++) {
//    imgBox.addEventListener('click', function(e) {
//      console.log('count', count);
//      console.log(e.target.parentNode);
//      e.target.parentNode.remove();
//      count--;
//    })
//  }

})

var imgBox = document.getElementById('img-box');
imgBox.addEventListener('click', function(e) {
  console.log('count', count);
  console.log(e.target.parentNode);
  e.target.parentNode.remove();
  count--;
});

function addImg(url, count) {
  var div = document.createElement('div');
  div.classList.add('imgdiv')
  var img = document.createElement('img');
  img.setAttribute('src', url);
  var bigX = document.createElement('p')
  bigX.classList.add('bigx')
  bigX.innerHTML = 'X'


  return document.getElementById('img-box').appendChild(div), document.getElementsByClassName('imgdiv')[count].appendChild(img), document.getElementsByClassName('imgdiv')[count].appendChild(bigX)
}

function addText(topText, bottomText) {
  var topDiv = document.createElement('div');
  topDiv.classList.add('topdiv')
  topDiv.innerHTML = topText

  var bottomDiv = document.createElement('div');
  bottomDiv.classList.add('bottomdiv')
  bottomDiv.innerHTML = bottomText
  
  return document.getElementsByClassName('imgdiv')[count].appendChild(topDiv), document.getElementsByClassName('imgdiv')[count].appendChild(bottomDiv)
}