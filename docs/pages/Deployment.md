# Deployment

If you just want to set up/deploy KMA see the docker [deployment repo](https://github.com/KeepMeAlive3D/docker-deployment).

## Devops notes

### MySql

Kma uses a mysql db to store meta and event data.

### Mqtt

Kma uses a mqtt server to receive events.

### Influx

Kma can use Influx to save event data, this is not required

### Build a Docker File

The dockerfile in the root directory can be used to build your own image

````shell
docker build -t <tag>
````

Also see the GitHub action we use to deploy the
image [dockerhub.yml](https://github.com/KeepMeAlive3D/KeepMeAlive3D/blob/main/.github/workflows/dockerhub.yml).

## Deploy Docker File

````yml
services:
  kma:
    container_name: kma
    image: <image>:<tag>
    volumes:
      - ./config.yml:/app/config.yml
      - ./models:/app/models
    # reverse proxy stuff
    environment:
      VIRTUAL_HOST: kma.matthiasklenz.de
      LETSENCRYPT_HOST: kma.matthiasklenz.de
      LETSENCRYPT_EMAIL: matthias.klenz@outlook.com
      VIRTUAL_PORT: 8080
      WEB_SOCKET_SUPPORT: true
    network_mode: bridge
````

provide the config.yml mentioned in the volumes:

For the backend, create a config.yml file in the run `backend/run` directory with this schema:

````yaml
passphrase: 'xxx'
databases:
  sql:
    host: 'kma.abc.de'
    port: 3306
    schema: 'kma'
    user: 'sampleUser'
    password: 'xxx'
  kafka:
    host: 'xxx'
    port: 8083
    password: 'xxx'
  mqtt:
    host: 'kma.abc.de'
    port: 1883
    clientId: 'user'
    password: 'xxx'
    topic: '#'
  influx:
    host: 'xxx'
    port: 8086
    org: 'xxx'
    bucket: 'xxx'
    token: 'xxx'
pluginDirs: [ "plugins" ]
````

## Reverse Proxy

As an example we use [nginx-proxy](https://github.com/nginx-proxy/nginx-proxy) to automatically generate lets encrypt
certificates. We might have to modify the proxy.conf of nginx to allow for larger bodies. Edit this file and add:
`client_max_body_size 200M;` to allow for bodies up to 200mb.