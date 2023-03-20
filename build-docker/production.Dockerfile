FROM nginx:1.23.3

LABEL	maintainer="EdwinBetanc0urt@outlook.com; ElsioSanchez15@outlook.com; ySenih@erpya.com;" \
	description="A community page VuePress with Hope theme"


# Init ENV with default values
ENV VUE_HOST="http://localhost:9526" \
	ZK_HOST="http://localhost:8888"


COPY build-docker/start.sh .
COPY dist/ /usr/share/nginx/html/


RUN chmod +x *.sh


ENTRYPOINT ["sh" , "start.sh"]
