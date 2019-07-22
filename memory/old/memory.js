

// Events on page load
document.addEventListener("DOMContentLoaded", function() {
  var card = document.querySelectorAll('div.card');
  var front = document.querySelectorAll('.front');
  var center1 = document.querySelector('.center1');
  var center2 = document.querySelector('.center2');
  var center3 = document.querySelector('.center3');

// Center tile
  center1.classList.toggle('load');
  setTimeout(function() {
    center1.classList.toggle('load');
    center2.classList.toggle('load');
  },1100);
  setTimeout(function() {
    center2.classList.toggle('load');
  },2600);
  setTimeout(function() {
    center3.classList.toggle('load');
  },3000);

  alert('loaded'); 

// Spin intro
  for (let i=0; i<card.length; i++) {
    setTimeout(function() {
      front[i].classList.add('loaded');
    }, i * 30);
  }

});


// Middle Counter
var counter = 0;
var center = document.querySelector('.center');
var middle = document.createElement('h5');
center.appendChild(middle);

// Delay backside of cards so they don't appear on spin
var card = document.querySelectorAll('div.card');
var frontDiv = document.querySelectorAll('.front');
var backDiv = document.querySelectorAll('.back');

setTimeout(function() {
  for (let i=0; i<card.length; i++) {
    console.log(backDiv[i]);
    backDiv[i].style.display = 'block';
    backDiv[i].style.backfaceVisibility = 'hidden';
    frontDiv[i].style.backfaceVisibility = 'hidden';
  }
}, 2000);


// Random generate back of cards
var cardAssign = ['a', 'a', 'b', 'b', 'c', 'c', 'd', 'd', 'e', 'e', 'f', 'f', 'g', 'g', 'h', 'h', 'i', 'i', 'j', 'j', 'k', 'k', 'l', 'l'];
var cardBack = document.querySelectorAll('.card .back');
for (let i=0; i<cardBack.length; i++) {
//  if (i === 12) continue;
  var random = cardAssign[Math.floor(Math.random() * cardAssign.length)];
  cardAssign.splice(cardAssign.indexOf(random), 1);
  
  var back = document.createElement("img");
  back.setAttribute('src', 'gifs/gif' + random + '.webp');
  cardBack[i].appendChild(back);
  cardBack[i].classList.add('gif' + random);
}


// On click
var card = document.querySelectorAll('div.card');
var count = 0
var card1 = '';
var card2 = '';
var tester1 = '';
var tester2 = '';
var matches = [];
var tmp = 0;
for (let i=0; i<card.length; i++) {
  card[i].addEventListener("click", function() {
    count++;
    
    if (count === 2) {
      console.log(count)
      card2 = card[i];
      if (matches.includes(card2) === false && i !== tmp) { 
       
      // Middle Counter + Flip
      card[i].classList.toggle('flip'); 
      counter++;
      middle.innerHTML = counter;
      document.getElementById('circle').classList.toggle('count');
      setTimeout(function() {
        document.getElementById('circle').classList.toggle('count');
      }, 300);
      
      var classes2 = card[i].querySelector('div.back')
      var gif2 = classes2.classList;

      for (let i=0; i<gif2.length; i++) {
        if (gif2[i].includes('gif') === true) {
          tester2 = gif2[i];
        }
      }
      console.log(tester1, tester2);
      if (tester1 === tester2) {
        card1.removeEventListener('click', match);
        card2.removeEventListener('click', match);
        matches.push(card1);
        matches.push(card2);
        count = 0;
        if (matches.length === 24) {
          alert('Finished');
        }
      }
      else {
        setTimeout(function() {

        card1.classList.toggle('flip');
        card2.classList.toggle('flip');
        count = 0;
      }, 1100)
      }
     }
     else { count--; }
    }
    else if (count === 1) {
      
      // Middle count plus + flip
      card1 = card[i];
      if (matches.includes(card1) === false) {
      card[i].classList.toggle('flip');
      tmp = i;
      counter++;
      middle.innerHTML = counter;
      document.getElementById('circle').classList.toggle('count');
      setTimeout(function() {
        document.getElementById('circle').classList.toggle('count');
      }, 300);
    
      
      var classes = card[i].querySelector('div.back')
      var gif = classes.classList;

      for (let i=0; i<gif.length; i++) {
        if (gif[i].includes('gif') === true) {
          tester1 = gif[i];
       }
     }
    }
    else { count--; }
  }


  });
}


function match() {
  console.log('listener removed')
}


// On click 2
//var card = document.querySelectorAll('.card2');
//for (let i=0; i<card.length; i++) {
//  card[i].addEventListener("click", function() {
//    console.log(card[i]);
//    card[i].classList.toggle('flip');
//    
//})
//}

//{
//  backDiv[i].style.display = 'block';
//  backDiv[i].style.backfaceVisibility = 'hidden';
//  frontDiv[i].style.backfaceVisibility = 'hidden';
// }, 2000);
 //   if (i === 12) continue;