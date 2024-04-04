function toggleForms() {
    var toggleSwitch = document.getElementById("toggleSwitch");
    var requestForm = document.getElementById("requestForm");
    var donateForm = document.getElementById("donateForm");

    if (toggleSwitch.checked) {
        requestForm.style.display = "none";
        donateForm.style.display = "block";
    } else {
        requestForm.style.display = "block";
        donateForm.style.display = "none";
    }
}