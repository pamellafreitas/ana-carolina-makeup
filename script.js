function toggleImages(sectionId, button, event) {
    event.preventDefault(); // Previne o comportamento padrão do link
  
    const section = document.getElementById(sectionId);
    const images = section.querySelectorAll('.additional-image');
  
    // Alterna entre mostrar e esconder as imagens adicionais
    images.forEach(image => image.classList.toggle('d-none'));
  
    // Muda o texto do botão com base na visibilidade das imagens
    if (button.textContent === 'VER MAIS') {
      button.textContent = 'VER MENOS';
    } else {
      button.textContent = 'VER MAIS';
    }
  }
  
  
  




  

  
  


  
  
  
  
  