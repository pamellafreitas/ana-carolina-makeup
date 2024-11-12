function toggleImages(sectionId, button, event) {
    event.preventDefault(); 
  
    const section = document.getElementById(sectionId);
    const images = section.querySelectorAll('.additional-image');
  
    images.forEach(image => image.classList.toggle('d-none'));
  
  
    if (button.textContent === 'VER MAIS') {
      button.textContent = 'VER MENOS';
    } else {
      button.textContent = 'VER MAIS';
    }
  }
  
  
  




  

  
  


  
  
  
  
  