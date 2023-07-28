import './Perguntas.css';
import React from 'react';
import imagem from '../assets/perguntas.png';


export default function Perguntas()
{
    return(
        <>
            <img src={ imagem } alt="Imagem" className='imagemPerguntas'></img>

            <body>
                <section>
                        <details>
                            <summary>Dói doar sangue?</summary>
                            <p>
                                Doar sangue não dói, é fácil, rápido, não afeta a sua saúde e você salva muitas vidas. 
                                O sangue é um composto de células que cumprem funções como levar oxigênio a cada parte do nosso corpo, 
                                defender nosso organismo contra infecções e participar na coagulação. 
                                Não existe nada que substitua o sangue.
                            </p>
                        </details>

                        <details>
                            <summary>Adolescente pode doar sangue?</summary>
                            <p>
                                Adolescentes a partir entre 16 podem doar sangue, desde que a primeira doação ao menores de 18 anos devem 
                                possuir consentimento formal do responsável legal. Já a idade máxima é de 69 anos, pessoas com idade entre 
                                60 e 69 anos só poderão doar sangue se já o tiverem feito antes dos 60 anos.
                            </p>
                        </details>

                        <details>
                            <summary>Quanto tempo demora para doar sangue?</summary>
                            <p>
                                O procedimento todo (cadastro, aferição de sinais vitais, teste de anemia, triagem clínica, 
                                coleta do sangue e lanche) leva cerca de 40 minutos.
                            </p>
                        </details>

                        <details>
                            <summary>Quem não pode doar sangue?</summary>
                            <p>
                                Doenças que impedem a doação: doenças hematológicas, cardíacas, renais, pulmonares, hepáticas, 
                                autoimunes, diabetes, hipertireoidismo, hanseníase, tuberculose, câncer, sangramentos anormais, 
                                convulsões, ou portadores de doenças infecciosas transmissíveis pelo sangue como Doença de Chagas, 
                                Hepatite, AIDS, Sífilis.
                            </p>
                        </details>

                        <details>
                            <summary>Quantas vezes no ano pode doar sangue?</summary>
                            <p>
                                - Homens: 60 dias (máximo de 04 doações nos últimos 12 meses)
                                - Mulheres: 90 dias (máximo de 03 doações nos últimos 12 meses)
                            </p>
                        </details>

                        <details>
                            <summary>Onde eu posso doar sangue</summary>
                            <p>
                                Procure o hemocentro mais próximo e doe sangue regularmente.
                            </p>
                        </details>

                        <details>
                            <summary>Que quantidade de sangue é doada</summary>
                            <p>
                                Uma pessoa adulta tem, em média, cinco litros de sangue em seu organismo. Em cada doação, 
                                podem ser coletados entre 420ml e 470ml de sangue, além de 25ml a 30ml para os exames laboratoriais.
                            </p>
                        </details>
                </section>
            </body>
        </>
    )
}