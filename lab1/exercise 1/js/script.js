
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createRadialGradient(75,50,5,90,60,100);
grd.addColorStop(0,"red");
grd.addColorStop(1,"yellow");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(0,0,500,80);

var myArr = ["Audi", "BMW", "Ford", "Honda", "Jaguar", "Nissan"];

function showContent() {
  var temp, item, a, i;
  // Get the template element:
  temp = document.getElementsByTagName("template")[0];
  // Get the DIV element from the template:
  item = temp.content.querySelector("div");
  // For each item in the array:
  for (i = 0; i < myArr.length; i++) {
    // Create a new node, based on the template:
    a = document.importNode(item, true);
    // Add data from the array:
    a.textContent += myArr[i];
    // Append the new node wherever you like:
    document.body.appendChild(a);
  }
}

(function() {
    var updateButton = document.getElementById('updateDetails');
    var cancelButton = document.getElementById('cancel');
    var favDialog = document.getElementById('favDialog');

    // Update button opens a modal dialog
    updateButton.addEventListener('click', function() {
    favDialog.showModal();
    });

    // Form cancel button closes the dialog box
    cancelButton.addEventListener('click', function() {
    favDialog.close();
});

})();


