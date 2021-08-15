export function Person({ name, hairColor, eyeColor }) {
  return (
    <li className={'list__item'}>
      <h3 className={'list__name'}>{name}</h3>
      <div className={'list__detail'}>
        <p>hair: {hairColor}</p>
        <p>eyes: {eyeColor}</p>
      </div>
    </li>
  );
}
