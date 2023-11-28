document.addEventListener('scroll', function () {
    var header = document.getElementById('header');
    var logo = document.getElementById('logo');
    
    if (window.scrollY > 0) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var scrollSections = document.querySelectorAll(".scroll-section");

    scrollSections.forEach(function(section) {
        section.addEventListener("click", function(e) {
            e.preventDefault();
            var targetId = this.getAttribute("href").substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                if (targetId === "projects") {
                    // Scroll to the top of the page
                    document.body.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                } else {
                    // Scroll to the target section
                    targetElement.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });
});

