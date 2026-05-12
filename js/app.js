function filterTeam(category) {
    const cards = document.querySelectorAll('.card');
    const buttons = document.querySelectorAll('.team-menu button');

    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    cards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
        } else {
            card.style.display =
                card.dataset.category === category ? 'block' : 'none';
        }
    });
}

const users = document.querySelectorAll('.user');
const stories = document.querySelectorAll('.story');
const videoImage = document.getElementById('videoImage');

// видео карталары
const videos = {
    1: "./images/video1.jpg",
    2: "./images/video2.jpg",
    3: "./images/video3.jpg"
};

users.forEach(user => {
    user.addEventListener('click', () => {
        const id = user.dataset.id;

        // active user
        users.forEach(u => u.classList.remove('active'));
        user.classList.add('active');

        // stories switch
        stories.forEach(story => {
            story.classList.remove('active');
            if (story.dataset.id === id) {
                story.classList.add('active');
            }
        });

        // video change
        videoImage.src = videos[id];
    });
});

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});
const sections = document.querySelectorAll(".team__block");
const navLinks = document.querySelectorAll(".team__link");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop - 200 &&
            window.scrollY < sectionTop + sectionHeight - 200
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

});

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

        } else {

            entry.target.classList.remove("active");

        }

    });

}, {
    threshold: 0.15
});

reveals.forEach((item) => {
    observer.observe(item);
});