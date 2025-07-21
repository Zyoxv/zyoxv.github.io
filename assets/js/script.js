document.addEventListener('DOMContentLoaded', () => {
   
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

   
    const registrationForm = document.getElementById('registration-form');
    const registrationMessage = document.getElementById('registration-message');

    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault(); 

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');

    
        if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
            registrationMessage.textContent = 'Harap lengkapi semua kolom!';
            registrationMessage.style.color = '#E74C3C'; 
            registrationMessage.classList.add('visible');
            return;
        }

     
        const name = nameInput.value.trim();
        registrationMessage.textContent = `Selamat ${name}, Anda telah selesai mendaftar!`;
        registrationMessage.style.color = '#FFFFF';
        registrationMessage.classList.add('visible');

      
        nameInput.value = '';
        emailInput.value = '';

      
        
    });
});