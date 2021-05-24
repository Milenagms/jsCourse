

document.addEventListener('ckick', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a'){
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el){
    try {
        const href = el.getAttribute('href');
        const response = await fetch(href);

        if (reponse.status !== 200) throw new Error ('Erro 404!');

        const html = await reponse.text();
        carregaResultado(html)
    }catch(e){
        console.log(e);
    }
}

function carregaResultado(reponse){
    const resultado = document.querySelector('.resultado');
    resultado.innerHtml = response;
}