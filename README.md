# HTML  

*Hypertext*
*Markup*
*Language*

- Composto por tags
    - a href -> é uma tag para tornar um texto clicável e com uma referência 
    
- Atributos

# CSS

# JavaScript
```js
//variaveis
const mensagem = `Oi tudo bem?`;
//tipos de dados

//funcao
alert(mensagem);

//Objeto javascript
const participante = {
    nome: "Tiago Gomes",
    email: "tiago@gmail.com",
    dataIncricao: new Date(2024, 7, 21, 21, 30),
    dataCheckIn: new Date(2024, 8, 3, 19, 20)
}
//let assume um valor que pode ser alterado, enquanto o const não
//lista [] - guarda diversos objetos
let participantes = [
    {
        nome: "Tiago Gomes",
        email: "tiago@gmail.com",
        dataIncricao: new Date(2024, 7, 21, 21, 30),
        dataCheckIn: new Date(2024, 8, 3, 19, 20)
    },
]

//Essa estrutura cria um participante para receber da lista participantes para que assim possa ser inserido no devido html de outra funcao - no caso do exemplo criarNovoParticipante(participante)
for(let participante of participantes){
        //para cada participante de tantos participantes - faca alguma coisa enquanto tiver pessoas nessa lista
    }
```
