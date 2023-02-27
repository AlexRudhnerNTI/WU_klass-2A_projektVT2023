function toggleMeny() {
    document.getElementById('links').classList.toggle('nav-active')
    document.getElementById('burger').classList.toggle('crossed_line')
}

document.getElementById('burger').addEventListener('click', toggleMeny)