import fs from 'fs'; //Pega o fileSystem do node js

const fileSystem = fs; 

console.log('[CRUD] Node - File System')

const crud = {
    posts: [],
    read() {
        crud.posts = JSON.parse(fileSystem.readFileSync('./db.json', { encoding: 'utf-8' }));
        return crud.posts;
    },

    create({ id, content }) {
        const dados = { id, content };
        crud.posts.push(dados);
        fileSystem.writeFileSync('./db.json', JSON.stringify(crud.posts), { encoding: 'utf-8' });
    },
}
// READ 
console.log('Lendo o arquivo', crud.read());

// CREATE
crud.create({ id: Date.now(), content: `Deu um crude galera!` });

// UPDATE