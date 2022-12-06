import { useState } from "react";
import { Container } from "./styles";

export function Input({ label, children, ...rest}) {
  const [phoneNumber, setPhoneNumber] = useState('')

  return (
    <Container>
      {
        children ?
        (
          <label style={{ }}>
            {label}
            <div style={{ 
              display: 'flex',
              padding: '1.4rem 1.6rem',
              borderRadius: '1.6rem',
              backgroundColor: '#FFFFFF',
              border: '1px solid #999999'
            }}>
              { children }
              <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                style={{
                  border: 'none',
                  height: '48pt',
                  fontSize: '14pt',
                  padding: '1rem'
                }}
                {...rest}
              />
            </div>
          </label>
        ) : (
          <label>
            {label}
            <input {...rest}/>
          </label>
        )
      }
    </Container>
  )
}