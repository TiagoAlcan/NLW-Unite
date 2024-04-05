
//let assume um valor que pode ser alterado, enquanto o const não
//lista [] - guarda diversos objetos
let participantes = [
    {
        nome: "Tiago Gomes",
        email: "tiago@gmail.com",
        dataIncricao: new Date(2024, 7, 21, 21, 30),
        dataCheckIn: new Date(2024, 8, 3, 19, 20)
    },
    {
        nome: "Gabriel Catanzaro",
        email: "gabriel@gmail.com",
        dataIncricao: new Date(2024, 6, 15, 6, 30),
        dataCheckIn: new Date(2024, 6, 16, 17, 45)
    },
    {
        nome: "Maria Silva",
        email: "maria@gmail.com",
        dataIncricao: new Date(2024, 5, 10, 10, 0),
        dataCheckIn: new Date(2024, 5, 11, 12, 15)
    },
    {
        nome: "José Oliveira",
        email: "jose@gmail.com",
        dataIncricao: new Date(2024, 4, 25, 14, 45),
        dataCheckIn: new Date(2024, 5, 1, 9, 30)
    },
    {
        nome: "Ana Santos",
        email: "ana@gmail.com",
        dataIncricao: new Date(2024, 3, 8, 8, 0),
        dataCheckIn: new Date(2024, 3, 10, 16, 20)
    },
    {
        nome: "Carlos Mendes",
        email: "carlos@gmail.com",
        dataIncricao: new Date(2024, 2, 14, 11, 15),
        dataCheckIn: new Date(2024, 2, 15, 14, 45)
    },
    {
        nome: "Fernanda Costa",
        email: "fernanda@gmail.com",
        dataIncricao: new Date(2024, 1, 18, 18, 30),
        dataCheckIn: new Date(2024, 1, 19, 22, 10)
    },
    {
        nome: "Rafaela Sousa",
        email: "rafaela@gmail.com",
        dataIncricao: new Date(2024, 0, 5, 9, 45),
        dataCheckIn: new Date(2024, 0, 6, 11, 30)
    },
    {
        nome: "Pedro Almeida",
        email: "pedro@gmail.com",
        dataIncricao: new Date(2023, 11, 12, 16, 20),
        dataCheckIn: new Date(2023, 11, 13, 20, 15)
    },
    {
        nome: "Sara Pereira",
        email: "sara@gmail.com",
        dataIncricao: new Date(2023, 10, 29, 7, 30),
        dataCheckIn: new Date(2023, 11, 1, 13, 50)
    }
];

const criarNovoParticipante = (participante) => {
    const dataIncricao = dayjs(Date.now())
    .to(participante.dataIncricao);

    const dataCheckIn = dayjs(Date.now())
    .to(participante.dataCheckIn);

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
    for(let participante of participantes) {
        //para cada participante de tantos participantes - faca alguma coisa enquanto tiver pessoas nessa lista
      output = output + criarNovoParticipante(participante)
    }
  
    // substituir informação do HTML
    document
    .querySelector('tbody')
    .innerHTML = output
  }
  
  atualizarLista(participantes)
