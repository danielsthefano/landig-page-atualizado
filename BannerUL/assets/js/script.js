// Array of image URLs for the banner
const bannerImages = [
    "assets/img/Minecraft-1.jpg",
    "assets/img/6032dddb-85c5-4f30-8475-ccbef3039acd.jpg",
    "assets/img/811461b8d1cacf1f2da791b478dccfe2a55457780364c3d5a95fbfcdd4c3086f (1).avif",
    "assets/img/oi.webp"
  ];
  
  // Index to track the current image
  let currentIndex = 0;
  
  // Function to change the banner image
  function changeBannerImage() {
    const bannerImageElement = document.getElementById('bannerImage');
    currentIndex = (currentIndex + 1) % bannerImages.length;
    bannerImageElement.src = bannerImages[currentIndex];
  }
  
  // Change banner image every 3 seconds
  setInterval(changeBannerImage, 700);
  
  // Function to open the modal
  function openModal(src) {
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');
    modal.style.display = "block";
    modalImage.src = src;
  }
  
  // Function to close the modal
  function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = "none";
  }