function signup(){

    $.ajax({
      url  : "http://localhost:3000/users/signup",
      type : "POST",
      data: {
        username: $('#input-username').val(),
        password: $('#input-password').val()
      },
      success: function(data) {
        if (data.err) {
          alert(data.err)
        }
        else {
          alert("Register success! Now Login!")
        }

      }
    })
}

function login(){
    $.ajax({
      url  : "http://localhost:3000/users/login",
      type : "POST",
      data: {
        username: $('#input-username').val(),
        password: $('#input-password').val()
      },
      success: function(data) {
        if (data.err) {
          alert(data.err)
        }
        else {
          // console.log(data.token)
          localStorage.setItem("token", data.token)
          localStorage.setItem("username", data.username)

          window.location.href = 'http://127.0.0.1:8080/index.html'
        }
      }
    })
}
