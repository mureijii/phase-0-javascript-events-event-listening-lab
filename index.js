function addingEventListener() {
    const input = document.getElementById('button'); // Get the button element

    function clickAlert() {
        alert('I was clicked!'); // Function to display alert
    }

    input.addEventListener('click', clickAlert); // Attach event listener
}

// Call the function to bind the event listener
addingEventListener();
