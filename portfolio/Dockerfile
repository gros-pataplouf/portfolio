# Use a suitable base image
FROM --platform=$BUILDPLATFORM python:3.10-slim-bookworm AS builder

WORKDIR /app

# Update the package list and install packages
RUN apt-get update && apt-get install -y flite

COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt


COPY . /app/

RUN python manage.py migrate
RUN python manage.py collectstatic --noinput

EXPOSE 8000
CMD ["gunicorn core.wsgi"]