import React from 'react'
import styleAcc from "./AccountBox.module.scss"
import AccountLogo from '../svgComponents/AccountLogo';

const AccountBox = ({name,surname,username,cursorStyle, logout, onMouseOut, onMouseOver}) => {
 
  const boxIconStyle =  { "width": '15px' };
 
  return (
    <div className={styleAcc.userDD}>
      <div>
        <AccountLogo 
        style={boxIconStyle}
        />
        <p className={styleAcc.nameSur}>{name} {surname}</p>
      </div>
      <p>{username}@socarpolymer.az</p>
      <button style={cursorStyle} onMouseOver={onMouseOver} onMouseOut={onMouseOut} onClick={logout} >Log Out</button>
    </div>
  );
}

export default AccountBox