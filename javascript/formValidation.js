// formValidation.js

function validateRequestForm() {

    var patientName = document.getElementById("patientName").value;
    var hospital = document.getElementById("hospital").value;
    var bloodGroup = document.getElementById("bloodGroup").value;
    var bloodRh = document.getElementById("bloodRh").value;
    var urgency = document.getElementById("urgency").value;


    if (patientName === "") {
        alert("Patient's name should be entered.");
        return false;
    }

    if (hospital === "") {
        alert("Enter hospital name.");
        return false;
    }

    if (bloodGroup === "" || bloodRh === "") {
        alert("Please select blood group and RH.");
        return false;
    }

    if (urgency === "") {
        alert("Update the urgency status.");
        return false;
    }
    return true;

}



function validateDonorForm() {
    var donarName = document.getElementById("donarName").value;
    var donarBloodGroup = document.getElementById("donarBloodGroup").value;
    var donarBloodRh = document.getElementById("donarBloodRh").value;
    var donationDate = document.getElementById("donationDate").value;
    var age = document.getElementById("age").value;
    var idCard = document.getElementById("idCard").value;
    var genderRadios = document.getElementsByName("genderR");


    if (donarName == "") {
        alert("Donor's name should be entered.");
        return false;
    }

    if (age == "") {
        alert("Enter donar's age.");
        return false;
    }
    else if (age <= 18) {
        alert("You are not eligible to donate blood");
        return false;
    }

    if (donarBloodGroup === "" || donarBloodRh === "") {
        alert("Please select donor's blood group and RH.");
        return false;
    }

    if (donationDate === "") {
        alert("Please select donation date.");
        return false;
    }




    var genderSelected = false;
    for (var i = 0; i < genderRadios.length; i++) {
        if (genderRadios[i].checked) {
            genderSelected = true;
            break;
        }
    }

    if (!genderSelected) {
        alert("Please select donor's gender.");
        return false;
    }


    if(idCard.isDefaultNamespace.length===0){
        alert("Please input identity image file.");
        return false;
    }

    return true;
}
