# HTML  

*Hypertext*
*Markup*
*Language*

- Composto por tags
    - a href -> é uma tag para tornar um texto clicável e com uma referência 
    
- Atributos

# CSS

*Cascading*
*StyleSheet*

```css
/*
- declarações
- colocando a virgula (,) você pode selecionar mais de 1 seletor
- especficidade
- Css tem influencia sobre o HTML(box model - presente no f12)
*/

body {
    background-color: #121214;
    color:#faebd7;
}

```

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
    dataInscricao: new Date(2024, 7, 21, 21, 30),
    dataCheckIn: new Date(2024, 8, 3, 19, 20)
}
//let assume um valor que pode ser alterado, enquanto o const não
//lista [] - guarda diversos objetos
let participantes = [
    {
        nome: "Tiago Gomes",
        email: "tiago@gmail.com",
        dataInscricao: new Date(2024, 7, 21, 21, 30),
        dataCheckIn: new Date(2024, 8, 3, 19, 20)
    },
]

//Essa estrutura cria um participante para receber da lista participantes para que assim possa ser inserido no devido html de outra funcao - no caso do exemplo criarNovoParticipante(participante)
for(let participante of participantes){
        //para cada participante de tantos participantes - faca alguma coisa enquanto tiver pessoas nessa lista
    }

const adicionarParticipante = (event) => {
//não faca o padrao - que seria enviar o formulario (form)
event.preventDefault
const dadosDoFormulario = new FormData(event.target)

//Testando para ver se estamos pegando os dados do formulario
alert(dadosDoFormulario.get('email'))
}
```
