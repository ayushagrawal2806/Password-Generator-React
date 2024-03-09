import { useState } from 'react';
import './password.css'

let PasswordGenerator = () => {
    const [passwordValue , setPasswordValue] = useState("");
    const [passwordLenght , setPasswordLength] = useState(8);
    const [upperCase , setUpperCase] = useState(true);
    const [lowerCase , setLowerCase] = useState(true);
    const [numbers , setNumbers] = useState(true);
    const [symbols , setSymbols] = useState(true);


    let generatePassword = () => {
        let finalpass = "";
        let str = "";
        const uppercase = "ABCDEFGHIJKLMNOPQRSWXYZ";
        const lowercase = "abcdefghijklmnopqrstuvwxyz";
        const number = "0123456789";
        const symbol = "!@#$%^&*()_+-={}|;:'?><\\?/,.~`";
        (upperCase) ? str += uppercase : "";
        (lowerCase) ? str += lowercase : "";
        (numbers) ? str += number : "";
        (symbols) ? str += symbol : "";

        if(str == ""){
            alert("--All checks are empty--");
        }
        else if(passwordLenght < 8 || passwordLenght > 50 || passwordLenght == ""){
            alert("Length out of mentioned range")
        }
        else{
            for(let i = 0;i<passwordLenght;i++){
                let index =   Math.floor(Math.random() * str.length)
                finalpass += str[index];
            }
            setPasswordValue(finalpass);

        }
    }

    let copyToClipboard = () => {
        navigator.clipboard.writeText(passwordValue);
        alert("Password Copied");
    }


    return (
        <div className="main">

            <h1>Password Generator</h1>

            <div className="display_copy">
                <input type="text" value={passwordValue} id="text"  disabled/>
                <button><img src="https://www.freeiconspng.com/thumbs/copy-icon/copy-icon-25.png" alt='copyimage' className='copy' onClick={copyToClipboard} /></button>
            </div>

            <div className="passwrodLength">
                <p>Select Password length<span className='dark'>(**8-50 characters**)</span></p>
                <input type="number" value={passwordLenght} onChange={(e) =>(e.target.value) ? setPasswordLength(Number(e.target.value)) : setPasswordLength("")}/>
            </div>

            <div className="passwordCharacters">

                <div className="includeUpperCase common">
                    <input type="checkbox"  id="upperCase" value={upperCase} defaultChecked onChange={() => {
                        setUpperCase((prev) => !prev);
                        setPasswordValue("")
                    }}/>
                    <label htmlFor="upperCase">Include upper case</label>
                </div>

                <div className="includeLowerCase common">
                    <input type="checkbox" value={lowerCase} id="lowerCase" defaultChecked onChange={() => {
                        setLowerCase((prev) => !prev);
                        setPasswordValue("")
                    }}/>
                    <label htmlFor="lowerCase">Include lower case</label>
                </div>

                <div className="includeUpperCase common">
                    <input type="checkbox" value={numbers} id="numbers" defaultChecked onChange={() => {
                        setNumbers((prev) => !prev);
                        setPasswordValue("")
                    }}/>
                    <label htmlFor="numbers">Include numbers</label>
                </div>

                <div className="includeUpperCase common">
                    <input type="checkbox" value={symbols} id="symbols" defaultChecked onChange={() => {
                        setSymbols((prev) => !prev);
                        setPasswordValue("")
                    }}/>
                    <label htmlFor="symbols">Include symbols</label>
                </div>

            </div>

            <div className="generatePassword">
                <button onClick={() => generatePassword()}>Generate Password</button>
            </div>
        </div>

    )
}

export default PasswordGenerator;