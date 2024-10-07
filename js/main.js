      const menuBtn = document.querySelector(".menu-btn");
      const navLinks = document.querySelector(".nav-links");
      menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("mobile-menu");
      });

   
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) { 
      navbar.classList.add("scrolled");
    } else { 
      navbar.classList.remove("scrolled");
    }
  });