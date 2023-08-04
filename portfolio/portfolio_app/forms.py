from django import forms
from django.core.validators import validate_email, MinLengthValidator
from captcha.fields import CaptchaField

message_not_empty = MinLengthValidator(25, "I would love to receive a real message ;) Please.")

class ContactForm(forms.Form):
    email = forms.EmailField(
        label="Your email",
        max_length=25,
        widget=forms.TextInput(
            attrs={
                "placeholder":"Your email address",
                "type": "email",
                "pattern":"^[\S]+@[\S]+\.[A-z]{2,}$",
                "oninvalid":"this.setCustomValidity('Please enter a valid email address.')",
                "onchange":"try{setCustomValidity('')}catch(e){}",
                "oninput":"setCustomValidity('')"
                }
            ),
        validators=[validate_email]
        )
    message = forms.CharField(
        label="Your message",
        min_length=5,
        widget=forms.Textarea(
            attrs={
                "rows":"5",
                "placeholder": "Your message"
                }
            ),
        validators=[message_not_empty]
        )
    captcha = CaptchaField()

