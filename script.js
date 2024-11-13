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


  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navItems = document.querySelectorAll('.nav-item');
    const navbarCollapse = document.getElementById("navbarNav");
  
    // Adiciona o evento de clique a cada item de navegação
    navItems.forEach(function(item) {
      item.addEventListener('click', function () {
        // Remove a classe 'active' de todos os itens do menu
        navItems.forEach(function(i) {
          i.classList.remove('active');
        });
        // Adiciona a classe 'active' ao item clicado
        item.classList.add('active');
  
        // Verifica se o menu está aberto e fecha se necessário
        if (navbarCollapse.classList.contains("show")) {
          $('.navbar-collapse').collapse('hide'); // Fecha o menu em dispositivos móveis
        }
      });
    });
  });
  
  
  


  
  




  

  
  


  
  
  
  
  