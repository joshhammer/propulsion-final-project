FROM ubuntu:18.04

ENV LANG=C.UTF-8 LC_ALL=C.UTF-8

RUN apt-get update && apt-get upgrade -y && apt-get install -qqy \
    wget \
    bzip2 \
    graphviz \
    libssl-dev \
    openssh-server

# Install miniconda
RUN echo 'export PATH=/opt/miniconda/bin:$PATH' > /etc/profile.d/conda.sh && \
    wget --quiet https://repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda.sh && \
    /bin/bash ~/miniconda.sh -b -p /opt/miniconda && \
    rm ~/miniconda.sh



# create the environment inside the docker container
COPY ./backend/requirements.yml /backend/requirements.yml

RUN /opt/miniconda/bin/conda env create -f /backend/requirements.yml 

RUN mkdir /scripts
RUN mkdir /static-files
RUN mkdir /nginx
# we set the path were all the python pacakages are
ENV PATH /opt/miniconda/envs/razzpay/bin:$PATH
RUN echo "source activate razzpay" >~/.bashrc  
COPY ./backend /backend



# ENV NOTVISIBLE "in users profile"
# RUN echo "export VISIBLE=now" >> /etc/profile



ENV PYTHONDONTWRITEBYTECODE 1


COPY ./scripts/* /scripts/
RUN chmod +x ./scripts/*

RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - && apt-get install -y nodejs && apt-get install -y npm

# set the working directory to /app for whenever you login into your container
WORKDIR /frontend
COPY ./frontend/package.json /frontend/
COPY ./frontend/package-lock.json /frontend/
RUN npm install
COPY ./frontend /frontend
RUN npm run build



WORKDIR /backend
