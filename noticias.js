// Precisei consultar a sintaxe 
class jornalista {
    constructor (foto, nome){
    this.foto = foto;
    this.nome = nome;
    }
    analisarNoticia () {
        console.log('Analisando notícia...')
    }
}

class noticia extends jornalista {
    constructor(foto, nome, materia) {
        super(foto, nome);
        this.materia = materia;
    }
    analisarNoticia(){
        super.analisarNoticia;
    }
    inserirVideos(){
        console.log('Inserindo vídeo...');
    }
}

const Noticia = new noticia('3x4', 'Maerinque', 'Patrulha');
const jornalistaFamoso = new noticia('3x4', 'Roberto', 'ET');

// Consulta de array
var noticias = [14, 27, 36];
var jornalistas = ['Roberto', 'Patrícia', 'Reinaldo'];

