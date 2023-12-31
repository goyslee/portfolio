// Display the current year in the footer
document.getElementById('year').innerHTML = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', function() {
    const projectTitles = document.querySelectorAll('.project-title');

    projectTitles.forEach(title => {
        title.addEventListener('click', function() {
            // The image should be inside an anchor that's a direct sibling of our title.
            const img = this.nextElementSibling.querySelector('img');
            if (img) {
                img.classList.toggle('hidden');
            }
        });
    });
});

function updateSecondsSince() {
    // The start date (01/04/2016 midnight)
    const startDate = new Date("2016-04-01T00:00:00Z");

    // Current date and time
    const now = new Date();

    // Difference in milliseconds
    const diffMilliseconds = now - startDate;

    // Convert to seconds
    const diffSeconds = Math.floor(diffMilliseconds / 1000);

    // Display in the about section
    const counterElement = document.getElementById("seconds-counter");
    counterElement.innerHTML = `I have been coding for <b>${diffSeconds}</b> seconds.`;
}

// Call the function immediately
updateSecondsSince();

// Update every second
setInterval(updateSecondsSince, 1000);








