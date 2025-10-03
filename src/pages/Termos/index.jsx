
import { BookCopy } from 'lucide-react'; // Ícone para o cabeçalho da página
import QAPair from 'components/privacy/QAPair';
import InfoBubble from 'components/privacy/InfoBubble';
import { qaData, bubblesData } from 'data/termsOfUseData';
import 'pages/Privacidade/style.css';

const Termos = () => {
    return (
        <>

            <main className="container">
                <div className="privacy-layout-container">
                    <header className="privacy-header">
                        <div className="privacy-title-block">
                            <h1>Termos de Uso</h1>
                        </div>
                        <div className="privacy-security-message">
                            <BookCopy className="icon" />
                            <p>Regras e condições para uso de nossos serviços.</p>
                        </div>
                    </header>

                    <section className="privacy-qa-section">
                        {qaData.map((item, index) => (
                            <QAPair key={index} question={item.question} answer={item.answer} classNamePrefix="privacy-qa" />
                        ))}
                    </section>

                    <section className="privacy-bubbles-section">
                        {bubblesData.map((item, index) => (
                            <InfoBubble
                                key={index}
                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                                classNamePrefix="privacy-info"
                            />
                        ))}
                    </section>
                </div>
            </main>
        </>
    );
};

export default Termos;