//server.mjs
import express from "express";
import contatos from './data/contatos.mjs'


const app = express();
//middleare
app.use(express.json());

//GET
app.get('/', (req, res) => {
    res.send(`<h1 style='color: blue;'> Hands-on Docker: Backend</h1> <p> Olá mundo -DevOps</p>`)
});

/**
 * GET /contatos - ontem a lista de contatos
 * GET /contatos/:id - rota dinamica - obtem 1 contato
 * POST /contatos - criar um contato
 * PUT /contatos/:id - editar um contato
 * DELETE / contatos/:id - deletar um contato
 */
app.get('/contatos', (req, res) => {
    res.status(200).json({
        error: false,
        contatos
    })
})

app.get('/contatos/:id', (req, res) => {
    const id = req.params.id;
    const contato = contatos.find((contato) => contato.id == id);
    if(!contato)
        return res.status(400).json({
            error: true,
            messege: "Contato não encontrado!"
        });
        res.status(200).json({
            error: false,
            contato
        });
});

app.post('/contatos', (req, res) => {
    const { nome, genero, telefone, email} = req.bady;

    if(!nome || !genero || !telefone || !email)
        return res.status(400).json({
            error: true,
            messege: "Entrada inválida"
        });
    if (contatos.find((contato) => contato.email === email))
        return res.status(400).json({
            error:true,
            massege: "Email já cadastrada!"
        })

        id = (contatos.length == 0)
            ? 1 // primeiro id
            : contatos[contatos.length-1].id + 1 ; //id di ultimo contato
        const contato = { id: uuid(), nome, genero, telefone, email};
            res.status(201).json({
                error: false,
                contato
            });
});

app.put('/contatos/:id', (req, res) => {
    const id = req.params.id
    const contato = contatos.find ((contato) => contato.id == id);
    
    if(!contato)
        return res.status(400).json({
            error: true,
            messege: 'Contato não encontrado!'
        });
    
        const { nome, genero, telefone, email } = req.body;

        if(email) {
            if(contatos.find((contato) => contato.email === email))
                return res.status(400).json({
                    error: true,
                    message: "Email ja cadastrado!"
                })
            contato.email = email
        }
        if (nome) contato.nome = nome;
        if (genero) contato.genero = genero;
        if (telefone) contato.telefone = telefone;

        return res.status(200).json({
            error: false,
            message: "Contato atualizado com sucesso!"
        })
        
        
})



app.listen(3000, "127.0.0.1", ()=>  {
    console.log('Servidor iniciado na porta 3000!')
})