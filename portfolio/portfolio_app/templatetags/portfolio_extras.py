from django import template

register = template.Library()

@register.filter()
def star_rating(value, str):
    """takes in a rating as int and returns a int x stars"""
    return value * str

@register.filter()
def anchor_color(path, args):
    """checks whether we are on the route matching the link and adjusts styles
    first arg is href of the anchor
    second arg is style if we are on the matching route
    third arg is style if anchor href does not match current path"""
    args_lst = args.split(",")
    clean_args = [arg.strip(" ") for arg in args_lst]
    return (clean_args[1] if path == clean_args[0] else clean_args[2])