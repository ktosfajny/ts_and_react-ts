import {
  ChangeEvent,
  ChangeEventHandler,
  MouseEvent,
  MouseEventHandler,
} from "react";

const EventHandlers = () => {
  //
  //
  //
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {};

  const handleInputChange2 = (e: ChangeEvent<HTMLInputElement>) => {};

  // -------------
  // -------------
  // -------------

  const handleBtnClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log(e);
  };

  const handleBtnclick2 = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e);
  };

  return (
    <>
      <input type="text" onChange={handleInputChange} />
      <input type="text" onChange={handleInputChange2} />
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      <button onClick={handleBtnClick}>KLIKNIJ MNIE</button>
      <button onClick={handleBtnclick2}>KLIKNIJ MNIE</button>
    </>
  );
};

export default EventHandlers;
