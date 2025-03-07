import "./Modal.css";

export function Modal({ children, show, onClose }) {
  if (!show) return null;

  return (
    <div className="modal-background">
      <section className="modal-main">
        {children}
        <button className="close" onClick={onClose}>
          &#x2715;
        </button>
      </section>
    </div>
  );
}
