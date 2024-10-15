document.addEventListener('DOMContentLoaded', function() {
    const wikiLinks = document.querySelectorAll('.wiki-link');

    wikiLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            const imageUrl = this.getAttribute('data-image-url');
            this.style.setProperty('--image-url', `url(${imageUrl})`);
        });

        link.addEventListener('click', function() {
            const wikiUrl = this.getAttribute('data-wiki-url');
            window.open(wikiUrl, '_blank');
        });
    });

    const volumeButton = document.getElementById('volume');
    const audio = document.getElementById('audio');

    volumeButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });

});