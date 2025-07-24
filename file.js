const observer = new IntersectionObserver((entries) => {
    entries.forEach((entering) => {
        if (entering.isIntersecting) {
            entering.target.classList.add('show')
        }else{
            entering.target.classList.remove('show')
        }
    })
})


const leftside = document.querySelectorAll('.left')
leftside.forEach((el) => observer.observe(el))