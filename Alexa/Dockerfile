FROM fusuf/whatsasena:latest

RUN git clone https://github.com/5hefin/Alexa /5hefin/Alexa
WORKDIR /5hefin/Alexa
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --ignore-engines

CMD ["node", "index.js"]
