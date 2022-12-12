import { useState } from 'react';

export default function TodoFooter({ filterProp }) {
  const [buttonName, setButtonName] = useState('Show Completed');
  function handleClick() {
    if (buttonName === 'Show Completed') {
      setButtonName('Show Pending');
      filterProp('showCompleted');
    }
    if (buttonName === 'Show Pending') {
      setButtonName('Show All');
    }
    if (buttonName === 'Show All') {
      setButtonName('Show Completed');
    }
  }

  return (
    <>
      <button onClick={handleClick}>{buttonName}</button>
      <button>DeleteCompleted</button>
      <button>DeleteAll</button>
    </>
  );
}
