<template>
  <div class="login-component">
    <div class="flip-container">
      <div class="flipper">
        <div class="front">
          <!-- front content -->
          <div class="holder">
            <h1 class="heading">piluku</h1>
            <input class="form-control" type="text" placeholder="Username" v-model="userName" />
            <input type="password" class="form-control" placeholder="Password" v-model="password" />
            <div class="bottom_info">
              <a
                href="#"
                class="pull-right"
                data-toggle="modal"
                data-target="#forgot"
              >forgot password?</a>
              <a class="pull-left">Register new account</a>
            </div>
            <div class="clearfix"></div>
            <a class="btn btn-primary btn-block" v-on:click="loginUser()">Sign in</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="forgot"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
      style
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title" id="myModalLabel">
              <i class="ion-android-settings"></i> Reset password
            </h4>
          </div>
          <div class="modal-body">
            <div class="col-sm-12">
              <input type="text" class="form-control" placeholder="Enter Email here" />
              <h6 class="note">
                <i class="ion-android-mail"></i> password will be sent to your email
              </h6>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-red" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Send</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: "loginPage",
    data() {
        return { 
            userName: '',
            password: ''
        }
    },
    methods: {
        loginUser() {
            console.log('User ' + this.userName, this.password);
            if (this.userName === 'admin' && this.password === '123456') {
                console.log('User Valid !');
            }
        }
    }
}
</script>
<style lang="css" scoped>
@import url(http://fonts.googleapis.com/css?family=Nunito:400,300);
/************theme fonts********************/
/***********************theme colors*****************************/
/*****************theme parametres*******************/
/*sidebar-parametres*/
html,
body {
  overflow-x: visible !important;
  overflow-y: visible !important;
  background: #e9ecf2;
}
.flip-container {
  width: 520px;
  margin: 0 auto;
  margin-top: 150px;
  min-height: 400px;
  position: relative;
}
.flip-container .front {
  width: 520px;
  padding: 30px;
  height: 100%;
  background-color: #FFFFFF;
  clear: both;
  display: table;
  border-radius: 3px;
  border: 1px solid #d7dce5;
}
.flip-container .front,
.flip-container .back {
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
}
.flip-container .holder input {
  background: transparent;
  margin-top: 20px;
  height: 50px;
  border-radius: 3px;
}
.flip-container .bottom_info {
  margin-top: 30px;
  position: relative;
}
.flip-container .bottom_info a {
  text-decoration: none;
  color: #707780;
  outline: none;
}
.flip-container .bottom_info a:hover {
  color: #2196f3;
}
.flip-container .btn {
  height: 40px;
  font-size: 16px;
  margin-top: 20px;
  text-transform: uppercase;
  line-height: 40px;
  padding: 0;
}
.flip-container .heading {
  text-align: center;
  color: #2196f3;
}
.modal .modal-title {
  color: #707780;
  font-size: 16px;
}
.modal h6.note {
  margin-top: 30px;
  color: #707780;
  color: #fb5d5d;
}
.modal .modal-footer {
  border-top-width: 0 !important;
}
.modal .btn {
  margin-top: 0;
  border-radius: 3px;
  height: 35px;
  font-size: 14px;
}
@media (max-width: 530px) {
  .flip-container {
    margin-top: 5px;
    width: 350px ;
  }
  .flip-container .front {
    width: 350px ;
  }
}
</style>