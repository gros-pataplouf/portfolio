# Use a suitable base image

FROM 3.11-slim-bullseye AS builder

WORKDIR /app

# Update the package list and install packages
RUN apt-get update && apt-get install -y flite

COPY requirements.txt /app/
RUN pip install -r requirements.txt
RUN pip install gunicorn

RUN mkdir -p /app/staticfiles
COPY . /app/
RUN python manage.py migrate
RUN python manage.py collectstatic --noinput

CMD ["gunicorn", "portfolio_core.wsgi"]
