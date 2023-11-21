from portfolio_core.settings import PHONE

def phone_processor(request):
    return {"phone": PHONE}