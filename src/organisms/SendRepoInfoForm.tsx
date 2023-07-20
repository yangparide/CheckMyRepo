import { useState, ChangeEvent } from "react";
import InputWithLabel from "../molecules/InputWithLabel";
export default function SendRepoInfoForm() {
  const [formData, setFormData] = useState({
    username: "",
    repoName: "",
  });

  const updateFormData = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const { username, repoName } = formData;

  return (
    <form>
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
    </form>
  );
}
