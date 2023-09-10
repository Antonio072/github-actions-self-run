FROM node:20

COPY ["package.json", "package-lock.json", "node_modules", "/usr/src/"]
COPY index.js "/usr/src/"
WORKDIR "/usr/src"

EXPOSE 3000

CMD [ "node", "--watch", "index.js" ]