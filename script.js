document.getElementById('animatedButton').addEventListener('click', function() {
    // Show loading overlay
    var overlay = document.createElement('div');
    overlay.classList.add('loading-overlay');
    overlay.textContent = "You naughty girl! You clicked the button?!?!";
    document.body.appendChild(overlay);

    // Delay for 3 seconds before redirecting
    setTimeout(() => {
        // Redirect to the new page
        window.location.href = document.getElementById('redirectLink').href;
    }, 5000); // 3 seconds delay
}); 