const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, name }) => (
            <div key={id}>{name}</div>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;