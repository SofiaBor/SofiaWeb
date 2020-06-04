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