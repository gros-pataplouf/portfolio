from django import forms


class ContactForm(forms.Form):
    email = forms.EmailField(label="Your email", max_length=250, widget=forms.TextInput(attrs={"placeholder":"Your email address"}))
    message = forms.CharField(label="Your message", widget=forms.Textarea(attrs={"rows":"5", "placeholder": "Your message"}))
