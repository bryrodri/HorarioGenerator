
import React, { Component } from 'react'

import './table.css'


export default class Table extends Component {
	state={
		horario:this.props.horario,
		algo:1,
		generador:[]
	}

	async componentDidMount(){
		console.log("hola")
		console.log(this.state.horario)
        this.setState({algo:2})

		this.GenerarGenerador()

    }

	GenerarGenerador=()=> {
		var horario= this.state.horario
		var generador=[]
		for (let index = 0; index < horario.asignaciones.length; index++) {
			var bloques= horario.asignaciones[index].bloques
			for (let index2 = 0; index2 < bloques.length; index2++) {
				var objetoGenerador={
					dia:bloques[index2].dia,
					inicio:bloques[index2].inicio,
					cantidad:bloques[index2].fin-bloques[index2].inicio,
					nombre:horario.asignaciones[index].titulo,
				}

				generador.push(objetoGenerador)
				
			}
		}
		console.log(generador)

		console.log(this.state.generador.filter(x=>x.dia==="Lunes" && x.inicio===6))
		this.setState({generador:generador})
		
	}

	EstilosDiv=(dia, hora)=> {

		if(this.state.generador.filter(x=>x.dia===dia && x.inicio===hora).length>0){
			console.log("entre")
			return {
				 		height:this.state.generador.filter(x=>x.dia===dia && x.inicio===hora)[0].cantidad*33+"px",
					
					}
		}
		else{
			return {
				height: "0px",
	
	
			}
		}
	}

	TextoDiv=(dia,hora)=>{
		if(this.state.generador.filter(x=>x.dia===dia && x.inicio===hora).length>0){
			
			return <span>{this.state.generador.filter(x=>x.dia===dia && x.inicio===hora)[0].nombre}</span> 
		}
		else{
			return ""
		}

	}
	//<div className={(this.state.generador.filter(x=>x.dia==="Lunes" && x.inicio===6) ? 'contenido-table': '')} style={this.EstilosDiv("Lunes", 6)} > {this.TextoDiv("Lunes", 6)}</div>
	divContainer=(dia,hora)=>{

		if(this.state.generador.filter(x=>x.dia===dia && x.inicio===hora).length>0){
			return <div className={(this.state.generador.filter(x=>x.dia===dia && x.inicio===hora) ? 'contenido-table': '')} style={this.EstilosDiv(dia, hora)} > {this.TextoDiv(dia, hora)}</div>

		}
		else{
			return <div></div>
		}

	}

	render() {
		return (
			<div className="table-container">

			<table className="table--item" >
				<thead>
					<tr >
						<th></th>
						<th  >Lunes {this.state.algo}</th>
						<th >Martes</th>
						<th >Miercoles</th>
						<th >Jueves</th>
						<th >Viernes</th>
						<th >Sabado</th>
						<th >Domingo</th>
					</tr>
				</thead>

				<tbody>

					<tr >
						<td  >6:00 AM</td>
						<td >{this.divContainer("Lunes", 6)}</td>
						<td >{this.divContainer("Martes", 6)}</td>
						<td >{this.divContainer("Miercoles", 6)}</td>
						<td >{this.divContainer("Jueves", 6)}</td>
						<td >{this.divContainer("Viernes", 6)}</td>
						<td >{this.divContainer("Sabado", 6)}</td>
						<td >{this.divContainer("Domingo", 6)}</td>
					</tr>
					<tr >
						<td >7:00 AM</td>
						<td >{this.divContainer("Lunes", 7)}</td>
						<td >{this.divContainer("Martes", 7)}</td>
						<td >{this.divContainer("Miercoles", 7)}</td>
						<td >{this.divContainer("Jueves", 7)}</td>
						<td >{this.divContainer("Viernes", 7)}</td>
						<td >{this.divContainer("Sabado", 7)}</td>
						<td >{this.divContainer("Domingo", 7)}</td>
					</tr>
					<tr >
						<td >8:00 AM</td>
						<td >{this.divContainer("Lunes", 8)}</td>
						<td >{this.divContainer("Martes", 8)}</td>
						<td >{this.divContainer("Miercoles", 8)}</td>
						<td >{this.divContainer("Jueves", 8)}</td>
						<td >{this.divContainer("Viernes", 8)}</td>
						<td >{this.divContainer("Sabado", 8)}</td>
						<td >{this.divContainer("Domingo", 8)}</td>
					</tr>
					<tr >
						<td >9:00 AM</td>
						<td >{this.divContainer("Lunes", 9)}</td>
						<td >{this.divContainer("Martes", 9)}</td>
						<td >{this.divContainer("Miercoles", 9)}</td>
						<td >{this.divContainer("Jueves", 9)}</td>
						<td >{this.divContainer("Viernes", 9)}</td>
						<td >{this.divContainer("Sabado", 9)}</td>
						<td >{this.divContainer("Domingo", 9)}</td>
					</tr>
					<tr >
						<td >10:00 AM</td>
						<td >{this.divContainer("Lunes", 10)}</td>
						<td >{this.divContainer("Martes", 10)}</td>
						<td >{this.divContainer("Miercoles", 10)}</td>
						<td >{this.divContainer("Jueves", 10)}</td>
						<td >{this.divContainer("Viernes", 10)}</td>
						<td >{this.divContainer("Sabado", 10)}</td>
						<td >{this.divContainer("Domingo", 10)}</td>
					</tr>
					<tr >
						<td >11:00 AM</td>
						<td >{this.divContainer("Lunes", 11)}</td>
						<td >{this.divContainer("Martes", 11)}</td>
						<td >{this.divContainer("Miercoles", 11)}</td>
						<td >{this.divContainer("Jueves", 11)}</td>
						<td >{this.divContainer("Viernes", 11)}</td>
						<td >{this.divContainer("Sabado", 11)}</td>
						<td >{this.divContainer("Domingo", 11)}</td>
					</tr>
					<tr >
						<td >12:00 PM</td>
						<td >{this.divContainer("Lunes", 12)}</td>
						<td >{this.divContainer("Martes", 12)}</td>
						<td >{this.divContainer("Miercoles", 12)}</td>
						<td >{this.divContainer("Jueves", 12)}</td>
						<td >{this.divContainer("Viernes", 12)}</td>
						<td >{this.divContainer("Sabado", 12)}</td>
						<td >{this.divContainer("Domingo", 12)}</td>
					</tr>
					<tr >
						<td >1:00 PM</td>
						<td >{this.divContainer("Lunes", 13)}</td>
						<td >{this.divContainer("Martes", 13)}</td>
						<td >{this.divContainer("Miercoles", 13)}</td>
						<td >{this.divContainer("Jueves", 13)}</td>
						<td >{this.divContainer("Viernes", 13)}</td>
						<td >{this.divContainer("Sabado", 13)}</td>
						<td >{this.divContainer("Domingo", 13)}</td>
					</tr>
					<tr >
						<td >2:00 PM</td>
						<td >{this.divContainer("Lunes", 14)}</td>
						<td >{this.divContainer("Martes", 14)}</td>
						<td >{this.divContainer("Miercoles", 14)}</td>
						<td >{this.divContainer("Jueves", 14)}</td>
						<td >{this.divContainer("Viernes", 14)}</td>
						<td >{this.divContainer("Sabado", 14)}</td>
						<td >{this.divContainer("Domingo", 14)}</td>
					</tr>
					<tr >
						<td >3:00 PM</td>
						<td >{this.divContainer("Lunes", 15)}</td>
						<td >{this.divContainer("Martes", 15)}</td>
						<td >{this.divContainer("Miercoles", 15)}</td>
						<td >{this.divContainer("Jueves", 15)}</td>
						<td >{this.divContainer("Viernes", 15)}</td>
						<td >{this.divContainer("Sabado", 15)}</td>
						<td >{this.divContainer("Domingo", 15)}</td>
					</tr>
					<tr >
						<td >4:00 PM</td>
						<td >{this.divContainer("Lunes", 16)}</td>
						<td >{this.divContainer("Martes", 16)}</td>
						<td >{this.divContainer("Miercoles", 16)}</td>
						<td >{this.divContainer("Jueves", 16)}</td>
						<td >{this.divContainer("Viernes", 16)}</td>
						<td >{this.divContainer("Sabado", 16)}</td>
						<td >{this.divContainer("Domingo", 16)}</td>
					</tr>
					<tr >
						<td >5:00 PM</td>
						<td >{this.divContainer("Lunes", 17)}</td>
						<td >{this.divContainer("Martes", 17)}</td>
						<td >{this.divContainer("Miercoles", 17)}</td>
						<td >{this.divContainer("Jueves", 17)}</td>
						<td >{this.divContainer("Viernes", 17)}</td>
						<td >{this.divContainer("Sabado", 17)}</td>
						<td >{this.divContainer("Domingo", 17)}</td>
					</tr>
					<tr >
						<td >6:00 PM</td>
						<td >{this.divContainer("Lunes", 18)}</td>
						<td >{this.divContainer("Martes", 18)}</td>
						<td >{this.divContainer("Miercoles", 18)}</td>
						<td >{this.divContainer("Jueves", 18)}</td>
						<td >{this.divContainer("Viernes", 18)}</td>
						<td >{this.divContainer("Sabado", 18)}</td>
						<td >{this.divContainer("Domingo", 18)}</td>
					</tr>
					<tr >
						<td >7:00 PM</td>
						<td >{this.divContainer("Lunes", 19)}</td>
						<td >{this.divContainer("Martes", 19)}</td>
						<td >{this.divContainer("Miercoles", 19)}</td>
						<td >{this.divContainer("Jueves", 19)}</td>
						<td >{this.divContainer("Viernes", 19)}</td>
						<td >{this.divContainer("Sabado", 19)}</td>
						<td >{this.divContainer("Domingo", 19)}</td>
					</tr>
					<tr >
						<td >8:00 PM</td>
						<td >{this.divContainer("Lunes", 20)}</td>
						<td >{this.divContainer("Martes", 20)}</td>
						<td >{this.divContainer("Miercoles", 20)}</td>
						<td >{this.divContainer("Jueves", 20)}</td>
						<td >{this.divContainer("Viernes", 20)}</td>
						<td >{this.divContainer("Sabado", 20)}</td>
						<td >{this.divContainer("Domingo", 20)}</td>
					</tr>
					<tr >
						<td >9:00 PM</td>
						<td >{this.divContainer("Lunes", 21)}</td>
						<td >{this.divContainer("Martes", 21)}</td>
						<td >{this.divContainer("Miercoles", 21)}</td>
						<td >{this.divContainer("Jueves", 21)}</td>
						<td >{this.divContainer("Viernes", 21)}</td>
						<td >{this.divContainer("Sabado", 21)}</td>
						<td >{this.divContainer("Domingo", 21)}</td>
					</tr>
					
				</tbody>
				
			</table>
			</div>
		)
	}
}



