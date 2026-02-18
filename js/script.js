
// Performances HTML Script (YouTube Version with Transitions)
document.addEventListener('DOMContentLoaded', function () {
    // ==========================================================
    //  1. LOADER LOGIC 
    // ==========================================================
    const loader = document.getElementById('loader');

    if (loader) {
        const pageLoadPromise = new Promise(resolve => {
            window.addEventListener('load', resolve);
        });

        // Quick load for demo purposes
        const minTimePromise = new Promise(resolve => {
            setTimeout(resolve, 800);
        });

        // Wait for BOTH promises to finish
        Promise.all([pageLoadPromise, minTimePromise]).then(() => {
            // First, trigger the fade-out animation
            loader.classList.add('hidden');

            // After the animation finishes (750ms), set display to none
            setTimeout(() => {
                loader.style.display = 'none';
            }, 750);
        });
    }
    // Safety Check: Make sure we are on the right page
    const playerFrame = document.getElementById('video-player-frame');
    if (!playerFrame) {
        return; // Exit if the player frame isn't on this page
    }

    // 1. Data for our performances (Keeping one as default for the profile picture/info)
    const performances = [
        { title: 'Nabil Hussain Shah', description: "A passionate Software Developer with an extensive background in building web applications and software solutions, dedicated to creating projects that help the community.", image: 'images/nabil2.jpg', youtubeId: '9LM7h5Ac7WE' },
    ];

    // 2. Find the HTML elements we need
    const performanceTitle = document.getElementById('performance-title');
    const performanceDescription = document.getElementById('performance-description');

    // 3. Initial load (Static content)
    // We only load the first item since the arrows are gone
    if (performances.length > 0) {
        const firstPerformance = performances[0];
        if (performanceTitle) performanceTitle.textContent = firstPerformance.title;
        if (performanceDescription) performanceDescription.textContent = firstPerformance.description;
        if (playerFrame) playerFrame.innerHTML = `<img src="${firstPerformance.image}" class="img-fluid" alt="${firstPerformance.title}">`;
    }
});
