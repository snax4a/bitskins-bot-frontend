import React from "react";

import { accountService } from "@/_services";

function Skins() {
  const user = accountService.userValue;

  return (
    <div className="p-4">
      <div className="container">
        <h1>Hi {user.firstName}!</h1>
        <p>There is a list of skins that you want to buy</p>
      </div>
    </div>
  );
}

export { Skins };
