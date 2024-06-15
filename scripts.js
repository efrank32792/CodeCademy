document.addEventListener('DOMContentLoaded', function () {
    const lightboxImages = document.querySelectorAll('.lightbox');
    const lightboxContainer = document.createElement('div');
    lightboxContainer.id = 'lightbox-container';
    lightboxContainer.style.display = 'none';
    lightboxContainer.style.position = 'fixed';
    lightboxContainer.style.top = '0';
    lightboxContainer.style.left = '0';
    lightboxContainer.style.width = '100%';
    lightboxContainer.style.height = '100%';
    lightboxContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    lightboxContainer.style.justifyContent = 'center';
    lightboxContainer.style.alignItems = 'center';

    const lightboxImage = document.createElement('img');
    lightboxImage.style.maxWidth = '90%';
    lightboxImage.style.maxHeight = '90%';

    lightboxContainer.appendChild(lightboxImage);
    document.body.appendChild(lightboxContainer);

    lightboxImages.forEach(image => {
        image.addEventListener('click', () => {
            lightboxImage.src = image.src;
            lightboxContainer.style.display = 'flex';
        });
    });

    lightboxContainer.addEventListener('click', () => {
        lightboxContainer.style.display = 'none';
    });
});
