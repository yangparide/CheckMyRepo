import { useState, ChangeEvent } from "react";
import "./SendRepoInfoForm.scss";
import Button from "../atoms/Button";
import LabelWithArrows from "../molecules/LabelWithArrows";
import FinalCheckLabel from "../atoms/FinalCheckLabel";
import isEmail from "validator/lib/isEmail";
import ErrorMessage from "../atoms/ErrorMessage";
const initialState = {
  username: "",
  repoName: "",
};

export function checkFormValueErrors(value: string): boolean {
  return isEmail(value);
}

export default function SendRepoInfoForm() {
  const [formData, setFormData] = useState(initialState);

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
      body: JSON.stringify({
        repoUrl: `https://github.com/${username}/${repoName}`,
        sender: "Paride Rosati",
      }),
    }).then(() => setPhase(4));
  };

  const { username, repoName } = formData;

  const blankUsername = username === "";
  const blankRepoName = repoName === "";

  const isUserNameWithErrors = checkFormValueErrors(username);
  const isRepoNameWithErrors = checkFormValueErrors(repoName);

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
            className={`${isUserNameWithErrors ? "error" : "correct"}`}
            name="username"
            value={username}
            placeholder="Scrivi lo username di GitHub"
            onChange={updateFormData}
          />
          {isUserNameWithErrors && <ErrorMessage />}
        </div>
        <div className={phase !== 2 ? "disabled-phase" : ""}>
          <LabelWithArrows
            label="Repository"
            goToPrevPage={() => setPhase(1)}
            goToNextPage={() => setPhase(3)}
          />
          <input
            className={`${isRepoNameWithErrors ? "error" : "correct"}`}
            name="repoName"
            value={repoName}
            onChange={updateFormData}
            placeholder="Scrivi il nome del repo di GitHub"
          />
          {checkFormValueErrors(repoName) && <ErrorMessage />}
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
        <div className={phase !== 4 ? "disabled-phase" : ""}>
          <h2>Repository mandato!</h2>
          <Button
            onClick={() => {
              setPhase(0);
              setFormData(initialState);
            }}
          >
            Home
          </Button>
        </div>
      </form>
    </div>
  );
}
