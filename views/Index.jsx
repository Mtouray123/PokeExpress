const React = require('react');

const Index = ({ pokemon }) => {
  return (
    <div>
      <h1>See All Pokemon</h1>
      <ul>
        {pokemon.map(p => (
          <li key={p._id}>
            <a href={`/pokemon/${p._id}`}>{p.name}</a> - {p.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

module.exports = Index;