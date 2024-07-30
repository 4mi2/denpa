document.addEventListener("DOMContentLoaded", function() {
    fetch('https://script.google.com/macros/s/AKfycbyNKhNtO2q-AKzf139niL7djeJJScPjdAGByKrRWwIzbqijczujkOPX39uGa9arAI4DgQ/exec')
        .then(response => response.json())
        .then(data => {
            document.getElementById('content').innerHTML = data.message;
        })
        .catch(error => console.error('Error:', error));
});
