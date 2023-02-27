function toggleMenu() {
    document.getElementById('burger').classList.toggle('burger_toggle')
    document.getElementById('nav_links').classList.toggle('nav_active')
}

document.getElementById('burger').addEventListener('click', toggleMenu)