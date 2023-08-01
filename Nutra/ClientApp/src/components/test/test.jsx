import { useState } from "react";

export default function CustomInput() {
  const [value, setValue] = useState("");
  const [width, setWidth] = useState(100);

  function handleClick() {
    setWidth(width + 50);
  }

  return (
    <>
      <input type="text" value={value} width={width + "px"} />
      <button onClick={handleClick}>Change width</button>
    </>
  );

  
  // const [value, setValue] = useState("");
  // const [width, setWidth] = useState(100);
  // return (
  //   <>
  //     <input
  //       type="text"
  //       value={value}
  //       width={width+"px"}
  //       onChange={(event) => setValue(event.target.value)}
  //     />
  //     <button onClick={() => setWidth(width + 50)}>
  //       Change width
  //     </button>
  //   </>
  // );
}
