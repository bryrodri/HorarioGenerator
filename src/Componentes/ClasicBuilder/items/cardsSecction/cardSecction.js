import React, {useState} from 'react'

//estilos 
import './cardSecction.css'


import Card from '../../items/card/card'
import EmptyCard from '../../items/emptyCard/emptyCard'


const CardSecction = () => {
    const [horario, setHorario] = React.useState({nombre:"", asignaciones:[]});

    function createCard(){
        var id= horario.asignaciones.length==0 ? 1 : horario.asignaciones[horario.asignaciones.length-1].id+1
        var asignacion={
            id:id,
            titulo:"",
            color:"",
            estatus:"empty",
            bloques:[]

        }
        setHorario({... horario,asignaciones:[...horario.asignaciones, asignacion]})
        console.log(horario)
    }

    function deleteCard(id) {
        var asignaciones2= horario.asignaciones.filter(x=> x.id!=id)
        setHorario({...horario,asignaciones:asignaciones2})
    }

    function changeTitle(title,id){
        var asignaciones2= horario.asignaciones
        asignaciones2= asignaciones2.map(x=>{

            if(x.id===id){
                x.titulo=title
            }
            return x
        })

        setHorario({...horario,asignaciones:asignaciones2})

    }

    function addBloque(id){
        var asignaciones2= horario.asignaciones
        var bloquenew={
            dia:null,
            estatus:"empty",
            inicio:null,
            fin:null
        }
        asignaciones2= asignaciones2.map(x=>{
            
            if(x.id===id){
                bloquenew.id= x.bloques.length==0 ? 1 : x.bloques.length+1
                x.bloques.push(bloquenew)
            }
            return x
        })
        setHorario({...horario,asignaciones:asignaciones2})
    }

    function deleteBloque(id){
        var asignaciones2= horario.asignaciones
        asignaciones2= asignaciones2.map(x=>{
            if(x.id===id){
                x.bloques.pop()
            }
            return x
        })
        setHorario({...horario,asignaciones:asignaciones2})

    }

    function arrayGenerator(inicio, fin){
        var NewArray=[]
        for (let index = inicio; index <= fin; index++) {
            NewArray.push(index)
        }
        return NewArray
    } 

    function arrayVerifyContain(array1, array2){

        for (let index = 0; index < array1.length; index++) {
            for (let index2 = 0; index2 < array2.length; index2++) {

                if(array1[index]===array2[index2]  && ((index!==0 && index!==array1.length-1) || (index2!==0 && index2!==array2.length-1) ) ){
                    return true
                }
            }
        }
        return false
    }

    function VEstatusBloqueCard(card){


            console.log("inicia busqueda")
            var bandera
            var bloques= card.bloques

            for (let index = 0; index < bloques.length; index++) {
                bandera=true
                if(bloques[index].inicio && bloques[index].fin && bloques[index].dia){
                    var arrayBloque= arrayGenerator(bloques[index].inicio, bloques[index].fin)

                    for (let index2 = 0; index2 < bloques.length; index2++) {

                        if(bloques[index2].id!==bloques[index].id && bloques[index].inicio && bloques[index].fin && bloques[index].dia){
                            if(bloques[index2].dia === bloques[index].dia ){
                                var arrayBloque2= arrayGenerator(bloques[index2].inicio, bloques[index2].fin)
                                console.log(arrayVerifyContain(arrayBloque2,arrayBloque))
                                if(arrayVerifyContain(arrayBloque2,arrayBloque)){
                                   bandera=false
                                }


                            }
                            
                        }
                        
                    }

                    if(bandera){
                        bloques[index].estatus="valido"
                    }
                    else{
                        bloques[index].estatus="duplicado"
                    }

                }

            }
            card.bloques=bloques
            console.log(card)






        return card
    }

    function UpdateDia(idcard, idbloque, dia) {
        var asignaciones2= horario.asignaciones
        var bandera= false
        asignaciones2= asignaciones2.map(x=>{
            if(x.id===idcard){
                x.bloques.map(y=>{
                    if(y.id===idbloque){
                        y.dia=dia
                        if(y.fin!==null && y.inicio!== null && y.dia!==null){
                            y.estatus="Lleno"
                            bandera=true
                            
                        }
                    }
                    return y
                })

                if(bandera){
                    bandera=false
                    x= VEstatusBloqueCard(x)
                }
            }
            return x
        })
        setHorario({...horario,asignaciones:asignaciones2})
    }

    function UpdateInicio(idcard, idbloque, inicio) {
        var asignaciones2= horario.asignaciones
        var bandera=false
        asignaciones2= asignaciones2.map(x=>{
            if(x.id===idcard){
                x.bloques.map(y=>{
                    if(y.id===idbloque){
                        y.inicio=inicio
                        if(y.fin!==null && y.inicio!== null && y.dia!==null){
                            y.estatus="Lleno"
                            bandera=true
                            
                        }
                    }
                    return y
                })

                if(bandera){
                    bandera=false
                    x= VEstatusBloqueCard(x)
                }
            }
            return x
        })
        setHorario({...horario,asignaciones:asignaciones2})
    }

    function UpdateFin(idcard, idbloque, fin) {
        var asignaciones2= horario.asignaciones
        var bandera=false
        asignaciones2= asignaciones2.map(x=>{
            if(x.id===idcard){
                x.bloques.map(y=>{
                    if(y.id===idbloque){
                        y.fin=fin
                        if(y.fin!==null && y.inicio!== null && y.dia!==null){
                            y.estatus="Lleno"
                            bandera=true
                            
                        }
                    }


                    return y
                })

                if(bandera){
                    bandera=false
                    x=VEstatusBloqueCard(x)
                }
            }
            return x
        })
        setHorario({...horario,asignaciones:asignaciones2})
    }

    return (
        <div className="card-secction">

            {
                horario.asignaciones.map(x=>{
                   return <Card asignacion={x} key={x.id} 
                   changeTitle={changeTitle} 
                   addBloque={addBloque} 
                   deleteBloque={deleteBloque}
                   deleteCard={deleteCard}
                   UpdateDia={UpdateDia}
                   UpdateInicio={UpdateInicio}
                   UpdateFin={UpdateFin} ></Card>
                })
            }

            <EmptyCard createCard={createCard}></EmptyCard>
        </div>
    )
}


export default CardSecction
