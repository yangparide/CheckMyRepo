import "./ErrorMessage.scss";

interface DefaultErrorMessage {
  type?: string;
}

export default function ErrorMessage({ type }: DefaultErrorMessage) {
  const renderErrorMessage = () => {
    switch (type) {
      case "final":
        return (
          <p>
            <b>Attenzione!</b> È necessario inserire tutti i valori per inviare
            la richiesta!
          </p>
        );
      case "missing-var":
        return (
          <p>
            <b>Attenzione!</b> Non è presente la variabile d'ambiente necessaria
            per il funzionamento dell'App!
            <br />
            Leggere file README.md per avere maggiori informazioni!
          </p>
        );
      default:
        return (
          <p>
            <b>Attenzione!</b> Valore non accettabile!
          </p>
        );
    }
  };

  return <div className="error-message-container">{renderErrorMessage()}</div>;
}
