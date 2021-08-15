export function Species({ name, language, averageLifespan }) {
  return (
    <li className={'list__item'}>
      <h3 className={'list__name'}>{name}</h3>
      <div className={'list__detail'}>
        <p>language: {language}</p>
        <p>average life span: {averageLifespan}</p>
      </div>
    </li>
  );
}
