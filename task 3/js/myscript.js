(function () {

  var ele = document.getElementsByClassName('shoe_nr_li');
  var len = ele.length;

  for (var i=0; i<len; i++) {
    ele[i].addEventListener('click', shoe_click);
  }

  function shoe_click() {
    console.log("shoe f");
    var elements = document.getElementsByClassName("shoe_nr_li");
    for (var k=0; k<elements.length; k++) {
      if(elements[k].classList.contains('active')) {
        elements[k].classList.remove('active');
      }
    }
    event.currentTarget.classList.add('active');
  }

}());
