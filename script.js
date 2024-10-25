document.getElementById("showcart").addEventListener("click", function () {
  cart.style.display = "block";
  showcart.style.display = "none";
  showcart2.style.display = "block";
});

document.getElementById("showcart2").addEventListener("click", function () {
  cart.style.display = "none";
  showcart2.style.display = "none";
  showcart.style.display = "block";
});



// Add event listeners to buttons
document.getElementById('homeButton').addEventListener('click', function() {
  document.getElementById("homeSection").style.display = 'none';

});

document.getElementById('shopButton').addEventListener('click', function() {
});


  function changeContent(page, element) {
   
    // Remove 'active' class from all nav-links
    const allLinks = document.querySelectorAll('.navbar-nav .nav-link');
    allLinks.forEach(link => {
        link.classList.remove('active');
        // Reset to default style
        link.style.backgroundColor = 'transparent';
        link.style.color = 'white';

    });

    // Add 'active' class to the clicked nav-link
    element.classList.add('active');
    // Change its background and text color
    // element.style.backgroundColor = 'yellow';
    element.style.color = 'black';

}

window.onload = function () {
  const defaultLink = document.querySelector(".navbar-nav .nav-link"); // First nav-link (Home)
  defaultLink.classList.add("active"); // Add active class
  defaultLink.style.backgroundColor = "yellow"; // Set background color
  defaultLink.style.color = "black"; // Set text color
  changeContent("Home", defaultLink);
};
