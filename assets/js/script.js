class Multimedia {
    constructor(url){
        this._url = url;
    }
    
    get url(){
        return this._url; 
    }
}

class Reproductor extends Multimedia{
    constructor(id){
        this._id = id; 
    }

    playMultimedia(){

    }

    setInicio(){
        
    }
}