import "./repositoryItem.css";

const RepositoryItem = (props) => {
  const { repository } = props;
  const { name, description, link } = repository;
  return (
    <li>
      <strong>{name ?? "Default"}</strong>
      <p>{description}</p>
      <a href={link}>Acessar Repositórios</a>
    </li>
  );
};

export default RepositoryItem;
