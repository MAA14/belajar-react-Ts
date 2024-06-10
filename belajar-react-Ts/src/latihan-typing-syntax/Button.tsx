import React from "react"

// Bikin type dulu diluar Component, buat akses React.CSSProperties harus diluar Component
type ButtonProps= {
    buttonStyle: React.CSSProperties,
    textStyle: React.CSSProperties,
};

// Disini kita melakukan Destructuring terrhadap params Props tapi acuan objectnya ada di ButtonProps
// Secara tidak langsung kita Destructuring ButtonProps sebagai params Component (props)
export function Button(
    {buttonStyle, textStyle} : ButtonProps
) {
    return (
        <div className="button" style={buttonStyle}>
            <a href="#" style={textStyle}>I'm Button</a>
        </div>
    )
}