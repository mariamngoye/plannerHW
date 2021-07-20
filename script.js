
function todaysDE() {
    var date = new Date();
    var days = date.getDay(); 
    var Time = date ;
    return Time;
}
document.getElementById("currentDay").innerHTML = todaysDE();

var userinput = document.getElementById("1").value  

function colorCheck() {
  if (localStorage.userinput){
    localStorage.userinput = "Save:"+(localStorage.userinput);
    } else {
      localStorage.userinput = ""; 
    }
}


function colorCheck4() {
  if (localStorage.getElementById("5")){
    localStorage.getElementById("5") = "Save:"+(localStorage.getElementById("5"));
    } else {
      localStorage.getElementById("5") = ""; 
    }
}

var saveBtn = document.getElementById('saveBtn');
saveBtn.addEventListener('click', value);


    console.log(currentTime);
    
   //("inputHr").each(function () {

    //  if ( value < 3) {
      // classList.add("past");
    //  }
       
    //  else if (value === 4) {
      //  classList.add("present")
    //  }
     // else {
       // classList.add("future");
      //}
 
   // })

   saveBtn.addEventListener('click', function() {
      document.getElementById("2").classList.add("present")});

function colorCheck() {
   var element = document.getElementById("1");
   element.classList.add("past")};
 function colorCheck1() {
    var element = document.getElementById("2");
    element.classList.add("past")};
  function colorCheck2() {
      var element = document.getElementById("3");
      element.classList.add("past")};
   

   function colorCheck3() {
    var element = document.getElementById("4");
    element.classList.add("present")};
    
    function colorCheck4() {
      var element = document.getElementById("5");
      element.classList.add("future")};
    function colorCheck5() {
        var element = document.getElementById("6");
        element.classList.add("future")};
    function colorCheck6() {
          var element = document.getElementById("7");
          element.classList.add("future")};