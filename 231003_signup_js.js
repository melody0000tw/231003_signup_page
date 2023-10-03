

// 綁定按鈕
const FormSignUpBtn = document.querySelector(".form-sign-up-btn");
const FormSignInBtn = document.querySelector(".form-sign-in-btn");
const OvlSignUpBtn = document.querySelector(".overlay-sign-up-btn");
const OvlSignInBtn = document.querySelector(".overlay-sign-in-btn");

// 綁定輸入欄
const signUpAccount = document.querySelector(".sign-up-account");
const signUpPassword = document.querySelector(".sign-up-password");
const signInAccount = document.querySelector(".sign-in-account");
const signInPassword = document.querySelector(".sign-in-password");

// 綁定頁面
const container = document.querySelector(".container");
const signInContainer = document.querySelector(".sign-in-container");
const signUpContainer = document.querySelector(".sign-up-container");

// overlay頁面
OvlSignInBtn.addEventListener("click", function(e) {
    e.preventDefault();
    container.classList.toggle("show-sign-in");
});

OvlSignUpBtn.addEventListener("click", function(e) {
    e.preventDefault();
    container.classList.toggle("show-sign-in");
});



// sign up 按鈕

function callSignUp(){

    if(signUpAccount.value=="" || signUpPassword.value==""){
      alert("請填寫正確資訊");
      return;
    }

    let obj = {};
    obj.email = signUpAccount.value;
    obj.password = signUpPassword.value;
    console.log(obj);

    axios.post('https://hex-escape-room.herokuapp.com/api/user/signup', obj)
      .then(function (response) {
        alert(response.data.message);
        signUpAccount.value="";
        signUpPassword.value="";
        if(response.data.message==="帳號註冊成功"){
            container.classList.toggle("show-sign-in");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    
};

FormSignUpBtn.addEventListener("click",function(e){
    e.preventDefault();
    callSignUp();
});


// sign in 按鈕

function callSignIn(){
    let obj = {}
    obj.email = signInAccount.value;
    obj.password = signInPassword.value;
    console.log(obj)
    
    axios.post('https://hex-escape-room.herokuapp.com/api/user/signin', obj)
      .then(function (response) {
        alert(response.data.message);
        signInAccount.value="";
        signInPassword.value="";
      })
      .catch(function (error) {
        console.log(error);
      });
};

FormSignInBtn.addEventListener("click",function(e){
  e.preventDefault();  
  callSignIn();

})
