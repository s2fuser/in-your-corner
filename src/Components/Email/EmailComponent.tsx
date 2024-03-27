import React from "react";
import { useState } from "react";

type EmailDetails = {
  Email: string;
  setEmail: any;
};

const EmailComponent: React.FC<EmailDetails> = ({ Email, setEmail }) => {
  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  return (
    <div className="text-center">
      <p className="raleway mb-[20px]">E-mail</p>
      <input
        type="text"
        className="border-b border-gray-400 focus:outline-none focus:border-gray-500 w-[350px]"
        value={Email}
        onChange={handleEmailChange}
      />
    </div>
  );
};

export default EmailComponent;
