// index.jsx
import { useState } from 'react'; // Importa o hook useState do React para gerenciar o estado
import "./Adota-Style.css"
import ReactCardFlip from 'react-card-flip';

function Adota() {

  return (
    <>
      <header className="area-header" id="header" />
      <nav className="pts-navDoacao">
        <div className="pts-textDoacao">
          <h2>Bem-vindo(a) ao nosso</h2>
          <h1>Site de adoção online</h1>
          <h3>
            Estamos muito felizes de ter você aqui! Seu apoio é essencial para
            continuarmos resgatando, reabilitando e encontrando lares cheios de amor
            para esses patudinhos! Adotar é um ato de amor que transforma todas as
            vidas ao redor. Aqui você conhecerá a história de vida dos nossos
            resgatados que receberam tratamentos e cuidados no nosso hospital
            veterinário e agora aguardam pelo seu final feliz, a adoção!
          </h3>
          <a href="vakinha.html" className="pts-ajuda">
            Não posso adotar agora, mas quero ajudar!
          </a>
        </div>
        <div className="pts-imgAdotantes">
          <img src="../assets/img/Adotantes.png.webp" alt="Adotantes" />
        </div>
      </nav>

      
      <hr className="minha-linha2" />
      
      <div className="grid-container">
        <div className="flip-wrapper">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="../assets/img/pets/bradock.webp" alt="Bradock" />
              </div>
              <div className="flip-card-back">
                <h2>Bradock</h2>
                <p>Macho</p>
                <p>Sem raça definida</p>
                <p>4 Anos</p>
                <p>No abrigo desde 21/10/2024</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-wrapper">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="../assets/img/pets/Alcides.webp" alt="Alcides" />
              </div>
              <div className="flip-card-back">
                <h2>Alcides</h2>
                <p>Macho</p>
                <p>Sem raça definida</p>
                <p>8 Anos</p>
                <p>No abrigo desde 18/9/2024</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-wrapper">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="../assets/img/pets/Barone.webp" alt="Barone" />
              </div>
              <div className="flip-card-back">
                <h2>Barone</h2>
                <p>Macho</p>
                <p>Sem raça definida</p>
                <p>5 Anos</p>
                <p>No abrigo desde 27/10/2024</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-wrapper">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="../assets/img/pets/Claus.jpg" alt="Claus" />
              </div>
              <div className="flip-card-back">
                <h2>Claus</h2>
                <p>Macho</p>
                <p>Sem raça definida</p>
                <p>5 Anos</p>
                <p>No abrigo desde 18/12/2024</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-wrapper">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="../assets/img/pets/Darius.webp" alt="Darius" />
              </div>
              <div className="flip-card-back">
                <h2>Darius</h2>
                <p>Macho</p>
                <p>Sem raça definida</p>
                <p>3 Anos</p>
                <p>No abrigo desde 16/11/2021</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-wrapper">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="../assets/img/pets/Domênico.webp" alt="Domênico" />
              </div>
              <div className="flip-card-back">
                <h2>Domênico</h2>
                <p>Macho</p>
                <p>Sem raça definida</p>
                <p>2 Anos</p>
                <p>No abrigo desde 01/10/2024</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-wrapper">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="../assets/img/pets/Stelar.webp" alt="Stelar" />
              </div>
              <div className="flip-card-back">
                <h2>Stelar</h2>
                <p>Fêmea</p>
                <p>PITBULL</p>
                <p>3 Anos</p>
                <p>No abrigo desde 15/11/2024</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-wrapper">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="../assets/img/pets/Zury.webp" alt="Zury" />
              </div>
              <div className="flip-card-back">
                <h2>Zury</h2>
                <p>Fêmea</p>
                <p>Sem raça definida</p>
                <p>1 Anos</p>
                <p>No abrigo desde 23/01/2024</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-wrapper">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="../assets/img/pets/Ronaldinho.jpg" alt="Ronaldinho" />
              </div>
              <div className="flip-card-back">
                <h2>Ronaldinho</h2>
                <p>Macho</p>
                <p>Sem raça definida</p>
                <p>5 Anos</p>
                <p>No abrigo desde 04/08/2021</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-wrapper">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="../assets/img/pets/zezo.webp" alt="Zezo" />
              </div>
              <div className="flip-card-back">
                <h2>Zezo</h2>
                <p>Macho</p>
                <p>Sem raça definida</p>
                <p>6 Anos</p>
                <p>No abrigo desde 15/02/2022</p>
                <p>Cão Paraplégico</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-wrapper">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="../assets/img/pets/tibirinho.webp" alt="tibirinho" />
              </div>
              <div className="flip-card-back">
                <h2>Tibirinho</h2>
                <p>Macho</p>
                <p>Sem raça definida</p>
                <p>5 Anos</p>
                <p>No abrigo desde 24/09/2022</p>
                <p>Cão Paraplégico</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-wrapper">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="../assets/img/pets/Muffie.webp" alt="Muffie" />
              </div>
              <div className="flip-card-back">
                <h2>Muffie</h2>
                <p>Macho</p>
                <p>Sem raça definida</p>
                <p>5 Anos</p>
                <p>No abrigo desde 20/03/2021</p>
                <p>Cão Paraplégico</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <hr className="minha-linha2" />


      <div className="pts-text">
        <h1 className="pts-textDuvidas">Tem alguma dúvida?</h1>
      </div>

      
      <div className="faq">
        <hr className="minha-linha" />
        <details>
          <summary>Apenas pessoas de Presidente Prudente-SP podem adotar?</summary>
          <div className="answer">
            Preferencialmente apenas pessoas de Presidente Prudente-SP e Região
            adotam no Patas do Amanhã, mas abrimos exceções em casos específicos.
            Sempre há um animal abandonado, um centro de controle de zoonoses ou uma
            ONG local em cada cidade com muitos animais a espera de um lar, então dê
            preferência para quem está próximo de você! Os animais passam por fase
            de adaptação e estando longe fica mais complicado pra darmos todo
            suporte necessário nesse período.
          </div>
        </details>
        <hr className="minha-linha" />
        <details>
          <summary>
            Só preencher o formalário já garante que serei o adotante do animal que
            escolhi?
          </summary>
          <div className="answer">
            Preencher o formulário é apenas a fase inicial do processo! Em seguida
            nossa equipe irá verificar a segurança da casa de acordo com o animal
            escolhido, o suporte que o adotante consegue dar de acordo com as
            questões de saúde que o animal apresenta, saber se a personalidade do
            animal é compatível com a rotina da família e em alguns casos muitas
            pessoas se candidatam para adotar o mesmo animal, então respeitando
            esses quesitos escolhemos a família que mais se encaixa ao animal e se
            não for a sua você poderá se candidatar para outro animalzinho!
          </div>
        </details>
        <hr className="minha-linha" />
        <details>
          <summary>
            Eu preciso buscar o animal do instituto ou vocês o trazem até minha
            casa?
          </summary>
          <div className="answer">
            A preferência é que o adotante venha buscar no abrigo, assim tem a
            oportunidade de conhecer nosso trabalho de perto, tem tempo e disposição
            de escutar todas as recomendações de nossas veterinárias e caso não seja
            seu "match" tem a chance de conhecer outro animal alí mesmo.
          </div>
        </details>
        <hr className="minha-linha" />
        <details>
          <summary>Posso adotar mais de um animal?</summary>
          <div className="answer">
            Desde que você tenha as condições financeiras e espaço para isso e os
            animais escolhidos se aceitem, claro, inclusive dois animais interagindo
            fazem a adaptação acontecer de forma mais fácil. Assim eles tem a
            companhia um do outro quando você não estiver em casa!
          </div>
        </details>
        <hr className="minha-linha" />
        <details>
          <summary>Essa página é segura? Como posso me certificar?</summary>
          <div className="answer">
            Sim, essa página está hospedada em ambiente seguro e possui certificado
            de segurança SSL. Para verificar, observe se o endereço no seu navegador
            começa com "https" e clique no cadeado ao lado esquerdo.
          </div>
        </details>
        <hr className="minha-linha" />
        <details>
          <summary>
            Caso opte por cancelar a minha doação recorrente no futuro, é possivel?
          </summary>
          <div className="answer">
            Sim, é possível, você pode definir o melhor dia para que a cobrança seja
            realizada no seu cartão de crédito ou vencimento do boleto. Basta enviar
            um email para: Suporte@pts.org
          </div>
        </details>
        <hr className="minha-linha" />
      </div>
    </>

  );
}


export default Adota; // Exporta o componente localização para ser usado em App.jsxnom