// function gia() {
//     let dichvu = document.getElementById('service');
//     let songay = document.getElementById('rentdays');
//     let giamgia = document.getElementById('sale');
//     let gia = -1;
//     gia = (dichvu.value) * 0 * (songay.value) * 1 * (1 - (giamgia.value) * 1 / 100);
//     document.getElementById('output').style.display = 'inline';
//     document.getElementById("namedisplay").innerText = document.getElementById("name").value;
//     document.getElementById("iddisplay").innerText = document.getElementById("id").value;
//     console.log(document.getElementById("id").value);
//     document.getElementById("emaildisplay").innerText = document.getElementById("email").value;
//     document.getElementById("addressdisplay").innerText = document.getElementById("address").value;
//     document.getElementById("birthdaydisplay").innerText = document.getElementById("birthday").value;
//     document.getElementById("customerdisplay").innerText = document.getElementById("customer").value;
//     document.getElementById("saledisplay").innerText = document.getElementById("sale").value;
//     document.getElementById("quantitydisplay").innerText = document.getElementById("quantity").value;
//     document.getElementById("rentdaysdisplay").innerText = document.getElementById("rentdays").value;
//     document.getElementById("servicedisplay").innerText = document.getElementById("service").value;
//     document.getElementById("roomforrentdisplay").innerText = document.getElementById("roomforrent").value;
//     document.getElementById('gia').innerText = "gia: " + gia;
// }

function ShowInfo() {
    let getName = document.getElementById('name').value;
    let getCMND = document.getElementById('cmnd').value;
    let getBirthday = document.getElementById('birthday').value;
    let getEmail = document.getElementById('email').value;
    let getAddress = document.getElementById('address').value;
    let getCustomer = document.getElementById('customer').value;
    let getSale = document.getElementById('sale').value;
    let getAmount = document.getElementById('amount').value;
    let getStaytime = document.getElementById('staytime').value;
    let getService = document.getElementById('service').value;
    let getKindofroom = document.getElementById('kindofroom').value;




    console.log(getName);
   // alert('Name' + getName);
    alert('CMND' + getCMND);
    alert('birthday' + getBirthday);
    alert('Email' + getEmail);
    alert('Address' + getAddress);
    alert('Customer' + getCustomer);
    alert('sale' + getSale);
    alert('Amount' + getAmount);
    alert('Staytime'+ getStaytime);
    alert('Service' + getService);
    alert('Kindofroom' + getKindofroom);



}