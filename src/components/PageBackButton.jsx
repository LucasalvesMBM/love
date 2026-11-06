import './PageBackButton.css';

function PageBackButton({ onBack }) {
  return (
    <button
      className="page-back-button"
      type="button"
      aria-label="Voltar para a página anterior"
      title="Voltar"
      onClick={onBack}
    >
      <span aria-hidden="true">←</span>
    </button>
  );
}

export default PageBackButton;
