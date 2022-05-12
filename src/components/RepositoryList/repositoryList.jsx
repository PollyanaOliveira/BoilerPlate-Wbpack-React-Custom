import RepositoryItem from "../RepositoryItem";
import "./repositoryList.css";

const repository = {
  name: "unform",
  description: "Forms in React",
  link: "https://github.com/unform/unform",
};
const RepositoryList = () => {
  return (
    <section className="root">
      <h1>Lista de Repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
};

export default RepositoryList;
