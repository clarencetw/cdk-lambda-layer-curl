FROM  public.ecr.aws/lambda/provided:latest

#
# versions
#

ARG CURL_VERSION=7.80.0

USER root
RUN mkdir -p /opt
WORKDIR /tmp

#
# tools
#

RUN yum update -y \
    && yum install -y make automake gcc gcc-c++ \
    && yum install -y openssl-devel \
    && yum install -y zip unzip wget tar gzip

#
# curl
#

RUN wget https://curl.haxx.se/download/curl-${CURL_VERSION}.zip
RUN unzip curl-${CURL_VERSION}.zip
RUN ./curl-${CURL_VERSION}/configure --with-openssl --prefix=/opt && make && make install

#
# create the bundle
#

RUN cd /opt \
    && zip --symlinks -r ../layer.zip * \
    && echo "/layer.zip is ready" \
    && ls -alh /layer.zip;

WORKDIR /
ENTRYPOINT [ "/bin/bash" ]