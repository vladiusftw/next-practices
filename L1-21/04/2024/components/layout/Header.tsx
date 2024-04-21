import React from "react";

type Props = {
    title:string
};

const Header = ({title}: Props) => {
  return <div>{title}</div>;
};

export default Header;
