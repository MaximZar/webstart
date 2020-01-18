var modal = document.querySelector("#modal");
var button = document.querySelector("#btn");
var close = document.querySelector("#close");

function closeModal() {
    modal.classList.remove("modal_active");
}

button.addEventListener('click', function(){
    modal.classList.add("modal_active");
    setTimeout(closeModal, 5000);
});

close.addEventListener('click', function(){
    closeModal();
});