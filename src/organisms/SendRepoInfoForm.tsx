import { useState, ChangeEvent } from "react";
import InputWithLabel from "../molecules/InputWithLabel";
export default function SendRepoInfoForm() {
  const [formData, setFormData] = useState({
    username: "",
    repoName: "",
  });

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

  return (
    <form onSubmit={handleSubmit}>
      <InputWithLabel
        label="Username"
        name="username"
        value={username}
        onChange={updateFormData}
      />
      <InputWithLabel
        label="Repository"
        name="repoName"
        value={repoName}
        onChange={updateFormData}
      />
      <p>/Username: {username}</p>
      <p>/Repository: {repoName}</p>
      <button type="submit">Submit</button>
    </form>
  );
}
