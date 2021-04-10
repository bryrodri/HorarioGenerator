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
            dia:"",
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
    function UpdateDia(idcard, idbloque, dia) {
        var asignaciones2= horario.asignaciones
        asignaciones2= asignaciones2.map(x=>{
            if(x.id===idcard){
                x.bloques.map(y=>{
                    if(y.id===idbloque){
                        y.dia=dia
                    }
                    return y
                })
            }
            return x
        })
        setHorario({...horario,asignaciones:asignaciones2})
    }

    function UpdateInicio(idcard, idbloque, inicio) {
        var asignaciones2= horario.asignaciones
        asignaciones2= asignaciones2.map(x=>{
            if(x.id===idcard){
                x.bloques.map(y=>{
                    if(y.id===idbloque){
                        y.inicio=inicio
                    }
                    return y
                })
            }
            return x
        })
        setHorario({...horario,asignaciones:asignaciones2})
    }

    function UpdateFin(idcard, idbloque, fin) {
        var asignaciones2= horario.asignaciones
        asignaciones2= asignaciones2.map(x=>{
            if(x.id===idcard){
                x.bloques.map(y=>{
                    if(y.id===idbloque){
                        y.fin=fin
                    }
                    return y
                })
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
                   UpdateDia={UpdateDia} ></Card>
                })
            }

            <EmptyCard createCard={createCard}></EmptyCard>
        </div>
    )
}


export default CardSecction
