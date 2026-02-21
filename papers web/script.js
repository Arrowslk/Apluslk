window.addEventListener("load",function() {
    this.document.body.classList.add("page-loaded");
    const fadeElements= this.document.querySelectorAll('.fade-up');
     const observer= new IntersectionObserver((entries) => {
        if(FileSystemEntry.isIntersecting){
            FileSystemEntry.target.classList.add('visible');           
        }
     });
    }, {threshold: 0.1});
    fadeElements.array.forEach(element =>observer.observe(el));
