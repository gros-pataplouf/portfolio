from django import template

register = template.Library()

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
    return (clean_args[1] if clean_args[0] == path else clean_args[2])

@register.filter
def parsed_queried_skills(query_dict, skill_id):
    if query_dict.get("skills"):
        return str(skill_id) in query_dict.get("skills")
    return False


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

@register.filter()
def even(parentloop):
    """returns False if parentloop number is odd and True if it is even"""
    return parentloop["counter0"] % 2 == 0