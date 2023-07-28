import './Principal.css';
import React from 'react';
import imagem from '../assets/imgHemocentro.png';
import imagemLogin from '../assets/logo.png';
import imagemCarrossel from  '../assets/imgCarrossel1.png';
import imagemCard1 from '../assets/card1.png';
import imagemCard2 from '../assets/card2.png';
import imagemCard3 from '../assets/card3.png';
import imagemCard4 from '../assets/card4.png';
import imagemCard5 from '../assets/card5.png';
import imagemCard6 from '../assets/card6.png';
import estoqueDeSangue from '../assets/estoque.png';
import {Link} from 'react-router-dom';

export default function Principal()
{
    return(
    <>
        <main>
            <Link to="/venha-doar" className='link'>
                <img src={ imagemCarrossel } alt="Imagem" className='imagemCarrossel'></img>
            </Link>
            

            <div className='fundo'>
                <div className='card'>
                    <a href='https://www.hemocentro.unicamp.br/doencas-de-sangue/tromboses-venenosas-e-arteriais/' target="_blank">
                        <img src={ imagemCard1 } alt="ImagemCard" className='imagemCard'></img>
                    </a>                   
                </div>

                <div className='card'>
                    <a href='https://www.hemocentro.unicamp.br/doencas-de-sangue/leucemias-e-linfomas/' target="_blank">
                        <img src={ imagemCard2 } alt="ImagemCard" className='imagemCard'></img>
                    </a>
                </div>

                <div className='card'>
                    <a href='https://www.hemocentro.unicamp.br/doencas-de-sangue/anemias/' target="_blank">
                        <img src={ imagemCard3 } alt="ImagemCard" className='imagemCard'></img>
                    </a>
                </div>

                <div className='card'>
                    <a href='https://www.hemocentro.unicamp.br/doencas-de-sangue/doencas-hemorragicas/' target="_blank">
                        <img src={ imagemCard4 } alt="ImagemCard" className='imagemCard'></img>
                    </a>
                </div>

                <div className='card'>
                    <a href='https://www.hemocentro.unicamp.br/doencas-de-sangue/hemoglobinopatias/' target="_blank">
                        <img src={ imagemCard5 } alt="ImagemCard" className='imagemCard'></img>
                    </a>
                </div>

                <div className='card'>
                    <a href='https://www.hemocentro.unicamp.br/doencas-de-sangue/mieloma-multiplo-e-outras-gamopatias/' target="_blank">
                        <img src={ imagemCard6 } alt="ImagemCard" className='imagemCard'></img>
                    </a>
                </div>

                <a href='https://www.google.com/maps/place/Hemocentro+Unicamp/@-22.8287076,-47.064613,17z/data=!3m1!4b1!4m6!3m5!1s0x94c8c6a6b3183c95:0xf13cce636ebbea7d!8m2!3d-22.8287076!4d-47.0624243!16s%2Fg%2F120p542j?entry=ttu' target="_blank">
                    <img src={ imagem } alt="Imagem" className='imagemHemo'></img>
                </a>
            
                <img src={ estoqueDeSangue } alt="Imagem" className='estoque'></img>

            </div>
        </main>

        {/* <div className='rodape'>
            <img src={ imagemLogin } alt="Imagem" className='imagemRodape'></img>
        </div> */}
    </>
    )
}