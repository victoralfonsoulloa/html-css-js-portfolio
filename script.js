/**
 * Portfolio Website JavaScript
 * Author: Victor Ulloa
 * Description: Handles mobile navigation toggle functionality
 */

/**
 * Toggle the mobile hamburger menu
 * Adds/removes 'open' class to show/hide menu and animate hamburger icon
 */
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    
    // Toggle the 'open' class on both menu and icon for animation
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}