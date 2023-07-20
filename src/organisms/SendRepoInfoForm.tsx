import { useState, ChangeEvent } from "react";
import "./SendRepoInfoForm.scss";
import Button from "../atoms/Button";
import LabelWithArrows from "../molecules/LabelWithArrows";
import FinalCheckLabel from "../atoms/FinalCheckLabel";
export default function SendRepoInfoForm() {
  const [formData, setFormData] = useState({
    username: "",
    repoName: "",
  });

  const [phase, setPhase] = useState(0);

  const updateFormData = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value.trim() });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { username, repoName } = formData;

    fetch(`https://pushmore.io/webhook/Fumag4FDpBmZq9ncSpQpsBFZ`, {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, repoName }),
    });
  };

  const { username, repoName } = formData;

  const blankUsername = username === "";
  const blankRepoName = repoName === "";

  return (
    <div className="main-form-container">
      <div className={phase !== 0 ? "disabled-phase" : ""}>
        <h1>Benvenuto</h1>
        <p>
          Nelle prossime schermate verrà chiesto di inserire username e nome
          repository del tuo progetto GitHub
        </p>
        <Button onClick={() => setPhase(1)}>Procediamo! →</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={phase !== 1 ? "disabled-phase" : ""}>
          <LabelWithArrows
            label="Username"
            goToPrevPage={() => setPhase(0)}
            goToNextPage={() => setPhase(2)}
          />
          <input
            name="username"
            value={username}
            placeholder="Scrivi lo username di GitHub"
            onChange={updateFormData}
          />
        </div>
        <div className={phase !== 2 ? "disabled-phase" : ""}>
          <LabelWithArrows
            label="Repository"
            goToPrevPage={() => setPhase(1)}
            goToNextPage={() => setPhase(3)}
          />
          <input
            name="repoName"
            value={repoName}
            onChange={updateFormData}
            placeholder="Scrivi il nome del repo di GitHub"
          />
        </div>
        <div className={phase !== 3 ? "disabled-phase" : ""}>
          <LabelWithArrows
            label="Controllo dati inseriti"
            goToPrevPage={() => setPhase(2)}
          />
          <FinalCheckLabel
            isValueBlank={blankUsername}
            placeholder="Username"
            value={username}
          />
          <FinalCheckLabel
            isValueBlank={blankRepoName}
            placeholder="Repository"
            value={repoName}
          />
          {blankUsername === false && blankRepoName === false && (
            <Button type="submit">Invia!</Button>
          )}
        </div>
      </form>
    </div>
  );
}
