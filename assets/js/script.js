let agregadorVideo = (function() {
    let insertarVideo = function(id, url) {
        let iframe = document.getElementById(id);
        if (iframe) {
            iframe.setAttribute('src', url);
        } else {
            console.error(`No se encontró el iframe con id: ${id}`);
        }
    };

    return function(id, url) {
        insertarVideo(id, url);
    };
})();

class Multimedia {
    #url;

    constructor(url) {
        this.#url = url;
    }
    
    setInicio() {
        return 'Este método es para realizar un cambio en la URL del video';
    }

    get url() {
        return this.#url; 
    }
}

class Reproductor extends Multimedia {
    constructor(id, url) {
        super(url); 
        this.id = id;
    }

    playMultimedia() {
        agregadorVideo(this.id, this.url);
    }

    setInicio(tiempo) {
        let nuevaUrl = `${this.url}?start=${tiempo}`;
        agregadorVideo(this.id, nuevaUrl); 
    }
}


let musica1 = new Reproductor('musica', 'https://www.youtube.com/embed/GNCd_ERZvZM');
let pelicula1 = new Reproductor('peliculas', 'https://www.youtube.com/embed/aYEBKeko_gU');
let serie1 = new Reproductor('series', 'https://www.youtube.com/embed/o-dnfm7cDtU');


musica1.playMultimedia();
pelicula1.playMultimedia();
serie1.playMultimedia();


serie1.setInicio(15);

