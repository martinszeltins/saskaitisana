FROM node:14

WORKDIR /var/www

ADD entrypoint.sh /app/client-node-entrypoint.sh
RUN chmod -R 777 /app/client-node-entrypoint.sh

CMD ["/app/client-node-entrypoint.sh"]
