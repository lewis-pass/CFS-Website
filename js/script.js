const email = document.getElementById("email");
const button = document.querySelector(".message-btn");

if (button) {
  button.addEventListener("click", () => {
    const userEmail = email.value.trim();
    console.log(userEmail);

    try {
      email.classList.add("invalid-input");
      function validateEmail() {
        // Checks the user has entered an email in a simple format of anystring@anystring.anystring whilst also checking for multiple '@' symbols.
        var enteredEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // .test searches for a string/pattern and returns true of false.
        return enteredEmail.test(userEmail);
      }

      console.log(validateEmail(userEmail));

      // Tests if the users email is valid in the function. If it does and is TRUE then 'Email address is valid' is logged
      // however if the email is not valid when passed into the function then an alert pops up letting the user know
      // their email is not valid. This is also logged to the console
      if (validateEmail(userEmail)) {
        console.log("Email address is valid.");
      } else {
        alert("Please enter a valid email address.");
        console.log("Email address is not valid.");
      }
    } catch (error) {
      console.log("Error during email validation:", error);
      alert(
        "An error occured during email validation. Please try again later."
      );
    }
  });
}
