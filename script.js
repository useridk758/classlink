document.getElementById('request-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('user-input').value;
    
    if (input) {
        console.log(`GradeLink is preparing to route: ${input}`);
        // Future logic for handling the site request goes here
        alert("System is ready. Connection logic is currently pending configuration.");
    }
});
