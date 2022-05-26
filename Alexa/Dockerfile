FROM fusuf/whatsasena:latest
RUN git clone https://github.com/5hefin/Alexa /5hefin/Alexa
RUN yarn install --ignore-engines
RUN npm install supervisor -g
WORKDIR /5hefin/Alexa
ENV TZ=Asia/Kolkata
CMD ["node", "index.js"]
