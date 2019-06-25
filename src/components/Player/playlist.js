import React from 'react';

const Track = props => {
  const { data } = props;
  return (
    <li>
      {data.name}{data.duration}
    </li>
  );
}

const Playlist = props => {
  const { list } = props;
  return (
    <ul>
      {
        list.map(el => <Track data={el} />)
      }
    </ul>
  );
}

export default Playlist;