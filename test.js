document.querySelector('.vibrating-image').addEventListener('mouseover', function() {
    this.style.animation = 'vibrate 0.2s infinite';
});

document.querySelector('.vibrating-image').addEventListener('mouseout', function() {
    this.style.animation = 'none';
});

document.querySelector('.vibrating-text').addEventListener('mouseover', function() {
    this.style.animation = 'vibrateText 0.2s infinite';
});

document.querySelector('.vibrating-text').addEventListener('mouseout', function() {
    this.style.animation = 'none';
});
