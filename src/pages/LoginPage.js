import React from 'react';
const LoginPage = () => {
  return ( 
    <div>
      <label>
        Podaj login <input type="text"></input>
      </label>
      <br></br>
      <label>
        Podaj hasło <input type="password"></input>
      </label>
      <br></br>
      <button>Zaloguj</button>
    </div>
   );
}
 
export default LoginPage;