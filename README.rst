====================
Django Portfolio-App
====================

Django Portfolio-App is a multilingual app for career changers wishing to highlight skills and projects rather than a linear career.
Thanks for checking it out.


Running the app locally and customizing it. 
-------------------------------------------

- Clone the repo on your local machine::
:code:`git clone git@github.com:gros-pataplouf/portfolio.git`

- In order to run Tailwind CSS without Node.js and npm, follow the instructions in the documentation: https://tailwindcss.com/blog/standalone-cli

- Install Flite, the text to speech engine required for speech synthesis in the captcha. https://github.com/festvox/flite 
P.ex. on Linux Ubuntu::

:code:`sudo apt-get update && apt-get install -y flite`

- Create a .env file following sample.env inside the projects root directory.

- Create a virtual environment
Make sure you have Python 3.11, pip, and pipenv installed  https://pipenv.pypa.io/en/latest/installation.
The install the required dependencies::

:code:`pipenv install`

- db.sqlite can be used as a starter or deleted. If the latter, the initial database migrations need to be created with the usual commands

Then run the local development server::

:code:`python manage.py runserver`

- Open another terminal and watch for Tailwind CSS changes (this is assuming you have placed the tailwindcss biniary in the bin folder in your project root::

:code:`./bin/tailwindcss -i ./portfolio_app/static/portfolio_app/input.css -o ./portfolio_app/static/portfolio_app/output.css --watch`



Run in a Docker-Container 
-------------------------

From the root folder of the project::

:code:`docker build -t portfolio -f dev.Dockerfile .`
:code:`docker run -it -p 8000:8000 portfolio`