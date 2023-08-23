function showPopup() {
    document.getElementById("popup").style.display = "block";
  /*var x = document.getElementById("popup");
  if (x.style.display === "none") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }*/
}
function showForm() {
    document.getElementById("seg_form").style.display = "block";
    /*var x = document.getElementById("seg_form");
    if (x.style.display === "none") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }*/
  }
function closeForm(){
    document.getElementById("seg_form").style.display = "none";
}

function closePopup(){
    document.getElementById("popup").style.display = "none";
}