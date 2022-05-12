import "./repositoryItem.css";

const RepositoryItem = (props) => {
  const { repository } = props;
  const { name, description, html_url } = repository;

  return (
    <li className="root">
      <strong className="name">{name}</strong>
      <p className="description">{description}</p>
      <a href={html_url} className="repositories">
        Acessar Repositórios
      </a>
    </li>
  );
};

export default RepositoryItem;
