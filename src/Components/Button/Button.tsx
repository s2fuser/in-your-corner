import React from "react";

type Props = {
  name: string;
  style?: string;
};

const ButtonComponent = ({ name, style }: Props) => {
  return (
    <div>
      <button className={style}>{name}</button>
    </div>
  );
};

export default ButtonComponent;
