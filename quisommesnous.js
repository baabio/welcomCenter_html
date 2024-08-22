document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.animated');

    elements.forEach(element => {
        element.classList.add('fadeIn');
    });
});
