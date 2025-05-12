document.addEventListener('DOMContentLoaded', loadUsers);

async function loadUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    const usersDiv = document.getElementById('users');
    usersDiv.innerHTML = '';
    users.forEach(user => {
        const userElement = document.createElement('div');
        userElement.textContent = user.name;
        userElement.addEventListener('click', () => loadAlbums(user.id));
        usersDiv.appendChild(userElement);
    });
}

async function loadAlbums(userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
    const albums = await response.json();
    const albumsDiv = document.getElementById('albums');
    albumsDiv.innerHTML = '';
    albums.forEach(album => {
        const albumElement = document.createElement('div');
        albumElement.textContent = album.title;
        albumElement.addEventListener('click', () => loadPhotos(album.id));
        albumsDiv.appendChild(albumElement);
    });
    albumsDiv.style.display = 'block';
    document.getElementById('users').style.display = 'none';
    document.getElementById('photos').style.display = 'none';
}

async function loadPhotos(albumId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
    const photos = await response.json();
    const photosDiv = document.getElementById('photos');
    photosDiv.innerHTML = '';
    photos.forEach(photo => {
        const photoElement = document.createElement('img');
        photoElement.src = photo.thumbnailUrl;
        photosDiv.appendChild(photoElement);
    });
    photosDiv.style.display = 'grid';
    document.getElementById('albums').style.display = 'none';
    document.getElementById('users').style.display = 'none';
}