import styled from 'styled-components'

const Button = styled.button`
  background-color: var(--color-sand);
  border: none;
  font-family: inherit;
  font-size: 2rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-purple);
  text-shadow: 0.1rem 0.1rem 0 var(--color-purple),
              -0.1rem 0.1rem 0 var(--color-purple),
              0.1rem -0.1rem 0 var(--color-purple),
              -0.1rem -0.1rem 0 var(--color-purple);
`

export default Button