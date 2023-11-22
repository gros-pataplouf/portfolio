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
    """this is to determine if the id of a skill is in the query string, to adapt styling dynamically"""
    if query_dict.get("skills"):
        return str(skill_id) in query_dict.get("skills").split(",")
    return False
