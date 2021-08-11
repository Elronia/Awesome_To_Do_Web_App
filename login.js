const registerDiv = document.querySelector('.login-reg');
const backToLogin = document.getElementById('blogin');
const loginDiv = document.querySelector('.login-div');
const accId = document.getElementById('account');
const containerRight = document.querySelector('.container-right');

registerDiv.remove();


accId.addEventListener('click',function() {
    loginDiv.remove();
    containerRight.appendChild(registerDiv);
});



const goBack = () => {
  registerDiv.remove();
  loginDiv.classList.add('appear');
  containerRight.appendChild(loginDiv);
}

backToLogin.addEventListener('click', goBack);