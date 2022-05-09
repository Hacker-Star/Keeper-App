import React from "react";
import Time from "./Time";

function Header() {
  return (
    <div>
      <header>
        <h1>Keeper</h1>
        <time>
          <p>
            <Time />
          </p>
        </time>
      </header>
    </div>
  );
}

export default Header;
