document.addEventListener('DOMContentLoaded', function () {
    // --- Passenger Counter Logic ---
    const decreaseBtn = document.getElementById('decrease-btn');
    const increaseBtn = document.getElementById('increase-btn');
    const passengerCountSpan = document.getElementById('passenger-count');

    let passengerCount = 1;

    // Function to update the displayed count
    function updateCount() {
        passengerCountSpan.textContent = passengerCount;
    }

    // Event listener for the increase button
    increaseBtn.addEventListener('click', function () {
        passengerCount++;
        updateCount();
    });

    // Event listener for the decrease button
    decreaseBtn.addEventListener('click', function () {
        if (passengerCount > 1) { // Prevent count from going below 1
            passengerCount--;
            updateCount();
        }
    });

    // --- Journey Tabs Logic ---
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove 'active' class from all tabs
            tabs.forEach(item => item.classList.remove('active'));
            // Add 'active' class to the clicked tab
            this.classList.add('active');
        });
    });

});
