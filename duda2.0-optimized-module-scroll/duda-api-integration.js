(function() {
    // Ensure the widget is initialized when loaded
    dudaApp.defineWidget({
      name: "scrollWidget",
      init: function() {
        const scrollContainer = document.querySelector(".duda-scroll-container");
  
        // Enable horizontal scrolling with mouse wheel
        scrollContainer.addEventListener("wheel", function(event) {
          event.preventDefault();
          scrollContainer.scrollLeft += event.deltaY;
        });
      }
    });
  })();
  