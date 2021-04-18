import React from 'react'

import './horarioSecction.css'
import { BsX } from "react-icons/bs";
import { BsFillImageFill } from "react-icons/bs";
import { AiFillSnippets } from "react-icons/ai";
import { MdHelpOutline } from "react-icons/md";

// import PDF, { Text, AddPage, Line, Image, Html } from 'jspdf-react'
// import html2canvas from 'html2canvas';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


import Table from '../../../table/table'

const HorarioSecction = (props) => {


    function descargarHorarioPDF(){
        const input = document.getElementById('horario');

        html2canvas(input).then((canvas)=>{
            var imgData = canvas.toDataURL("image/png");
            var pdf = new jsPDF('p', 'pt', [canvas.width, canvas.height]);
            var pdfWidth = pdf.internal.pageSize.getWidth();
            var pdfHeight = pdf.internal.pageSize.getHeight();
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save("mypdf.pdf");


            // var width = canvas.width;
            // var height = canvas.height;
            // var millimeters = {};
            // millimeters.width = Math.floor(width * 0.264583);
            // millimeters.height = Math.floor(height * 0.264583);
            // var imgData = canvas.toDataURL(
            //     'image/png');
            // var doc = new jsPDF("p", "mm", "a4");
            // doc.deletePage(1);
            // doc.addPage(millimeters.width, millimeters.height);
            // doc.addImage(imgData, 'PNG', 0, 0);
            // doc.save('WebSiteScreen.pdf');


            // const imgData = canvas.toDataURL('image/png');
            // const pdf = new jsPDF('p', 'mm', [2000, 2000]);
            // pdf.addImage(imgData, 'JPEG', 0, 0, 2000, 2000);
            // pdf.save("download.pdf");
        }
        )


        // html2canvas(document.querySelector("#horario")).then(canvas => {
        //     document.body.appendChild(canvas)
        // });

    }

    function descargarHorarioIMG(){
        const input = document.getElementById('horario');
        var width = input.attributes
        
        console.log(input)
        console.log(width)

        html2canvas(input).then((canvas)=>{
            var a = document.createElement('a');
            // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
            a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
            a.download = 'somefilename.jpg';
            a.click();
        }
        )


    }

    return (
        <div className="float-window">

            <div className="horario-secction-container">

                <div className="float-button-window">
                        <button className="button-classic trash-button" onClick={props.OpenCloseHorarioPage} ><BsX size={18}/></button>
                </div>

                <div className="informacion-horarioSecction">
                    <MdHelpOutline className="information-hs-icon" size={18}/><span>Verifique el horario y luego seleccione el formato de descarga abajo de esta ventana.</span>
                </div>
                
                <div className="table--mobile">
                    <Table horario={props.horario}></Table>
                </div>
                


                <div className="download-buttons">
                    <button  onClick={()=>{descargarHorarioPDF()}}> <AiFillSnippets size={24}/> <span>Descargar en PDF</span>      </button>
                    <button  onClick={()=>{descargarHorarioIMG()}}> <BsFillImageFill size={24}/> <span>Descargar en JPEG</span>    </button>
                </div>




                
            </div>
            
            
        </div>
    )
}

export default HorarioSecction
