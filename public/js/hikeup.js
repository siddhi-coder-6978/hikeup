// Navbar scroll

function scrolltreks() {
  window.scrollTo(0, 1450);
}

function scrollcontact() {
  window.scrollTo(0, 2100);
}

function scrollhome() {
  window.scrollTo(1000, 0);
}

// Get quotation pop box

let data1 = document.getElementById('mail').value;
let data2 = document.getElementById('detail').value;
function submit()
{
  console.log(data1), console.log(data2)
} 

// open and close form

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }console.log(data1)
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }console.log(data2)


// Instant Quote

let vm= 1000
let nvm = 1500
let vmstay = 2500
let nvmstay = 3000
function get()
{
    num =  Number(document.getElementById('n1').value);
    meal = Number(document.getElementById('mealtype').value);
    stay = Number(document.getElementById('stay').value);

    vmp = vm*num
    nvmp = nvm*num
    vcamp = vmstay*num
    nvcamp = nvmstay*num
    
    if(meal==1 && stay==2 )
    {
        document.getElementById('ooo').innerHTML=
        (`The total amount for your day trip with Veg meals will be Rs.${vmp}`);
    }
    else if(meal==2 && stay==2)
    {
        document.getElementById('ooo').innerHTML=
        (`The total amount for your day trip with Non-Veg meals will be Rs.${nvmp}`);
    }
    else if(meal==1 && stay==1 )
    {
        document.getElementById('ooo').innerHTML=
        (`The total amount for your Camping stay with Veg meals will be Rs.${vcamp}`);
    }
    else if(meal==2 && stay==1)
    {
        document.getElementById('ooo').innerHTML=
        (`The total amount for your day trip with Non-Veg meals will be  Rs.${nvcamp}`);
    }
    else
    {
        document.getElementById('ooo').innerHTML=
        (`Kindly choose the correct options.`);
    }    
}