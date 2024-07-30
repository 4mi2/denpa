document.addEventListener("DOMContentLoaded", function() {
    fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec')
        .then(response => response.json())
        .then(data => {
            document.getElementById('content').innerHTML = data.message;
        })
        .catch(error => console.error('Error:', error));
});
