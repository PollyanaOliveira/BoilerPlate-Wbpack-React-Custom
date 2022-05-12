import RepositoryItem from "../RepositoryItem";
import "./repositoryList.css";

const repository = {
  name: "unform",
  description: "Forms in React",
  link: "https://github.com/unform/unform",
};
const RepositoryList = () => {
  return (
    <div className="root">
      <h1 className="title">Lista de Repositórios</h1>
      <ul>
        <RepositoryItem repository={repository} />
      </ul>
    </div>
  );
};

export default RepositoryList;
