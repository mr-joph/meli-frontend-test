## Mercadolibre Frontend Challenge
Code challenge for Mercadolibre

The goal was to add three views based on the provided designs and create a node layer as bridge
between the frontent and the Mercadolibre API.

### Tech Stack
- Next.js
- React.js
- Sass
- Express(Node.js)

### Run The Project
- Clone this repo and go to the cloned folder.
- Run `$ npm i `
- Run `$ npm run dev` for development if you wanna play around
- For production, run `$ npm run build` and then `$ npm start`, you will notice a big improvement in response times
- Go to the browser and hit `http://localhost:1234`
- Profit :moneybag:

**Note:** Developed and tested with node v12.18.3 and npm v6.*

### Routes
These are the routes/endpoints available, if you have running the project, you can hit those links
(they have parameters and queries for testing)
- [/](http://localhost:1234/)
- [/items?search=query](http://localhost:1234/items?search=iPod)
- [/items/:id](http://localhost:1234/items/MLA865110011)
- [/api/items?q=query](http://localhost:1234/api/items?q=teclado%20mecanino)
- [/api/items/:id](http://localhost:1234/api/items/MLA860201932)

That's all and happy coding :computer: :coffee:
