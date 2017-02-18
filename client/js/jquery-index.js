$(document).ready(function() {

  $.ajax({
    url  : "http://localhost:3000/users",
    method : "GET",
    success: function(data) {
      if (localStorage.getItem("token")) {
      $('#user-list').append(`<h3>List of User</h1>`)

      var arrTemp = ''
      for (var i = 0; i < data.length; i++) {
          arrTemp += `
          <div class="col s12 l12">
            <div class="col s12">
                <div class="card darken-1">
                  <div class="card-content">
                    <div class="row margin">

                      <div class="input-field col s9">
                        <h5>
                          ${data[i].username}
                        </h5>
                      </div>

                      <div class="input-field col s2">
                      </div>
                    </div>

                  </div>
                </div>
            </div>
          </div>
          `
        }
        $('#user-list').append(arrTemp)
        $('#button').append('<button onclick="logout()">LOGOUT</button>')
      }
      else{
        $('#button').append('<button onclick="login()">LOGIN</button>')
      }
    }
  })
})

function login() {
  localStorage.clear()
  window.location.href = 'http://127.0.0.1:8080/login.html'
}

function logout() {
  localStorage.clear()
  window.location.href = 'http://127.0.0.1:8080/login.html'
}
