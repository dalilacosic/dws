$(document).ready(function(){
  validatelogin();
  validateRegister();
});


function validatelogin() {
  $('.validate-form').on('submit', async function (e) {
    let email = $('#email');
    let password = $('#password');
    console.log(email, password);
    e.preventDefault();
    if (validate(email) == false || validate(password) == false) {
      alert('Invalid email or password');
    }
    $.ajax({
      url: 'api/v1/login',
      method: 'post',
      data: {
        email: email.val(),
        password: password.val()
      },
      success: function (res) {
        alert('Uspjesna prijava');
        localStorage.setItem('token', res.token);
        document.cookie = `Bearer=${res.token}`;
        location.assign('home');
      },
      error: function (res, status, error) {
        if (status === 400) {
          alert();
        } else {
          alert('Unauthorized access!');
        }
        location.assign('/login')
      }
    });
  });
}

function validateRegister() {
  $('.validate-form-reg').on('submit', async function (e) {
    let email = $('#email'),
     password = $('#password'),
     passwordCheck = $('#passwordCheck'),
     firstName = $('#firstName'),
     lastName = $('#lastName');
    e.preventDefault();
    if (validate(email) == false) {
      alert('Pogresan format emaila')
      return;
    }
    if (validate(password) == false) {
      alert('Lozinka je prekratak');
      return;
    }
    if (validate(passwordCheck) == false) {
      alert('Ponovljena lozinka je prekratka');
      return;
    }
    if (password.val() !== passwordCheck.val()) {
      alert('Lozinke se ne poklapaju!');
      return;
    }
    $.ajax({
      url: 'api/v1/register',
      method: 'post',
      data: {
        email: email.val(),
        password: password.val(),
        passwordCheck: passwordCheck.val(),
        firstname: firstName.val(),
        lastname: lastName.val(),
      },
      success: function (res) {
        alert('Uspjesno registrovni, nastavljamo na prijavu.');
        location.assign('login');
      },
      error: function (res, status, error) {
        if (status === 400) {
          alert('Something wrong with provided info, please try again');
        } else {
          alert('Unauthorized access!');
        }
        location.assign('index');
      }
    })
  });
}
function validate(input) {
  //provjerimo tip inputa ili po imenu
  if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
    //RegEx za mail validaciju
    if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/i) == null) {
      return false;
    }
  } else {
    //provjera passworda gorenavedena
    if ($(input).val().trim() == '' || $(input).val().trim().length < 4) {
      return false;
    }
  }
  return true;
}




