// var thirdButton = document.querySelector('.third_button');
// thirdButton.addEventListener("click", function(){
//    alert("you clicked the third button!");
// });

// var secondButton = document.querySelector('.second_button');
// secondButton.onclick = function(){
//    alert("you clicked the second button!");
// }


// var button = document.getElementsByTagName("button");
// var containerDiv = document.getElementById('container');

// console.log(button)

// for (var i=0; i<button.length; i++) {
//  button[i].addEventListener('click', function(){
//    alert('button click')
//    if (i === 0) {
//      containerDiv.style.backgroundColor = 'blue'
//    }
//    else containerDiv.style.backgroundColor = 'red'
//  });
//};

// document.addEventListener("DOMContentLoaded", function(){
//   var container = document.getElementById("container");
//   container.addEventListener("click", function(event){
//       console.log("Let's look at the event object!", event);
//   });
// });


var meme = document.querySelector('#meme');
var count = 0;


meme.addEventListener('submit', function(e) {
  console.log(e.target)
  var imgUrl = document.getElementById('imgurl').value;
  var topText = document.getElementById('toptext').value;
  var bottomText = document.getElementById('bottomtext').value;
  var imgBox = document.getElementById('img-box');

  e.preventDefault();

  addImg(imgUrl)
  addText(topText, bottomText)
 

  var imgs = document.getElementsByClassName('imgdiv')[count]
  imgs.addEventListener('mouseover', function(f) {
    
  imgs.addEventListener('click', function(g) {
      console.log('close window')
      console.log(g.target)
 //     imgs.parentNode.removeChild(imgs)
      f.target.remove();
      count--
    })
    console.log('mouseover');
  })
  count++








});


    //    imgs.addEventListener('click', function(e) {
//      console.log('close window')
//      console.log(e.target)
//      imgs.parentNode.removeChild(imgs)
//      count--
//    })
//    console.log('mouseover');
//  })
//  count++




function addImg(url) {
  var div = document.createElement('div');
  div.classList.add('imgdiv')
  var img = document.createElement('img');
  img.setAttribute('src', url);
  var bigX = document.createElement('p')
  bigX.classList.add('bigx')
  bigX.innerHTML = 'X'

  console.log(count)
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
