const toggleLink = document.getElementById('toggle-link');
        const formTitle = document.getElementById('form-title');
        const toggleText = document.getElementById('toggle-text');
        const nameField = document.getElementById('name-field');
        const btn = document.getElementById('btn');

        let isSignUp = false;

        toggleLink.addEventListener('click', function () {
            isSignUp = !isSignUp;
            formTitle.textContent = isSignUp ? 'Sign Up' : 'Sign In';
            toggleText.textContent = isSignUp ? 'Already have an account?' : "Don't have an account?";
            toggleLink.textContent = isSignUp ? 'Sign In' : 'Sign Up';
            nameField.classList.toggle('hidden');
        });

        btn,addEventListener('click',function(){
                window.location.href = "/index.html"; 
           
        })