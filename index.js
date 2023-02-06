// let name = document.getElementById("fullname").value;
// console.log(name);
// let email = document.getElementById("email").value;
// console.log(email);
// let clg_name = document.getElementById("clg_name").value;
// console.log(clg_name);

const showdata = () => {
    let value =  confirm("Are you sure to save that data ?");
    value && data();
}
const data = ()=>{
    let name = document.getElementById("fullname").value;
    console.log(name);
    let email = document.getElementById("email").value;
    console.log(email);
    let clg_name = document.getElementById("clg_name").value;
    console.log(clg_name);
    alert("YOUR DATA IS SAVED IN OUR DATABASE !"+"\nYour name is "+name
    +"\nYour email is "+email +"\nYour college name is "+clg_name);
}

const resetdata = ()=>{
   alert("Are you sure to reset the data ?");
}