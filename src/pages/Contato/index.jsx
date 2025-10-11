
import FeatureItem from 'components/features/FeatureItem';
import { featuresData } from 'data/featuresData';       
const Contato = () => {
  const diagnosticoGratuito = featuresData.find(
    (feature) => feature.title === 'Diagnóstico Gratuito'
  );

  return (
    <main>
      <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center' }}>
        {diagnosticoGratuito && <FeatureItem {...diagnosticoGratuito} />}
      </div>
    </main>
  );
};

export default Contato;