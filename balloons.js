document.addEventListener("DOMContentLoaded", function () {
  const elem = document.getElementById('dob');
  const datepicker = new Datepicker(elem, {
    // options
    autohide: true,
    format: 'MM-dd'
  });
  // uncheck all boxes by default (Firefox)
  document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);
  // event listener for check/uncheck


  document.getElementById('checkbox-card').addEventListener('change', function (e) {
    if (e.target.classList.contains('form-check-input')) {
      if (e.target.id == ("all")) {
        balloonadd("red");
        balloonadd("blue");
        balloonadd("green");
      }
      else { 
      balloonadd(e.target.id)
    }
    }
  function balloonadd(id) {
    const elem = document.getElementById(id + 'Img');
      elem.style.visibility = "visible";
      elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
      e.target.checked ?
        elem.classList.add("animate__animated", "animate__bounceInDown") :
        elem.classList.add("animate__animated", "animate__bounceOutUp");
  }
  document.getElementById('submit').addEventListener('click', function (e) {
    let AllEmpty = true
    document.querySelectorAll('.form-check-input').forEach(function (c) {
      c.checked ? AllEmpty = false : AllEmpty = AllEmpty;
    })
    if (AllEmpty) {
      bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
    }




  })
  })
  document.getElementById('checkbox-card').addEventListener('mouseover', function (e) {
    if (e.target.classList.contains('form-check-label')) {
      
        let h1 = document.getElementById("happybirthday");
        
        let color = e.target.getAttribute("for")
        
    
        h1.style.color = color
        
    }
  })

});