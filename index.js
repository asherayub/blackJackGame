 document.querySelector(".start-game").addEventListener("click", function () {
     document.querySelector(".content").style.display = "block";
     document.querySelector(".start-game").style.display = "none";
     let card1 = Math.floor(Math.random() * 11) + 2;
     let card2 = Math.floor(Math.random() * 11) + 2;
     document.querySelector(".card-1").textContent = card1;
     document.querySelector(".card-2").textContent = card2;
     let sum = card1 + card2;
     document.querySelector(".sum").textContent = "Total = " + sum;

     let message = "";
     if (sum <= 20) {
         message = "Keep going👍🏻";
     } else if (sum === 21) {
         message = "You won🥳";
     } else {
         message = "You lost😭"
     }
     document.querySelector(".message").textContent = message;
 });

 