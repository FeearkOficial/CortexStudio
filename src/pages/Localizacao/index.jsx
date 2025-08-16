// index.jsx
import { useState } from 'react'; // Importa o hook useState do React para gerenciar o estado
import "./loc-Style.css"

function Localizao() {

    return (
        <> 
        <div className="pts-text1">
        <h1>Visite Nossa Sede</h1>
        <p>Estamos Localizados em Presidente Prudente-SP</p>
    </div>
    {/* <!-- Area-mapa --> */}
    <main className="pts-mapa">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1867.3092794319273!2d-51.4099433531312!3d-22.1165611744771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9493f41627d510f9%3A0x8a3e4ff65ac40dad!2sSenac%20Presidente%20Prudente!5e1!3m2!1spt-BR!2sbr!4v1747767170483!5m2!1spt-BR!2sbr"
            width="800"
            height="600"
            style={{border:0 }}
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            />
        
        {/* <!-- Funcionamento --> */}
        <div className="pts-funcionamento">
            <h1>Horario de Funcionamento</h1>
            <ul>
                <li><strong>Segunda-feira:</strong> 08h as 18h</li>
                <li><strong>Terça-feira:</strong> 08h as 18h</li>
                <li><strong>Quarta-feira:</strong> 08h as 18h</li>
                <li><strong>Quinta-feira:</strong> 08h as 18h</li>
                <li><strong>Sexta-feira:</strong> 08h as 18h</li>
                <li><strong>Sábado:</strong> 08h as 14h</li>
                <li><strong>Domingos e Feriados:</strong> Fechado</li>
            </ul>
            <a href="./Contato">Mais informações</a>
        </div>
    </main>
        </>
    );
}

export default Localizao; // Exporta o componente localização para ser usado em App.jsx