from django import template

register = template.Library()

@register.filter()
def star_rating(value, str):
    """takes in a rating as int and returns a int x stars"""
    return value * str

@register.filter()
def anchor_color(path, args):
    """checks whether we are on the route matching the link and adjusts styles
    path is the current path, eg /de/skills/, it must be cleaned to get rid of language route
    first arg is href of the anchor eg. /bio/ or /skills/
    second arg is style if we are on the matching route
    third arg is style if anchor href does not match current path"""
    path = path[3:] #to do: not so elegant :()
    args_lst = args.split(",")
    clean_args = [arg.strip(" ") for arg in args_lst]
    print(clean_args, path)
    return (clean_args[1] if clean_args[0] == path else clean_args[2])

@register.filter()
def parse_items(args):
    """parses a string containing items separated by # into a list"""
    arg_list = args.split("#")
    clean_args = [arg.strip(" ") for arg in arg_list]
    return (clean_args)


@register.filter()
def addstring(arg1, arg2):
    """concatenate arg1 & arg2"""
    return str(arg1) + str(arg2)