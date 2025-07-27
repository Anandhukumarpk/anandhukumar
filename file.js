const observer = new IntersectionObserver((entries) => {
    entries.forEach((entering) => {
        if (entering.isIntersecting) {
            entering.target.classList.add('show')
        }else{
            entering.target.classList.remove('show')
        }
    })
})


const leftside = document.querySelectorAll('.left')
leftside.forEach((el) => observer.observe(el))



function sendmail() {
    let name = document.getElementById("name").value.trim();
    let number = document.getElementById("number").value.trim();
    let email = document.getElementById("email").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || number === "" || email === "") {
        alert("Please fill out all fields before submitting.");
        return; // stop execution
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    console.log(name);
    console.log(number);
    console.log(email);

    // Show success alert
    document.getElementById("successAlert").style.display = "flex";

    // Clear form
    document.querySelector("form").reset();

    // Hide alert after 4 seconds
    setTimeout(() => {
        document.getElementById("successAlert").style.display = "none";
    }, 4000);

    // Send email
    Email.send({
        Host: "s1.maildns.net",
        Username: "username",
        Password: "password",
        To: 'them@website.com',
        From: "you@isp.com",
        Subject: "This is the subject",
        Body: `
            <strong>Name:</strong> ${name} <br>
            <strong>Number:</strong> ${number} <br>
            <strong>Email:</strong> ${email}
        `
    }).then(
        message => {
            console.log("Email sent:", message);
            
        }
    );
}



