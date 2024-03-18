document.getElementById('btn-login').addEventListener('click', function(){
  const emailField = document.getElementById('userEmail');
  const email = emailField.value;
  const passwordField = document.getElementById('userPassword');
  const password = passwordField.value;
  
  if(email === 'demo@gmail.com' && password === 'secret'){
    window.location.href = 'bank.html'
  }
  else{
    alert('Invalid user')
  }
})