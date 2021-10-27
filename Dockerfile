FROM node:14-alpine

# Create the directory!
RUN mkdir -p /usr/src/bot
WORKDIR /usr/src/bot

USER node

# Copy and Install our bot
COPY package.json /usr/src/bot
RUN npm install

COPY --chown=node:node . .

# Start me!
CMD ["node", "index.js"]
