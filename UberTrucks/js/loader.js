
window.onload = () => {
    let body = document.getElementById('login')
    body.style.display = 'none'
    let loading = document.getElementById('precarga')
    setTimeout(() => {
    loading.style.display = 'none'
    body.style.display = ''
    }, 3400);
}

