import React, {useState, useEffect} from 'react'

//estilos 
import './cardSecction.css'


import Card from '../../items/card/card'
import EmptyCard from '../../items/emptyCard/emptyCard'


const CardSecction = (props) => {
    const [horario, setHorario] = useState(props.horario);

    useEffect(() => {
        props.ChangeHorario(horario)
     }, [horario]);

    function createCard(){
        var id= horario.asignaciones.length==0 ? 1 : horario.asignaciones[horario.asignaciones.length-1].id+1
        var asignacion={
            id:id,
            titulo:"",
            color:"#ff0000",
            estatus:"empty",
            visibility:true,
            bloques:[]

        }
        setHorario({... horario,asignaciones:[...horario.asignaciones, asignacion]})
        // await props.ChangeHorario(horario)
        console.log(horario)
    }

    function deleteCard(id) {
        var asignaciones2= horario.asignaciones.filter(x=> x.id!=id)
        setHorario({...horario,asignaciones:asignaciones2})
    }

    function hideCard(id){
        var asignaciones2= horario.asignaciones
        asignaciones2= asignaciones2.map(x=>{

            if(x.id===id){
                x.visibility=!x.visibility
            }
            return x
        })

        asignaciones2=VEstatusLocalCard(asignaciones2)
        asignaciones2= VEstatusCard(asignaciones2)
        asignaciones2= VEstatusGlobalCard(asignaciones2)
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
        asignaciones2= VEstatusGlobalCard(asignaciones2)
        setHorario({...horario,asignaciones:asignaciones2})

    }

    function changeColor(color,id){
        var asignaciones2= horario.asignaciones
        asignaciones2= asignaciones2.map(x=>{

            if(x.id===id){
                x.color=color
            }
            return x
        })
        asignaciones2= VEstatusGlobalCard(asignaciones2)
        setHorario({...horario,asignaciones:asignaciones2})
        console.log(horario)

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
                x= VEstatusBloqueCard(x)
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

        if(array1.length===array2.length && array1[0]===array2[0] && array1[array1.length-1]===array2[array2.length-1]){
            return true
        }

        for (let index = 0; index < array1.length; index++) {
            for (let index2 = 0; index2 < array2.length; index2++) {

                if(array1[index]===array2[index2]  && ((index!==0 && index!==array1.length-1) || (index2!==0 && index2!==array2.length-1) ) ){
                    return true
                }
            }
        }
        return false
    }

    function VEstatusLocalCard(cards){
        var bandera
        for (let index = 0; index < cards.length; index++) {
            
            for (let index2 = 0; index2 < cards[index].bloques.length; index2++) {
                bandera= true

                if(cards[index].bloques[index2].dia!==null && cards[index].bloques[index2].inicio!==null && cards[index].bloques[index2].fin!==null){

                    var arrayBloque= arrayGenerator(cards[index].bloques[index2].inicio, cards[index].bloques[index2].fin)

                    for (let index3 = 0; index3 < cards[index].bloques.length; index3++) {

                        if(cards[index].bloques[index3].id!==cards[index].bloques[index2].id && cards[index].bloques[index3].dia && cards[index].bloques[index3].inicio && cards[index].bloques[index3].fin){
                            if(cards[index].bloques[index2].dia===cards[index].bloques[index3].dia){
                                var arrayBloque2= arrayGenerator(cards[index].bloques[index3].inicio, cards[index].bloques[index3].fin)
                                if(arrayVerifyContain(arrayBloque2, arrayBloque)){
                                    bandera=false
                                 }
                            }
                        }

                    }

                    if(bandera){
                        cards[index].bloques[index2].estatus="valido"
                    }
                    else{
                        cards[index].bloques[index2].estatus="duplicado"
                    }

                }


                
            }
            
        }
        return cards
    }

    function VEstatusBloqueCard(card){
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

    function VEstatusCard(cards){

        var bandera
        if(cards.length>1){
            for (let index = 0; index < cards.length; index++) { // se selecciona la primera tarjeta a comparar
                for (let index2 = 0; index2 < cards.length; index2++) { // se selecciona la segunda tarjeta a comparar

                    if(cards[index].id!==cards[index2].id && cards[index2].visibility){ // se verifica que no se esten comparando las mismas tarjetas

                        for (let index3 = 0; index3 < cards[index].bloques.length; index3++) {// se itera en los bloques de la primera cada tarjeta
                            bandera=true
                            if(cards[index].bloques[index3].dia!==null && cards[index].bloques[index3].inicio!== null && cards[index].bloques[index3].fin!==null){ // se verifica que el bloque no este vacio
                                
                                var arrayBloque= arrayGenerator(cards[index].bloques[index3].inicio, cards[index].bloques[index3].fin)

                                for (let index4 = 0; index4 < cards[index2].bloques.length; index4++) { // se itera los bloques de la segunda tarjeta

                                    if(cards[index2].bloques[index4].dia!==null && cards[index2].bloques[index4].inicio!== null && cards[index2].bloques[index4].fin!==null ){ // se verifica que el segundo bloque no este vacio

                                        if(cards[index2].bloques[index4].dia===cards[index].bloques[index3].dia){ // se verifica que las comparaciones sea entre dias iguales

                                            var arrayBloque2= arrayGenerator(cards[index2].bloques[index4].inicio, cards[index2].bloques[index4].fin)

                                            if(arrayVerifyContain(arrayBloque2,arrayBloque)){
                                                bandera=false
                                            }
                                        }
                                    }
                                }
                                if(bandera){
                                    if(cards[index].bloques[index3].estatus!=="duplicado"){
                                        cards[index].bloques[index3].estatus="valido"
                                    }
                                    
                                }
                                else{
                                    cards[index].bloques[index3].estatus="duplicado"
                                }

                            }
                            
                        }

                    }
                }
            }
        }

        return cards
    }

    function VEstatusGlobalCard(cards){

        for (let index = 0; index < cards.length; index++) {
            
            if(cards[index].titulo && cards[index].bloques.length>0  && cards[index].bloques.filter(x=>x.estatus==="valido").length===cards[index].bloques.length){
                cards[index].estatus="valido"

            }
            else if(cards[index].bloques.filter(x=>x.estatus==="duplicado").length>0){
                cards[index].estatus="duplicado"
            }
            else{
                cards[index].estatus="empty"
            }
            
            
        }
        return cards
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

        asignaciones2=VEstatusLocalCard(asignaciones2)
        asignaciones2= VEstatusCard(asignaciones2)
        asignaciones2= VEstatusGlobalCard(asignaciones2)
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
        asignaciones2=VEstatusLocalCard(asignaciones2)
        asignaciones2= VEstatusCard(asignaciones2)
        asignaciones2= VEstatusGlobalCard(asignaciones2)
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
        asignaciones2=VEstatusLocalCard(asignaciones2)
        asignaciones2= VEstatusCard(asignaciones2)
        asignaciones2= VEstatusGlobalCard(asignaciones2)
        setHorario({...horario,asignaciones:asignaciones2})
    }

    return (
        <div className="card-secction">

            {
                horario.asignaciones.map(x=>{
                   return <Card asignacion={x} key={x.id} 
                   changeTitle={changeTitle}
                   changeColor={changeColor} 
                   addBloque={addBloque} 
                   deleteBloque={deleteBloque}
                   deleteCard={deleteCard}
                   hideCard={hideCard}
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
