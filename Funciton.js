document.getElementById("form-register").addEventListener("submit", function (event) { 
    event.preventDefault(); 
 
    const username = document.getElementById("username").value; 
    const gmail = document.getElementById("gmail").value; 
    const tanggallahir = document.getElementById("tanggal-lahir").value; 
    const password = document.getElementById("password"); 
    const confirmpassword = document.getElementById("confirm-password"); 
 
    function validatePassword() { 
        if (password.value !== confirmpassword.value) { 
            confirmpassword.setCustomValidity("Password tidak cocok"); 
        } else { 
            confirmpassword.setCustomValidity("");  
 
            username.innerHTML = username.value; 
            gmail.innerHTML = gmail.value; 
            tanggallahir.innerHTML = tanggallahir.value; 
            password.innerHTML = password.value; 
            confirmpassword.innerHTML = confirmpassword.value; 
        } 
    } 
 
    password.addEventListener("change", validatePassword); 
    confirmpassword.addEventListener("keyup", validatePassword);    
 
    //melakukan validasi 
    validatePassword(); 
 
 
    const usernameshow = document.getElementById("usernameshow"); 
    const gmailshow = document.getElementById("gmailshow"); 
    const tanggallahirshow = document.getElementById("tanggallahirshow"); 
    const passwordshow = document.getElementById("passwordshow"); 
    const confirmpasswordshow = document.getElementById("confirmpasswordshow"); 
 
     
    const hasil = { 
        username: username, 
        gmail: gmail, 
        tanggallahir: tanggallahir, 
        password: password, 
        confirmpassword: confirmpassword, 
    } 
})