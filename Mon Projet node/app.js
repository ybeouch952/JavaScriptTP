const http = require('http')
const app = express();

http.get('/', (req, res) => {
    res.send('Bienvenue sur mon serveur!');
});

http.listen(port, () => {
    console.log(`Le serveur est en écoute sur le port ${port}`);
});
