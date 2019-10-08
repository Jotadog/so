const fila = [
    {
        nome: 'kernel',
        processos: [],
    },
    {
        nome: 'diretor',
        processos: [],
    },
    {
        nome: 'chefe',
        processos: [],
    },
    {
        nome: 'gerente',
        processos: [],
    },
    {
        nome: 'estagiario',
        processos: [],
    },
];

const aleatoria = () => Math.floor(Math.random() * 10) % 4;

const adicionarProcesso = fila => {
    let posicao = aleatoria();
    fila[posicao].processos.push(new Date());
}

const removerProcesso = fila => {
    fila.forEach(item => {
        item.processos.shift();
    });
}

const subirProcesso = fila => {
    fila.forEach((item, indiceFila) => {
        if (indiceFila > 0) {
            if (item.processos.length > 0) {
                item.processos.forEach((processo, indiceProcesso) => {
                    const now = new Date();

                    if (now.getMilliseconds() - processo.getMilliseconds() > 5) {
                        fila[indiceFila - 1].processos.push(processo);
                        fila[indiceFila].processos.splice(indiceProcesso);
                    }
                });
            }
        }
    });
}

const imprimir = fila => {
    console.clear();
    fila.forEach(item => {
        const tempo = item.processos.map(tempo => tempo.getMilliseconds());
        console.log(item.nome, tempo);
    })
}

setInterval(() => {
    adicionarProcesso(fila);
    imprimir(fila);
}, 1000);

setInterval(() => {
    removerProcesso(fila);
    imprimir(fila);
}, 2000);

setInterval(() => {
    subirProcesso(fila);
    imprimir(fila);
}, 400);
