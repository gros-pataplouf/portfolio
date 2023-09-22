# Use a suitable base image
FROM python:3.10-slim-bookworm AS builder

WORKDIR /app

# Update the package list and install packages
RUN apt-get update && apt-get install -y flite

COPY requirements.txt /app/
RUN pip install -r requirements.txt

RUN mkdir -p /app/staticfiles
COPY . /app/
RUN python manage.py migrate
RUN python manage.py collectstatic --noinput

ENTRYPOINT ["gunicorn", "portfolio_core.wsgi"]
