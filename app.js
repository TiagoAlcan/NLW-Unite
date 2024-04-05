
//let assume um valor que pode ser alterado, enquanto o const não
//lista [] - guarda diversos objetos
let participantes = [
    {
        nome: "Tiago Gomes",
        email: "tiago@gmail.com",
        dataInscricao: new Date(2024, 7, 21, 21, 30),
        dataCheckIn: new Date(2024, 8, 3, 19, 20)
    },
    {
        nome: "Gabriel Catanzaro",
        email: "gabriel@gmail.com",
        dataInscricao: new Date(2024, 6, 15, 6, 30),
        dataCheckIn: null
    },
    {
        nome: "Maria Silva",
        email: "maria@gmail.com",
        dataInscricao: new Date(2024, 5, 10, 10, 0),
        dataCheckIn: new Date(2024, 5, 11, 12, 15)
    },
    {
        nome: "José Oliveira",
        email: "jose@gmail.com",
        dataInscricao: new Date(2024, 4, 25, 14, 45),
        dataCheckIn: null
    },
    {
        nome: "Ana Santos",
        email: "ana@gmail.com",
        dataInscricao: new Date(2024, 3, 8, 8, 0),
        dataCheckIn: new Date(2024, 3, 10, 16, 20)
    },
    {
        nome: "Carlos Mendes",
        email: "carlos@gmail.com",
        dataInscricao: new Date(2024, 2, 14, 11, 15),
        dataCheckIn: new Date(2024, 2, 15, 14, 45)
    },
    {
        nome: "Fernanda Costa",
        email: "fernanda@gmail.com",
        dataInscricao: new Date(2024, 1, 18, 18, 30),
        dataCheckIn: new Date(2024, 1, 19, 22, 10)
    },
    {
        nome: "Rafaela Sousa",
        email: "rafaela@gmail.com",
        dataInscricao: new Date(2024, 0, 5, 9, 45),
        dataCheckIn: null
    },
    {
        nome: "Pedro Almeida",
        email: "pedro@gmail.com",
        dataInscricao: new Date(2023, 11, 12, 16, 20),
        dataCheckIn: null
    },
    {
        nome: "Sara Pereira",
        email: "sara@gmail.com",
        dataInscricao: new Date(2023, 10, 29, 7, 30),
        dataCheckIn: new Date(2023, 11, 1, 13, 50)
    }
];

const criarNovoParticipante = (participante) => {
    const dataInscricao = dayjs(Date.now())
        .to(participante.dataInscricao)

    let dataCheckIn = dayjs(Date.now())
        .to(participante.dataCheckIn)

    //condicional
    if (participante.dataCheckIn == null) {
        dataCheckIn = `
            <button
                data-email="${participante.email}"
                onclick="fazerCheckIn(event)"
            >
                Confirmar check-in
            </button>
        `
    }

    //interpolação
    return `
    <tr>
      <td>
        <strong>
          ${participante.nome}
        </strong>
        <br>
        <small>
          ${participante.email}
        </small>
      </td>
      <td>${dataInscricao}</td>
      <td>${dataCheckIn}</td>
    </tr>
    `
}

const atualizarLista = (participantes) => {
    let output = ""
    //estrutura de repeticção - loop
    for (let participante of participantes) {
        //para cada participante de tantos participantes - faca alguma coisa enquanto tiver pessoas nessa lista
        output = output + criarNovoParticipante(participante)
    }

    // substituir informação do HTML
    document
        .querySelector('tbody')
        .innerHTML = output
}

atualizarLista(participantes)

const adicionarParticipante = (event) => {
    //não faca o padrao - que seria enviar o formulario (form)
    event.preventDefault()

    const dadosDoFormulario = new FormData(event.target)

    const participante = {
        nome: dadosDoFormulario.get('nome'),
        email: dadosDoFormulario.get('email'),
        dataInscricao: new Date(),
        dataCheckIn: null
    }

    //vericficar se o participante existe
    const participanteExistente = participantes.find(
        //se o return é imediato voce pode tirar das chaves e o return
        (p) => {
            return p.email == participante.email
        }
    )
    if (participanteExistente) {
        alert('Email já cadastrado!')
        return
    }

    //conceito de spred - espalhar (...participantes - colocando os valores antigos da minha lista na nova lista)
    participantes = [participante, ...participantes]

    atualizarLista(participantes)

    //limpar o formulário
    //no português - do formulario pesquisa pelo seletor - name que recebe nome e desse cara voce pega o valor e atribui "" (vazio)
    event.target.querySelector('[name="nome"]').value = ""
    event.target.querySelector('[name="email"]').value = ""
}

const fazerCheckIn = (event) => {
    const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?'

    //confirmar se realmente quer o check-in
    if (confirm(mensagemConfirmacao) == false) {
        //retorna pro caminho normal sem checar o botão
        return
    }

    //encontrar o participante dentro da lista
    const participante = participantes.find((p) => {
        return p.email == event.target.dataset.email
    })
    //atualizar o check-in do participante
    participante.dataCheckIn = new Date()
    //atualizar a lista de participantes
    atualizarLista(participantes)
}

