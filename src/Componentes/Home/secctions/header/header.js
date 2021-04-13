import React from 'react'

//estilos
import './header.css'

const Header = () => {
    return (
        <div className="header-principal">
            <div className="header-contenedor">
                <div className="header-text">
                    
                    <h1>Generador de horarios</h1>
                    <p>Con esta aplicacion tienes la posibilidad de generar a tu gusto un horario</p>
                    <button>Generar el mio</button>
                </div>

                <div className="header-image">
                    <svg  viewBox="0 0 1133 768" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="undraw_schedule_pnbk 1">
                        <g id="Ventana">
                        <path id="Vector" d="M1048.71 48.88H87.83C85.5598 48.88 83.3825 49.7819 81.7772 51.3872C80.1719 52.9925 79.27 55.1698 79.27 57.44V82.38H1057.27V57.44C1057.27 55.1698 1056.37 52.9925 1054.76 51.3872C1053.16 49.7819 1050.98 48.88 1048.71 48.88V48.88Z" fill="#3F3D56"/>
                        <path id="Vector_2" d="M79.27 82.38V643.62C79.27 648.198 81.0885 652.588 84.3254 655.825C87.5622 659.062 91.9524 660.88 96.53 660.88H1040.01C1044.59 660.88 1048.98 659.062 1052.21 655.825C1055.45 652.588 1057.27 648.198 1057.27 643.62V82.38H79.27Z" fill="white"/>
                        <path id="Vector_3" opacity="0.8" d="M94.77 69.37C96.9791 69.37 98.77 67.5791 98.77 65.37C98.77 63.1609 96.9791 61.37 94.77 61.37C92.5608 61.37 90.77 63.1609 90.77 65.37C90.77 67.5791 92.5608 69.37 94.77 69.37Z" fill="#FA5959"/>
                        <path id="Vector_4" opacity="0.8" d="M105.77 69.37C107.979 69.37 109.77 67.5791 109.77 65.37C109.77 63.1609 107.979 61.37 105.77 61.37C103.561 61.37 101.77 63.1609 101.77 65.37C101.77 67.5791 103.561 69.37 105.77 69.37Z" fill="#FED253"/>
                        <path id="Vector_5" opacity="0.8" d="M116.77 69.37C118.979 69.37 120.77 67.5791 120.77 65.37C120.77 63.1609 118.979 61.37 116.77 61.37C114.561 61.37 112.77 63.1609 112.77 65.37C112.77 67.5791 114.561 69.37 116.77 69.37Z" fill="#8CCF4D"/>
                        </g>
                        <g id="Group" opacity="0.3">
                        <path id="Vector_6" opacity="0.3" d="M1020.77 116.37H116.77V626.37H1020.77V116.37Z" stroke="#3F3D56" stroke-miterlimit="10"/>
                        <path id="Vector_7" opacity="0.3" d="M902.77 116.37H234.77V626.37H902.77V116.37Z" stroke="#3F3D56" stroke-miterlimit="10"/>
                        <path id="Vector_8" opacity="0.3" d="M784.77 116.37H352.77V626.37H784.77V116.37Z" stroke="#3F3D56" stroke-miterlimit="10"/>
                        <path id="Vector_9" opacity="0.3" d="M666.77 116.37H470.77V626.37H666.77V116.37Z" stroke="#3F3D56" stroke-miterlimit="10"/>
                        <path id="Vector_10" opacity="0.3" d="M568.77 116.37V626.37" stroke="#3F3D56" stroke-miterlimit="10"/>
                        <path id="Vector_11" opacity="0.3" d="M1020.77 190.37H116.77V552.37H1020.77V190.37Z" stroke="#3F3D56" stroke-miterlimit="10"/>
                        <path id="Vector_12" opacity="0.3" d="M1020.77 263.37H116.77V479.37H1020.77V263.37Z" stroke="#3F3D56" stroke-miterlimit="10"/>
                        <path id="Vector_13" opacity="0.3" d="M1020.77 336.37H116.77V406.37H1020.77V336.37Z" stroke="#3F3D56" stroke-miterlimit="10"/>
                        </g>
                        <path id="Vector_14" opacity="0.1" d="M329.27 144.87H258.27V170.87H329.27V144.87Z" fill="#3F3D56"/>
                        <path id="Vector_15" opacity="0.1" d="M200.27 215.87H147.27V241.87H200.27V215.87Z" fill="#3F3D56"/>
                        <path id="Vector_16" opacity="0.1" d="M444.27 144.87H373.27V170.87H444.27V144.87Z" fill="#3F3D56"/>
                        <path id="Vector_17" opacity="0.1" d="M552.27 144.87H481.27V170.87H552.27V144.87Z" fill="#3F3D56"/>
                        <path id="Vector_18" opacity="0.1" d="M652.27 144.87H581.27V170.87H652.27V144.87Z" fill="#3F3D56"/>
                        <path id="Vector_19" opacity="0.1" d="M764.27 144.87H693.27V170.87H764.27V144.87Z" fill="#3F3D56"/>
                        <path id="Vector_20" opacity="0.1" d="M878.27 144.87H807.27V170.87H878.27V144.87Z" fill="#3F3D56"/>
                        <path id="Vector_21" opacity="0.1" d="M999.27 144.87H928.27V170.87H999.27V144.87Z" fill="#3F3D56"/>
                        <path id="Vector_22" d="M444.92 285.82H398.79V330.48H444.92V285.82Z" fill="url(#paint0_linear)"/>
                        <path id="Vector_23" d="M539.96 276.14H493.83V320.8H539.96V276.14Z" fill="url(#paint1_linear)"/>
                        <path id="Vector_24" d="M722.96 428.14H676.83V472.8H722.96V428.14Z" fill="url(#paint2_linear)"/>
                        <path id="Vector_25" d="M316.7 206.23H270.57V250.89H316.7V206.23Z" fill="url(#paint3_linear)"/>
                        <path id="Vector_26" d="M408.36 270.23H362.23V314.89H408.36V270.23Z" fill="url(#paint4_linear)"/>
                        <path id="Vector_27" d="M776.92 427.82H730.79V472.48H776.92V427.82Z" fill="url(#paint5_linear)"/>
                        <path id="Vector_28" d="M857.92 206.82H811.79V251.48H857.92V206.82Z" fill="url(#paint6_linear)"/>
                        <path id="Vector_29" d="M852.92 348.82H806.79V393.48H852.92V348.82Z" fill="url(#paint7_linear)"/>
                        <path id="Vector_30" d="M887.92 358.82H841.79V403.48H887.92V358.82Z" fill="url(#paint8_linear)"/>
                        <path id="Vector_31" d="M740.36 412.23H694.23V456.89H740.36V412.23Z" fill="url(#paint9_linear)"/>
                        <path id="Vector_32" d="M745.36 277.23H699.23V321.89H745.36V277.23Z" fill="url(#paint10_linear)"/>
                        <path id="Vector_33" opacity="0.1" d="M200.27 285.87H147.27V311.87H200.27V285.87Z" fill="#3F3D56"/>
                        <path id="Vector_34" opacity="0.1" d="M200.27 358.87H147.27V384.87H200.27V358.87Z" fill="#3F3D56"/>
                        <path id="Vector_35" opacity="0.1" d="M200.27 431.87H147.27V457.87H200.27V431.87Z" fill="#3F3D56"/>
                        <path id="Vector_36" opacity="0.1" d="M200.27 504.87H147.27V530.87H200.27V504.87Z" fill="#3F3D56"/>
                        <path id="Vector_37" opacity="0.1" d="M200.27 577.87H147.27V603.87H200.27V577.87Z" fill="#3F3D56"/>
                        <path id="Vector_38" d="M300.92 348.82H254.79V393.48H300.92V348.82Z" fill="url(#paint11_linear)"/>
                        <g id="Tarjetas">
                        <path id="Vector_39" d="M444.13 286.59H399.59V329.71H444.13V286.59Z" fill="#4CC9F0"/>
                        <path id="Vector_40" d="M539.17 276.91H494.63V320.03H539.17V276.91Z" fill="#F72585"/>
                        <path id="Vector_41" d="M722.17 428.91H677.63V472.03H722.17V428.91Z" fill="#F72585"/>
                        <path id="Vector_42" d="M315.9 207H271.36V250.12H315.9V207Z" fill="#F72585"/>
                        <path id="Vector_43" d="M407.56 271H363.02V314.12H407.56V271Z" fill="#480CA8"/>
                        <path id="Vector_44" d="M776.13 428.59H731.59V471.71H776.13V428.59Z" fill="#4CC9F0"/>
                        <path id="Vector_45" d="M857.13 207.59H812.59V250.71H857.13V207.59Z" fill="#4CC9F0"/>
                        <path id="Vector_46" d="M852.13 349.59H807.59V392.71H852.13V349.59Z" fill="#4CC9F0"/>
                        <path id="Vector_47" d="M887.13 359.59H842.59V402.71H887.13V359.59Z" fill="#4CC9F0"/>
                        <path id="Vector_48" d="M739.56 413H695.02V456.12H739.56V413Z" fill="#480CA8"/>
                        <path id="Vector_49" d="M744.56 278H700.02V321.12H744.56V278Z" fill="#480CA8"/>
                        <path id="Vector_50" d="M300.13 349.59H255.59V392.71H300.13V349.59Z" fill="#4CC9F0"/>
                        </g>
                        </g>
                        <defs>
                        <linearGradient id="paint0_linear" x1="421.86" y1="330.48" x2="421.86" y2="285.82" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#808080" stop-opacity="0.25"/>
                        <stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
                        <stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="24338.4" y1="14603.1" x2="24338.4" y2="12608.5" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#808080" stop-opacity="0.25"/>
                        <stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
                        <stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear" x1="32963.2" y1="21543.4" x2="32963.2" y2="19548.9" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#808080" stop-opacity="0.25"/>
                        <stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
                        <stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
                        </linearGradient>
                        <linearGradient id="paint3_linear" x1="13815.7" y1="11411" x2="13815.7" y2="9416.46" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#808080" stop-opacity="0.25"/>
                        <stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
                        <stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
                        </linearGradient>
                        <linearGradient id="paint4_linear" x1="18135.6" y1="14333.2" x2="18135.6" y2="12338.7" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#808080" stop-opacity="0.25"/>
                        <stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
                        <stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
                        </linearGradient>
                        <linearGradient id="paint5_linear" x1="35506.4" y1="21528.8" x2="35506.4" y2="19534.3" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#808080" stop-opacity="0.25"/>
                        <stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
                        <stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
                        </linearGradient>
                        <linearGradient id="paint6_linear" x1="39323.9" y1="11437.9" x2="39323.9" y2="9443.4" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#808080" stop-opacity="0.25"/>
                        <stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
                        <stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
                        </linearGradient>
                        <linearGradient id="paint7_linear" x1="39088.2" y1="17921.6" x2="39088.2" y2="15927.1" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#808080" stop-opacity="0.25"/>
                        <stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
                        <stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
                        </linearGradient>
                        <linearGradient id="paint8_linear" x1="40737.8" y1="18378.2" x2="40737.8" y2="16383.7" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#808080" stop-opacity="0.25"/>
                        <stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
                        <stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
                        </linearGradient>
                        <linearGradient id="paint9_linear" x1="33782.8" y1="20816.9" x2="33782.8" y2="18822.4" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#808080" stop-opacity="0.25"/>
                        <stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
                        <stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
                        </linearGradient>
                        <linearGradient id="paint10_linear" x1="34018.5" y1="14652.8" x2="34018.5" y2="12658.3" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#808080" stop-opacity="0.25"/>
                        <stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
                        <stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
                        </linearGradient>
                        <linearGradient id="paint11_linear" x1="13072.5" y1="17921.6" x2="13072.5" y2="15927.1" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#808080" stop-opacity="0.25"/>
                        <stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
                        <stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
                        </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Header
