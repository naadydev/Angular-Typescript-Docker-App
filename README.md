# Angular, Typescript, Docker POC App

## Requirements
1- List of Funds with investment required
2- Click on a Fund and submit an amount (between 100€ and 10.000€) for a funding;
3- Can only submit an amount once per funding.
4- Should be prepared for horizontal scaling.

## Tech Stack
- Angular 11.2.4
- Typescript
#### packages
- uuid > to Mock and Generate userId
- ngx-bootstrap to use the UI Modal

## Routes
| URL | For |
| ------ | ------ |
| http://localhost:7070/funds | Funds List |
| http://localhost:7070 | Home |


## How To RUn
- ##### Install Nodejs 10+ and Angular 11+ then You can simply run:
      $> npm install
      $> ng serve -o

- ##### You can configure Min & Max amount of Investment in the environment here "src\environments\environment.ts"

- #### This Project support Docker so you can follow the following steps to run the api
```sh
    $> docker build -t crowdlendingpocapp .
    $> docker run --rm -it -p 7070:80 crowdlendingpocapp
```

