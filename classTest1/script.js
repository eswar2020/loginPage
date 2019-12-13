    function storeValues() {

    var email = document.getElementById('email').value;
    var username = document.getElementById('r_name').value;
     var password = document.getElementById('r_pwd').value;


        localStorage.setItem('email',email);
        localStorage.setItem('name',username);
        localStorage.setItem('password',password);
        
   }

   
   
   function checkValues() {

    var name = localStorage.getItem('name');
    var pwd = localStorage.getItem('password');

    var username = document.getElementById('l_name').value;
    var password = document.getElementById('l_pwd').value;

    if (name == username && pwd == password) {
        alert("sucessfully logged!");
    } else {
        alert("wrong crendentials");
    }
  }

