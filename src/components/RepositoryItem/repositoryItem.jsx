import "./repositoryItem.css";

const RepositoryItem = (props) => {
  const { repository } = props;
  const { name, description, link } = repository;
  return (
    <li className="root">
      <strong className="name">{name ?? "Default"}</strong>
      <p className="description">{description}</p>
      <a href={link} className="repositories">
        Acessar Repositórios
      </a>
    </li>
  );
};

export default RepositoryItem;
