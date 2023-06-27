from django import forms


class ContactForm(forms.Form):
    email = forms.EmailField(label="Your email", max_length=100)
    message = forms.CharField(label="Your message", max_length=500)
