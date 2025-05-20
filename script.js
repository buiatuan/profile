// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Animation cho phần header khi trang được tải
    const header = document.querySelector('header');
    header.style.opacity = '0';
    setTimeout(() => {
        header.style.transition = 'opacity 1s ease';
        header.style.opacity = '1';
    }, 100);

    // Animation cho các phần nội dung khi scroll
    const sections = document.querySelectorAll('section');
    
    const fadeInOnScroll = function() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    };

    // Thiết lập ban đầu cho các phần
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Gọi fadeInOnScroll khi trang được tải và khi scroll
    fadeInOnScroll();
    window.addEventListener('scroll', fadeInOnScroll);
});