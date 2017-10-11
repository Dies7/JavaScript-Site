window.onload = function() {

var current,
    screen,
    output,
    limit,
    zero,
    period,
    operator;

    screen = document.getElementById("result");

var elem = document.querySelectorAll(".num");

      var len = elem.length;

      for(var i = 0; i < len; i++ ) {

        elem[i].addEventListener("click",function() {

            num = this.value;

            output = screen.innerHTML +=num;

            limit = output.length;

         if(limit > 16 ) {

         alert("Sorry no more input is allowed");

       }

     },false);

    }

    document.querySelector(".zero").addEventListener("click",function() {

        zero = this.value;

        if(screen.innerHTML === "") {

           output = screen.innerHTML = zero;
        }

        else if(screen.innerHTML === output) {

         output = screen.innerHTML +=zero;

        }

    },false);

    document.querySelector(".period").addEventListener("click",function() {

        period = this.value;

        if(screen.innerHTML === "") {

         output = screen.innerHTML = screen.innerHTML.concat("0.");

         }

        else if(screen.innerHTML === output) {

          screen.innerHTML = screen.innerHTML.concat(".");

        }

    },false);


    document.querySelector("#eqn-bg").addEventListener("click",function() {

      if(screen.innerHTML === output) {

        screen.innerHTML = eval(output);
      }

      else {
            screen.innerHTML = "";
      }

    },false);

 document.querySelector("#delete").addEventListener("click",function() {

        screen.innerHTML = "";

    },false);


     var elem1 = document.querySelectorAll(".operator");

      var len1 = elem1.length;

      for(var i = 0; i < len1; i++ ) {

        elem1[i].addEventListener("click",function() {

        operator = this.value;

         if(screen.innerHTML === "") {

            screen.innerHTML = screen.innerHTML.concat("");

        }

        else if(output) {

            screen.innerHTML = output.concat(operator);

        }

    },false);

      }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("javabutton").innerHTML = "JavaScript is okay.";
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Set up!
var a_canvas = document.getElementById("a");
var context = a_canvas.getContext("2d");

// Draw the face
context.fillStyle = "yellow";
context.beginPath();
context.arc(95, 85, 40, 0, 2*Math.PI);
context.closePath();
context.fill();
context.lineWidth = 2;
context.stroke();
context.fillStyle = "black";

// Draw the left eye
context.beginPath();
context.arc(75, 75, 5, 0, 2*Math.PI);
context.closePath();
context.fill();

// Draw the right eye
context.beginPath();
context.arc(114, 75, 5, 0, 2*Math.PI);
context.closePath();
context.fill();

// Draw the mouth
context.beginPath();
context.arc(95, 90, 26, Math.PI, 2*Math.PI, true);
context.closePath();
context.fill();

// Write "Hello, World!"
context.font = "30px Garamond";
context.fillText("Hello, World!",15,175);
