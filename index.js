// Fetch all ramen data on page load
window.addEventListener('DOMContentLoaded', (event) => {
    fetch('http://localhost:3000/ramens')
        .then(response => response.json())
        .then(data => {
            const menu = document.querySelector('#ramen-menu');
            data.forEach(ramen => {
                const img = document.createElement('img');
                img.src = ramen.image;
                img.addEventListener('click', () => showRamenDetail(ramen));
                menu.appendChild(img);
            });
        });
});

// Show ramen details
function showRamenDetail(ramen) {
    const detailDiv = document.querySelector('#ramen-detail');
    // Update detailDiv with ramen details
}

// Event listener for new ramen form submission
document.querySelector('#new-ramen').addEventListener('submit', (event) => {
    event.preventDefault();
    // Get data from form
    const newRamenData = {
        //...
    };
    fetch('http://localhost:3000/ramens', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRamenData),
    })
    .then(response => response.json())
    .then(data => {
        // Append new ramen to #ramen-menu
    });
});

// Event listener for edit ramen form submission
document.querySelector('#edit-ramen').addEventListener('submit', (event) => {
    event.preventDefault();
    // Get data from form
    const editRamenData = {
        //...
    };
    // Update current ramen detail with editRamenData
});
