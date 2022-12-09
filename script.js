// var currentPos = 0;
// var targetPos = 510;
// var skills = document.getElementById('s');

// skills.addEventListener('click',function(event){
//     event.preventDefault();
//     var scrollInterval = setInterval(function(){
//         if (currentPos>=targetPos){
//             clearInterval(scrollInterval);
//             return;
//         }
//         currentPos+=50;
//         window.scrollBy(0,50);
//     },50);
//     currentPos=0;
// })
// var scrollInterval = setInterval(function(){
//     if (currentPos>=targetPos){
//         clearInterval(scrollInterval);
//         return;
//     }
//     currentPos+=50;
//     window.scrollBy(0,50);
// },50);

// method 1:

// var navMenuAnchorTag = document.querySelectorAll('.nav-menu a');

// for(var i = 0;i<navMenuAnchorTag.length;i++){
//     navMenuAnchorTag[i].addEventListener('click',function(event){
//         event.preventDefault();
//         var targetSectionId = this.textContent.trim().toLowerCase();
//         var targetSection = document.getElementById(targetSectionId);

//         var interval = setInterval(function(){
//             var targetSectionCoordinates = targetSection.getBoundingClientRect();
//             if(targetSectionCoordinates.top<=0){
//                 clearInterval(interval);
//                 return;
//             }
//             window.scrollBy(0,50);
//         },20);
//     });
// }

// method 2:

// var navMenuAnchorTag = document.querySelectorAll('.nav-menu a');
// var interval;
// for(var i = 0;i<navMenuAnchorTag.length;i++){
//     navMenuAnchorTag[i].addEventListener('click',function(event){
//         event.preventDefault();
//         var targetSectionId = this.textContent.trim().toLowerCase();
//         var targetSection = document.getElementById(targetSectionId);

//         interval = setInterval(scrollVertical,20,targetSection);
//     });
// }

// function scrollVertical(targetSection){
//     var targetSectionCoordinates = targetSection.getBoundingClientRect();
//             if(targetSectionCoordinates.top<=0){
//                 clearInterval(interval);
//                 return;
//             }
//             window.scrollBy(0,50);
// }

//method 3:

var navMenuAnchorTag = document.querySelectorAll('.nav-menu a');
var interval;
for(var i = 0;i<navMenuAnchorTag.length;i++){
    navMenuAnchorTag[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionId = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionId);

        interval = setInterval(function(){
            scrollVertical(targetSection);
        },20);
    });
}

function scrollVertical(targetSection){
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top<=0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
}

var progressBars = document.querySelectorAll('.skill-progress>div');
var skillsContainer = document.getElementById('skill-set')
window.addEventListener('scroll',checkScroll);
var animationDone = false;

function initialiseBars(){
    for(let bar of progressBars){
        bar.style.width=0+'%'
    }
}
initialiseBars();

function fillBars(){
    for (let bar of progressBars){
        let targetWidth = bar.getAttribute('data-bar-width');
        let currentWidth = 0;
        let interval = setInterval(function(){
            if(currentWidth>targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width=currentWidth+'%'
        },5);
    }
}
function checkScroll(){
    var coordinates=skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top<=window.innerHeight){
        animationDone=true;
        console.log('skill section visible');
        fillBars();
    }else if(coordinates.top>window.innerHeight){
        animationDone=false;
        initialiseBars();
    }
}

