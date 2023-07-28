import './Medos.css';
import React from 'react';
import parte1 from '../assets/parte1.png';
import parte2 from '../assets/parte2.png';
import parte3 from '../assets/parte3.png';
import sangue1 from '../assets/sangue1.png';
import sangue2 from '../assets/sangue2.png';
import sangue3 from '../assets/sangue3.png';

export default function Medos()
{
    return(
        <div>
            <div className='geral'>
                    <h1 className='medos'>MEDOS</h1>
                    <p className='combater'>Como combater</p>

                    <img src={ parte1 } alt="Imagem" className='card'></img>
                    <img src={ parte2 } alt="Imagem" className='card'></img>
                    <img src={ parte3 } alt="Imagem" className='card'></img>
                
                
                    <h1 className='criterios'>CRITÉRIOS</h1>
                    <p className='doar'>Para doar sangue</p>
                    <p className='lista'>- Estar em boas condições de saúde.</p>
                    <p className='lista'>- Ter entre 16 e 69 anos, (menores de 18 anos, com autorização).</p>
                    <p className='lista'>- Pesar no mínimo 50kg.</p>
                    <p className='lista'>- Estar descansado (ter dormido pelo menos 6 horas nas últimas 24 horas).</p>
                    <p className='lista'>-  Apresentar documento original com foto recente</p>
                    <p className='lista'>-  Estar alimentado (evitar alimentação gordurosa nas 4 horas que antecedem a doação).</p>
                

                
                    <h1 className='beneficios'>BENEFICIOS</h1>
                    <p className='apos'>Após doar sangue</p>
                
                    <img src={ sangue1 } alt="Imagem" className='card'></img>
                    <img src={ sangue2 } alt="Imagem" className='card'></img>
                    <img src={ sangue3 } alt="Imagem" className='card'></img>
            </div>
        </div>
    )
}