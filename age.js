function ageCheck() {
  const birthInput = document.getElementById("birthInput").value;
  let result = "";
  if (!birthInput) {
    result = "<span class='text-danger'>Please enter your birth date.</span>";
  } else {
    const today = new Date();
    const birthDate = new Date(birthInput);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    if (age < 0 || age > 120) {
      result = "<span class='text-danger'>Invalid birth date</span>";
    } else if (age < 18) {
      result = `<span class='text-warning'>You are ${age} years old. Sorry, you must be 18 or older to enter the club!</span>`;
    } else {
      result = `<span class='text-success'>You are ${age} years old. Horray! You can enter the club 🎉 Cheers to a great night ahead!!</span>`;
    }
  }
  document.getElementById("ageOutput").innerHTML = result;
}
