// CoDev — A GPT 4.0 Virtual Developer, by twitter.com/@etherlegend

function checkPassword() {
    const inputPassword = document.getElementById('password-input').value;
    const correctPassword = ['bishowdeep', 'Bishowdeep'];

    if (correctPassword.includes(inputPassword)) {
        window.location.href = 'success.html';
    } else {
        alert('Incorrect Password, try again!');
    }
}

function showHint() {
    alert('YOUR CLASS TOPPER FIRST NAME WHICH IS GOING TO DROP NOW...');
}