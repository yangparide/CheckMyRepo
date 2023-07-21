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
