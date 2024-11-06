document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".content__button_go");
  
    buttons.forEach(button => {
      button.addEventListener("click", function() {
        const step = parseInt(button.getAttribute("data-step"));
        const currentSection = document.querySelector(".content__s_" + step);
        const nextSection = document.querySelector(".content__s_" + (step + 1));
  
        if (currentSection) {
          currentSection.style.transition = "all 0.5s";
          currentSection.style.height = "0";
          currentSection.style.overflow = "hidden";
          
          currentSection.addEventListener("transitionend", function handleTransitionEnd() {
            currentSection.classList.remove("content__s_active");
            currentSection.removeAttribute("style");
            currentSection.removeEventListener("transitionend", handleTransitionEnd);
          });
        }
  
        if (nextSection) {
          nextSection.style.display = "block";
          nextSection.style.height = "auto";
          nextSection.style.transition = "all 0.5s";
  
          requestAnimationFrame(() => {
            nextSection.style.height = nextSection.scrollHeight + "px";
          });
  
          nextSection.addEventListener("transitionend", function handleTransitionEnd() {
            nextSection.classList.add("content__s_active");
            nextSection.removeAttribute("style");
            nextSection.removeEventListener("transitionend", handleTransitionEnd);
          });
        }
      });
    });
  });
  