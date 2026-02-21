const projects = [
    {
        title: "TechDash WebApp",
        videoSrc: "images/techdash.mp4",
        description: "TechDash is a comprehensive dashboard tailored for technicians to manage client repairs and communicate effectively. It features real-time chat, repair status tracking, dynamic form validation, and an AI-assisted personalized diagnosis tool.",
        scope: {
            a1: "The application was designed as an internal management system for a tech repair shop needing to streamline ticket communication and improve client updates.",
            a2: "The main goal was to integrate real-time 1-on-1 communication with repair tracking securely. A key challenge was designing an intuitive and responsive UI that handled complex form states."
        },
        role: {
            a1: "I worked as a Full-Stack Web Developer. My responsibilities included designing the database schema, setting up routing, implementing AI API integrations, and styling the front-end.",
            a2: "I chose Flask for a lightweight backend, combined with Bootstrap for rapid and consistent front-end layout styling. User state persistence was managed via session variables to keep chat secure."
        },
        process: {
            a1: "The project was executed in phases: structuring HTML templates with Jinja loops, establishing the SQLite database logic, and refining the JavaScript endpoints for asynchronous updates.",
            a2: "I encountered unexpected bugs when validating the uploaded diagnostic images. I solved this by adding secure mimetype checks and refactoring the backend error catching mechanism to provide feedback."
        },
        outcome: {
            a1: "Yes, the project successfully fulfilled all academic rubric requirements and was praised for its cohesive user experience and thorough backend validation.",
            a2: "Measurable results included zero broken links during testing, successfully resolving all JavaScript and CSS linter errors, and achieving a 100% stable integration of the AI diagnosis tool."
        }
    },
    {
        title: "Geulja Snap App",
        videoSrc: "images/geuljasnap.mp4",
        description: "Geulja Snap is an interactive vocabulary learning application disguised as an Android app. It aims to help learners rapidly memorize Korean alphabet characters using spaced repetition and audio feedback.",
        scope: {
            a1: "Created for language learners who want an engaging mobile environment to practice Korean reading and pronunciation on the go.",
            a2: "The primary goal was cross-platform capability via Capacitor. The main challenge was integrating a reliable Text-to-Speech (TTS) engine seamlessly without native iOS/Android bloat."
        },
        role: {
            a1: "I served as the Lead App Developer, migrating an existing web-based HTML/CSS project into a fully functioning Capacitor app architecture.",
            a2: "I experimented with several native TTS community plugins before engineering a web-based 'Google Hack' API solution that proved to be more lightweight and responsive for flashcards."
        },
        process: {
            a1: "I structured the project using Node.js and npm to pull in Capacitor core files, organized the web assets into a 'www' directory, and synced the project with Android Studio.",
            a2: "Configuring the Android manifest for clear traffic behavior was a sudden issue since the TTS API utilized HTTP. I resolved it by permitting HTTP traffic in the capacitor settings."
        },
        outcome: {
            a1: "The application was highly successful. The shift to a Capacitor shell worked flawlessly, and the app compiled to an Android APK without critical build errors.",
            a2: "We successfully reduced audio latency to under 300ms for flashcard flipping by optimizing the TTS request lifecycle."
        }
    },
    {
        title: "SoundCard Website",
        videoSrc: "images/SoundCard.mp4",
        description: "A comprehensive, responsive club website dedicated to NYP's SoundCard Club. It serves as a central hub to showcase past performances, advertise upcoming workshops, and streamline new member registrations.",
        scope: {
            a1: "The website was created for the NYP SoundCard Club committee to improve their digital presence and provide an accessible platform for prospective members.",
            a2: "The main goal was to design an intuitive, modern user interface that highlighted the club's vibrant culture. A key challenge was organizing various events (Workshops, Showcases) into a clean format."
        },
        role: {
            a1: "As the Front-End Web Developer and UI Designer, I was responsible for wireframing the layouts, selecting the color palettes, and coding the interactive front-end elements.",
            a2: "I utilized Bootstrap 5 to ensure full mobile responsiveness and implemented custom CSS for thematic styling, such as the vinyl record loader and dynamic hover effects."
        },
        process: {
            a1: "The work process involved gathering requirements from the club, creating high-fidelity mockups, and iteratively developing the HTML/CSS templates across multiple pages (About Us, FAQ, Join Us).",
            a2: "I faced challenges with ensuring the complex multi-level navbar remained accessible on mobile devices, which I solved by carefully restructuring the Bootstrap collapse behaviors."
        },
        outcome: {
            a1: "The final project was highly successful, delivering a polished, professional website that perfectly aligned with the club's artistic identity.",
            a2: "The measurable outcome was a cohesive, multi-page web experience with zero dead links, optimized image assets, and fully functional interactive elements ready for deployment."
        }
    }
];

let currentIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    // Hide loader
    setTimeout(() => {
        const loader = document.getElementById("loader");
        if (loader) {
            loader.style.opacity = "0";
            setTimeout(() => loader.style.display = "none", 500);
        }
    }, 500);

    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    if (prevBtn) prevBtn.addEventListener("click", () => changeProject(-1));
    if (nextBtn) nextBtn.addEventListener("click", () => changeProject(1));

    // Load initial project
    updateProjectUI(0);
});

function changeProject(direction) {
    currentIndex += direction;
    // Loop around
    if (currentIndex < 0) {
        currentIndex = projects.length - 1;
    } else if (currentIndex >= projects.length) {
        currentIndex = 0;
    }
    updateProjectUI(currentIndex);
}

function updateProjectUI(index) {
    const project = projects[index];

    // Update Title & Description
    document.getElementById("project-title").textContent = project.title;
    document.getElementById("project-description").textContent = project.description;

    // Update Video
    const videoElement = document.getElementById("project-video");
    const videoContainer = document.getElementById("video-container");

    // Dynamic Video Container Sizing (Portrait vs Landscape)
    if (project.title === "Geulja Snap App") {
        videoContainer.classList.remove("ratio-16x9");
        videoContainer.classList.add("ratio");
        videoContainer.style.aspectRatio = "9/16";
        videoContainer.style.maxWidth = "350px";
        videoElement.style.objectFit = "contain";
    } else {
        videoContainer.classList.add("ratio-16x9");
        videoContainer.style.aspectRatio = "";
        videoContainer.style.maxWidth = "100%";
        videoElement.style.objectFit = "cover";
    }

    if (project.videoSrc) {
        videoElement.src = project.videoSrc;
        videoElement.style.display = "block";
    } else {
        // Placeholder handling if video is missing
        videoElement.src = "";
        videoElement.style.display = "none";
    }

    // Update Scope
    document.getElementById("scope-a1").textContent = project.scope.a1;
    document.getElementById("scope-a2").textContent = project.scope.a2;

    // Update Role
    document.getElementById("role-a1").textContent = project.role.a1;
    document.getElementById("role-a2").textContent = project.role.a2;

    // Update Process
    document.getElementById("process-a1").textContent = project.process.a1;
    document.getElementById("process-a2").textContent = project.process.a2;

    // Update Outcome
    document.getElementById("outcome-a1").textContent = project.outcome.a1;
    document.getElementById("outcome-a2").textContent = project.outcome.a2;
}
