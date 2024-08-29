const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em um determinado dia na escola, a diretora propõe uma palestra onde um escritor irá a escola e falrá sobre a importância da leitura no desenvolvimento dos estudantes e mostrará diferentes gêneros e escritores importantes na literatura. Ao ouvir essa proposta, o que você acharia dessa palestra?",
        alternativas: [
            "È uma ótima ideia, pois amo ler",
            "Não acho interessante, preferia uma palestra sobre tecnologias"
        ]
    },
    {
        enunciado: "Qual dessas atividades você acha que ajudaria mais no desenvolvimento das habilidades de leitura e compreensão?",
        alternativas: [
            "Participar de um clube de leitura.",
            "Assistir a resenhas de livros na internet.",
        ]
    },
    {
        enunciado: "Se um escritor famoso fosse convidado para dar uma palestra sobre como escrever um romance, qual seria sua reação?",
        alternativas: [
            "Seria muito empolgante, pois tenho interesse em escrever.",
            "Não seria tão relevante para mim, pois não tenho interesse em escrever."
        ]
    },
    {
        enunciado: "Qual é a importância dos 'melhores livros' na educação literária?",
        alternativas: [
            "Eles fornecem uma base sólida de literatura clássica e conhecimento cultural.",
            "Eles ajudam a desenvolver habilidades de leitura crítica e interpretação."
        ]
    },
    {
        enunciado: "Por fim, sua professora te pergunta sobre qual o estilo de livro que você prefere. Qual seria sua resposta?",
        alternativas: [
           "Gosto de livros que exploram questões tecnológicas e futuristas, pois me interessam os avanços e suas implicações para a sociedade.",
            "Prefiro obras que abordam aspectos humanos e sociais, com uma narrativa profunda sobre as experiências e emoções dos personagens."
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();
