var keywords = [];

window.onload = function(){
  if(localStorage.getItem("keywords") === null){
    keywords = ['live', 'fast', 'skin', 'case', 'opencsgo', 'razer'];
  }else{
    keywords = JSON.parse(localStorage.getItem("keywords"));
    console.log(keywords);
  }
  remove_adds();
};

remove_adds = function(){
  document.body.style.backgroundImage = "";
  var links = document.links;

  for (var i = 0; i < links.length; i++){
    for (var j = 0; j < keywords.length; j++){
      var link_html = links[i].innerHTML;
      if (link_html.indexOf(keywords[j]) != -1){
        links[i].innerHTML = "";
      }
    }
  }
};

var r_pressed = false;

window.onclick = function(event){
  if(r_pressed == true) {
    element_clicked(event.target);
    return false;
  }
  r_pressed = false;
};

window.addEventListener("keydown", function(e){
  if(e.keyCode = 82) {
    r_pressed = true;
  }
});

element_clicked = function(elem){
  if(typeof elem.src === 'undefined'){
    elem.parentNode.removeChild(elem);
  }else{
    keywords.push(elem.src);
    localStorage.setItem("keywords", JSON.stringify(keywords));
    remove_adds();
    console.log(keywords);
  }
};
