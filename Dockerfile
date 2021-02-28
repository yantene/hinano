FROM node:14.15.5

WORKDIR /usr/src/app

RUN mkdir frontend

COPY package*.json ./
COPY frontend/package*.json ./frontend/

RUN npm ci
RUN npm --prefix frontend ci

COPY . .

RUN npm run build

ENTRYPOINT ["/usr/local/bin/npm"]
CMD ["start"]

EXPOSE 3000