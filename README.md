# Django with React Starter using Vite


## Name Change

Change the name of django-react-starter and djangoreactstarter to the name of your new git repo and project.
Make sure to keep with the naming convention.

## Installation

pip install pipenv
pipenv install

python manage.py runserver

cd frontend
npm install
npm run build

cd ..
python manage.py collectstatic

cd frontend
npm run dev

## Setup ENV

Get keys from someone else

ENV=developement


## Setup Database

Download postgres

createdb source

psql -U postgres
CREATE USER postgres with PASSWORD 'postgres';

## Style Guide
New model, app. python manage.py startapp myappname


## Aliases
alias nrd="cd C:/Users/MY_USERNAME/Documents/PROJECT_NAME/frontend;npm run dev"
alias mm="cd C:/Users/MY_USERNAME/Documents/PROJECT_NAME/frontend;npm run dev"

alias makemigrations="python manage.py makemigrations"
alias mm="python manage.py makemigrations"

alias migrate="python manage.py migrate"
alias migratefake="python manage.py migrate --fake"

alias gp="git add .; git commit -m 'push'; git push"

alias gpl="git pull"

alias gm="git merge --no-edit"

alias gma="git merge --abort"

alias gc="git checkout"

alias gs="git status"

alias gcm="git checkout master"

alias gcs="git checkout staging"

alias gcd="git checkout dev"

alias gcb="git checkout -"

alias gcbb="git checkout @{-2}"

alias gcbbb="git checkout @{-3}"
