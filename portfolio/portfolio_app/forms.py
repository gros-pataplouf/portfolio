from django import forms
from django.core.validators import validate_email, MinLengthValidator
from captcha.fields import CaptchaField
from django.utils.translation import gettext_lazy as _



message_not_empty = MinLengthValidator(25, _("I would love to receive a real message ;) Please."))

class ContactForm(forms.Form):
    email = forms.EmailField(
        label=_("Your email"),
        max_length=50,
        widget=forms.TextInput(
            attrs={
                "placeholder":_("Your email address"),
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
        label=_("Your message"),
        min_length=5,
        widget=forms.Textarea(
            attrs={
                "rows":"5",
                "placeholder": _("Your message")
                }
            ),
        validators=[message_not_empty]
        )
    captcha = CaptchaField()

