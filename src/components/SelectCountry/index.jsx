import { Container, Select } from "./styles";

// Country Flags
import brazilFlag from '../../assets/flags/brazil.png'
import usaFlag from '../../assets/flags/united-states.png'
import italyFlag from '../../assets/flags/italy.png'
import spainFlag from '../../assets/flags/spain.png'
import portugalFlag from '../../assets/flags/portugal.png'
import canadaFlag from '../../assets/flags/canada.png'
import ukFlag from '../../assets/flags/united-kingdom.png'
import { useState } from "react";


export function SelectCountry() {
  const [flag, setFlag] = useState('br');

  function handleSetflag(e) {
    setFlag(e)
  }

  return (
    <Container>       
        <img
          src= {
            (flag === 'br' && brazilFlag)
            || (flag === 'usa' && usaFlag)
            || (flag === 'ca' && canadaFlag)
            || (flag === 'it' && italyFlag)
            || (flag === 'pt' && portugalFlag)
            || (flag === 'es' && spainFlag)
            || (flag === 'uk' && ukFlag)
          }
          alt={`${(flag).toUpperCase()} National Flag`}
        />
      <Select
        onChange={(e) => handleSetflag(e.target.value)}
      >
        <option value="br" selected >+55</option>
        <option value="usa">+1 (us)</option>
        <option value="ca">+1</option>
        <option value="uk">+44</option>
        <option value="it">+39</option>
        <option value="pt">+351</option>
      </Select>
    </Container>
  )
}