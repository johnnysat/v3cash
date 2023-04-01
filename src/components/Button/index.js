import styled from 'styled-components'
import border from '../../assets/button-border.png'

const Button = styled.button`
  background-color: var(--color-sand);
  border: none;
  font-family: inherit;
  font-size: 2rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-purple);
  text-shadow: 0.1rem 0.1rem 0 var(--color-sand-dark),
              -0.1rem 0.1rem 0 var(--color-sand-dark),
              0.1rem -0.1rem 0 var(--color-sand-dark),
              -0.1rem -0.1rem 0 var(--color-sand-dark);
  padding: 1rem 0.8rem;
  border-image: url(${border}) 8 fill / 8px / 8px;
  image-rendering: pixelated;
`

export default Button