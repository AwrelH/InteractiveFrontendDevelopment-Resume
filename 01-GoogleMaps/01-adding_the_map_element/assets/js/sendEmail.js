
let message = `
<div id="message>
    <h2>Your message has successfully been sent to XXXX, we will get back to you as soon as possible.</h2>
</div>`


function sendEmail(contactForm) {
    let templateParams = {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    }
    emailjs.send("cv_service", "cv_template", templateParams, "FhOOQCjv2MlhNPMeg")
    .then(
        function(response) {
            console.log("SUCCESS", response);
            document.querySelector('.center-form').remove()
           
                    },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}