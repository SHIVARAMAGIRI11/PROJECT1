document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: "smooth"
          });
        }
      });
    });
  
    // Form validation
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = form.querySelector("input[type='text']").value.trim();
      const email = form.querySelector("input[type='email']").value.trim();
      const message = form.querySelector("textarea").value.trim();
  
      if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
      } else {
        alert("Thank you for reaching out! I'll get back to you soon.");
        form.reset();
      }
    });
  
   