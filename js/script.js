document.addEventListener("DOMContentLoaded", function () {
    const name = "Praneeth Sai Tunuguntla";
    const nameElement = document.getElementById("name");

    let index = 0;
    function typeEffect() {
        if (index < name.length) {
            nameElement.textContent += name.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }

    typeEffect();
});
