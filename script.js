// var bill = document.getElementById("bill").value;
// var bill = document.getElementsByClassName("bill")[0].value;
// let bill = document.getElementsByName('bill')[0].value

function tipBoxClick() {
    document.getElementById('placeHolder').style.display = "block";
    document.getElementById('custom_input').style.display = "none";
}
function showTextInput() {
    document.getElementById('placeHolder').style.display = "none";
    document.getElementById('custom_input').style.display = "block";
}

let myForm = document.getElementById('myForm');
myForm.addEventListener("submit", function (event) {
    event.preventDefault() //prevents the form from auto submitting

    let bill = document.getElementById("bill").value;

    if (document.getElementById('5').checked) {
        tip = document.getElementById('5').value;
    }
    else if (document.getElementById('10').checked) {
        tip = document.getElementById('10').value;
    }
    else if (document.getElementById('15').checked) {
        tip = document.getElementById('15').value;
    }
    else if (document.getElementById('25').checked) {
        tip = document.getElementById('25').value;
    }
    else if (document.getElementById('50').checked) {
        tip = document.getElementById('50').value;
    }
    else if (document.getElementById('custom').checked) {
        tip = document.getElementById('custom_input').value;
    }

    let people = document.getElementById("people").value;
    

    console.log(bill);
    console.log(tip);
    console.log(people);

    let total_tip = (bill * (tip / 100));
    let tip_amount_person = total_tip/people;
    let total_person = (parseInt(bill) + total_tip) / people;
    
    document.getElementById('tip_amount_person').innerHTML = "$" + tip_amount_person + ".00";
    document.getElementById('total_person').innerHTML = "$" + total_person + ".00";
    
    function resetBill() {
        document.getElementById('tip_amount_person').innerHTML = "$ 0.00";
        document.getElementById('total_person').innerHTML = "$ 0.00";
    }

    console.log(tip_amount_person);
    console.log(total_person);

})

