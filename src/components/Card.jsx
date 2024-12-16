import LikeButton from './LikeButton';

function Card({ titulo, imagen, texto }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '6px',
      width: '200px',
      margin: '10px',
      padding: '10px',
      textAlign: 'center'
    }}>
      <img src={imagen} alt="imagen" style={{ maxWidth: '100%' }} />
      <h2>{titulo}</h2>
      <p>{texto}</p>
      <LikeButton />
    </div>
  );
}

export default Card;
