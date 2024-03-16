const toggles = document.querySelectorAll('.faq-toggle')
const toggles_title = document.querySelectorAll('.faq-title')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})

toggles_title.forEach(toggle_title => {
    toggle_title.addEventListener('click', () => {
        toggle_title.parentNode.classList.toggle('active')
    })
})