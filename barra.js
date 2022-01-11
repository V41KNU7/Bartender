const express = require ('express');
const path = require ('path');
const app = express();

const tragos = require('/tragos');

const barra = {

    tragos: tragos,

    buscar_Trago: function(trago){
        this.tragos.forEach(function(){
            for (let i=0; i=this.tragos.lenght; i++) {
                trago === this.tragos[i].trago ? true : false ;
            }
        
        })

    }

    };

app.listen( 4200, () => console.log("Server Up!"));

