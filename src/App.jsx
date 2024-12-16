import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>Trabajo 3 diseño de software</h1>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <Card 
          titulo="Pikachu inicio semestre"
          imagen="https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/7IIEAYYWP5GTDDZ5YLJBGHLU5A.jpg"
          texto="Nada hacía presagiar..."
        />
        <Card 
          titulo="Pikachu fin semestre"
          imagen="https://gartic.com.br/imgs/mural/kh/khayt/pikachu-feliz.png"
          texto="Algo de esperanza queda en sus ojos"
        />
      </div>
    </div>
  );
}

export default App;
