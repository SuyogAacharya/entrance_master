// Function to open the mini-window for the YouTube video
function openMiniWindow(videoUrl) {
    const miniWindow = window.open(videoUrl, 'MiniWindow', 'width=800,height=600');
}

// Add event listeners to gallery items
document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(function (item) {
        const videoUrl = item.getAttribute('data-video-url');
        item.addEventListener('click', function (event) {
            event.preventDefault();
            openMiniWindow(videoUrl);
        });
    });
});
