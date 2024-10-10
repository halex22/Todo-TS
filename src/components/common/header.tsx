import React from "react";

type HeaderProps = {
  title: string;
}


const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <section className="flex justify-center my-4">
      <header>
        <h1 className="font-bold text-xl">{title}</h1>
      </header>
    </section>
  )
}


export default Header