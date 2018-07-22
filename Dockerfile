FROM node:latest

RUN useradd --user-group --create-home --shell /bin/false app &&\
  yarn global add yarn

ENV HOME=/home/app

COPY package.json $HOME/mapperson/
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/mapperson

RUN yarn install

USER root
COPY . $HOME/mapperson
RUN chown -R app:app $HOME/*
USER app

CMD ["node", "index.js"]