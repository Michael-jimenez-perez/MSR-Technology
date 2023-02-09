window.onscroll = function() {
    const header = document.getElementById("header");
    if (window.pageYOffset > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        let links = document.querySelectorAll('.nav-menu a');
        for (let link of links) {
        link.style.color = "blue";
        link.style.transition = "color 0.2s";
        }
    }
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        let links = document.querySelectorAll('.nav-menu a');
        for (let link of links) {
          link.style.color = "blue";
          link.style.transition = "color 0.2s";
        }
      } else {
        let links = document.querySelectorAll('.nav-menu a');
        for (let link of links) {
          link.style.color = "white";
          link.style.transition = "color 0.2s";
        }
      }
      var logo = document.getElementById("logo");
        if (window.pageYOffset > 20) {
        header.classList.add("scrolled");
        logo.src = "/IMAGENES/MSR-removebg-preview.png";
        logo.style.width = "calc(8% - 0.7%)";
        } else {
        header.classList.remove("scrolled");
        logo.src = "/IMAGENES/MSR__1_-removebg-preview.png";
        logo.style.width = "8%";
        }
};

