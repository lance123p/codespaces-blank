(function() {
  dudaApp.defineWidget({
    name: "scrollWidget",
    init: function() {
      const scrollContainer = document.querySelector(".duda-scroll-container");
      const items = document.querySelectorAll(".duda-scroll-item");
      const itemCount = items.length;
      const screenWidth = window.innerWidth;

      function updateScroll() {
        if ((screenWidth >= 1024 && itemCount >= 5) ||  // Desktop: Scroll if 5+
            (screenWidth >= 768 && screenWidth < 1024 && itemCount >= 5) || // Tablet: Scroll if 5+
            (screenWidth < 768 && itemCount >= 3)) { // Mobile: Scroll if 3+
          scrollContainer.classList.add("duda-scroll-active");
        } else {
          scrollContainer.classList.remove("duda-scroll-active");
        }
      }

      updateScroll();
      window.addEventListener("resize", updateScroll);
    }
  });
})();
