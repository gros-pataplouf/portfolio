export const optimizeContactForm = () => {const contactSubmitButton = document.querySelector("#contactSubmitButton");
const captchaDiv = document.getElementById("div_id_captcha");
const emailDiv = document.getElementById("div_id_email");
const emailInput = document.querySelector("#div_id_email>input")
const messageDiv = document.getElementById("div_id_message");
const messageInput = document.querySelector("#div_id_message>textarea")
const captchaError = document.getElementById("error_1_id_captcha");
const messageError = document.getElementById("error_1_id_message");
const emailError = document.getElementById("error_1_id_email");

if (!messageError && !emailError && captchaError) {
    captchaDiv.setAttribute("style", "display: block");
    emailDiv.setAttribute("style", "display: none");
    messageDiv.setAttribute("style", "display: none");
}



contactSubmitButton.addEventListener("click", () => {
  
    if (emailInput.validity.valid && messageInput.validity.valid)
    {
    captchaDiv.setAttribute("style", "display: block");
    emailDiv.setAttribute("style", "display: none");
    messageDiv.setAttribute("style", "display: none");
}
})}