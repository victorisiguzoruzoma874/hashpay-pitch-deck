import React from "react";

const AppLogo: React.FC = () => {
  return (

    <img
      src="/logos/logo.jpeg"
      alt="App Logo"
      width={120}
      height={60}
      className="object-cover h-10"
    />

  );
};

export default AppLogo;