import React from 'react'

const AccountLogo = (props) => {
    return (
        <div onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut} onClick={props.onClick}>
            <svg style={props.style} width="25" height="25" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                
                    <path d="M14.5 0C16.4228 0 18.2669 0.763837 19.6265 2.12348C20.9862 3.48311 21.75 5.32718 21.75 7.25C21.75 9.17282 20.9862 11.0169 19.6265 12.3765C18.2669 13.7362 16.4228 14.5 14.5 14.5C12.5772 14.5 10.7331 13.7362 9.37348 12.3765C8.01384 11.0169 7.25 9.17282 7.25 7.25C7.25 5.32718 8.01384 3.48311 9.37348 2.12348C10.7331 0.763837 12.5772 0 14.5 0ZM14.5 18.125C22.5113 18.125 29 21.3694 29 25.375V29H0V25.375C0 21.3694 6.48875 18.125 14.5 18.125Z" fill="#FFB931" />
               
            </svg>
        </div>
    )
}

export default AccountLogo;