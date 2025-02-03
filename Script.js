// document.getElementById('home-link').addEventListener('click', function() {
//     document.getElementById('home-section').style.display = 'block';
//     document.getElementById('about-section').style.display = 'none';
//     document.getElementById('contact-section').style.display = 'none';
// });

// document.getElementById('about-link').addEventListener('click', function() {
//     document.getElementById('home-section').style.display = 'none';
//     document.getElementById('about-section').style.display = 'block';
//     document.getElementById('contact-section').style.display = 'none';
// });

// document.getElementById('contact-link').addEventListener('click', function() {
//     document.getElementById('home-section').style.display = 'none';
//     document.getElementById('about-section').style.display = 'none';
//     document.getElementById('contact-section').style.display = 'block';
// });

// function showSection(sectionId) {
//     const sections = document.querySelectorAll('main > div, main > section');
//     const navLinks = document.querySelectorAll('nav a');

//     sections.forEach(section => {
//         section.style.display = section.id === `${sectionId}-section` ? 'block' : 'none';
//     });

//     navLinks.forEach(link => {
//         link.classList.toggle('active', link.getAttribute('id').includes(sectionId));
//     });

//     // Hide right sidebar on Personal Details page
//     if (sectionId === 'about') {
//         document.querySelector('.right-sidebar').style.display = 'none';
//     } else {
//         document.querySelector('.right-sidebar').style.display = 'flex';
//     }
// }

// document.addEventListener('DOMContentLoaded', () => {
//     showSection('home'); // Show "Our Team" section by default
// });
function showSection(section) {
    var sections = document.querySelectorAll("main > div");
    sections.forEach(function(sec) {
        sec.style.display = "none"; // Hide all sections by default
    });

    // Show the section clicked by the user
    document.getElementById(section + "-section").style.display = "block";

    // Reset the class names for the body
    document.body.classList.remove('about-page', 'contact-page');

    // Handle logic based on the section clicked
    if (section === 'about') {
        document.body.classList.add('about-page');
        
        // Ensure the "Personal Details" sidebar is visible on the right in "About" page
        document.querySelector('.sidebars').classList.remove('left-side');
        document.querySelector('.sidebars').classList.add('right-side');
        
        document.querySelector('.right-sidebar').style.display = 'none';
        document.querySelector('.right-sidebars').style.display = 'none';
        document.querySelector('.leftsidebar-content').style.display = 'block';
        document.querySelector('#contact-aside').style.display = 'block';
    } 
    else if (section === 'contact') {
        document.body.classList.add('contact-page');
        
        // Ensure the "Personal Details" sidebar is hidden on the left in "Contact" page
        document.querySelector('.sidebars').classList.remove('right-side');
        document.querySelector('.sidebars').classList.add('left-side');
        
        // Hide the Personal Details content when viewing Contact Us
        document.querySelector('.leftsidebar-content').style.display = 'none'; 
        document.querySelector('#contact-aside').style.display = 'none';

        // Show the Contact Us content properly
        document.querySelector('.right-sidebar').style.display = 'none';
        document.querySelector('.right-sidebars').style.display = 'block';
    } 
    else {
        // Handle case when 'home' or any other section is clicked
        document.querySelector('.right-sidebar').style.display = 'flex';
        document.querySelector('.right-sidebars').style.display = 'block';
        document.querySelector('.leftsidebar-content').style.display = 'none';
        document.querySelector('#contact-aside').style.display = 'block';
    }
}