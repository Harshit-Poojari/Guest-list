var names_of_people = [];
function submit(){
  
    var GuestName = document.getElementById("name1").value;
names_of_people.push(GuestName);
document.getElementById("display_name").innerHTML = names_of_people.toString();
}



function sort() {
names_of_people.sort();
console.log(names_of_people);
var i = names_of_people.join("<br>");
document.getElementById("sorted").innerHTML= i.toString();
}
function show(){
    document.getElementById("sort_button ").style.display="inline-block";
  
}