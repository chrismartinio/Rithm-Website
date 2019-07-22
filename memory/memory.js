
// Events on page load
document.addEventListener("DOMContentLoaded", function () {
  var cardInner = document.querySelectorAll('.card-inner');
  var cardOuter = document.querySelectorAll('.card-outer');

  // Spin intro
  for (let i = 0; i < cardInner.length; i++) {
    setTimeout(function () {
      cardInner[i].classList.toggle('load');
    }, i * 30);
  }

  // Reset cards and transition
  for (let i = 0; i < cardInner.length; i++) {
    //    if (i === 12) { continue; }
    setTimeout(function () {
      cardInner[i].style['transform-style'] = 'preserve-3d';
      var load = cardOuter[i].querySelector('.load')
      if (i !== 12) { load.style['transition'] = 'transform .5s'; }
    }, 2000);
  }

  // Load center tile
  var center1 = document.querySelector('.center1');
  var center2 = document.querySelector('.center2');
  var center3 = document.querySelector('.center3');
  center1.classList.toggle('load');
  setTimeout(function () {
    center1.classList.toggle('load');
    center2.classList.toggle('load');
  }, 1100);
  setTimeout(function () {
    center2.classList.toggle('load');
  }, 2600);
  setTimeout(function () {
    center3.classList.toggle('load');
  }, 3000);

});


// On click card flip
//var card = document.querySelectorAll('.card-inner');
//for (let i = 0; i < card.length; i++) {
//  card[i].addEventListener("click", function () {
//    card[i].classList.toggle('flip');
//  });
//}

// Random generate back of cards, assign to back of cards
var cardAssign = ['a', 'a', 'b', 'b', 'c', 'c', 'd', 'd', 'e', 'e', 'f', 'f', 'g', 'g', 'h', 'h', 'i', 'i', 'j', 'j', 'k', 'k', 'l', 'l'];
var cardBack = document.querySelectorAll('.card-outer .back');
for (let i = 0; i < cardBack.length; i++) {
  var random = cardAssign[Math.floor(Math.random() * cardAssign.length)];
  cardAssign.splice(cardAssign.indexOf(random), 1);
  var backImg = document.createElement("img");
  backImg.setAttribute('src', 'gifs/gif' + random + '.webp');
  backImg.classList.add('card');
  cardBack[i].appendChild(backImg);
  cardBack[i].classList.add('gif' + random);
}



// Center Counter
var counter = 0;
var center = document.querySelector('.center');
var middle = document.createElement('h5');
center.appendChild(middle);



// -- On click -- 
// Vars
var card = document.querySelectorAll('.card-inner');
var finishLine = document.querySelector(".finishline");
var finishContent = document.querySelector(".finishcontent");
var yourScore = document.querySelector("span.yourscore");
var highScoreSpan = document.querySelector("span.highscore");
var newHighScore = document.querySelector("div.newhighscore");
var closeWindow = document.querySelector("#whitex");
highScore = localStorage.getItem('highScore');
var count = 0
var card1 = '';
var card2 = '';
var tester1 = '';
var tester2 = '';
var matches = [];
var tmp = 0;


// High score
if (localStorage.getItem('highScore') === null) {
  highScoreSpan.innerHTML = '0';
}
else {
  highScoreSpan.innerHTML = highScore;
}



for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("click", function () {
    count++;
    console.log(count);

    // Second card
    if (count === 2) {
      card2 = card[i];
      if (matches.includes(card2) === false && i !== tmp) {
        card[i].classList.toggle('flip');
        counter++;
        middle.innerHTML = counter;
        document.getElementById('circle').classList.toggle('count');
        setTimeout(function () {
          document.getElementById('circle').classList.toggle('count');
        }, 300);
        var classes2 = card[i].querySelector('div.back')
        var gif2 = classes2.classList;
        for (let i = 0; i < gif2.length; i++) {
          if (gif2[i].includes('gif') === true) {
            tester2 = gif2[i];
          }
        }
        if (tester1 === tester2) {
          matches.push(card1);
          matches.push(card2);
          count = 0;
          if (matches.length === 24) {
            finishLine.classList.add("load");
            finishContent.classList.add("load");
            yourScore.innerHTML = counter;
            if (Number(highScore) < counter || highScore === null) {
              localStorage.setItem("highScore", counter);
              var highScoreP = document.createElement("p");
              highScoreP.classList.add("newhighscore");
              highScoreP.innerHTML = "New high score!"
              newHighScore.appendChild(highScoreP);
              highScoreSpan.innerHTML = counter;
            }
            setTimeout(function () {
              closeWindow.addEventListener("click", function () {
                finishLine.classList.remove("load");
                finishLine.classList.remove("load");
              });
            }, 1000);
          }
          }
          else {
            setTimeout(function () {
              card1.classList.toggle('flip');
              card2.classList.toggle('flip');
              count = 0;
            }, 1100)
          
        }
      }
      else { count--; }
    }

    // First card  
    else if (count === 1) {
      card1 = card[i];
      if (matches.includes(card1) === false) {
        card[i].classList.toggle('flip');
        tmp = i;
        counter++;
        middle.innerHTML = counter;
        document.getElementById('circle').classList.toggle('count');
        setTimeout(function () {
          document.getElementById('circle').classList.toggle('count');
        }, 300);
        var classes = card[i].querySelector('div.back')
        var gif = classes.classList;
        for (let i = 0; i < gif.length; i++) {
          if (gif[i].includes('gif') === true) {
            tester1 = gif[i];
          }
        }
      }
      else { count--; }
    }
  });
}


// Tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  console.log('tooltips loaded');
})