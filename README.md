# V3Cash
Projeto de um sistema de cashback funcional que irá permitir a devolução de dinheiro em jogos e aplicativos específicos.

## Tecnologias até o momento
ReactJS através do Vite

## Utilizando a organização de pastas ITCSS
A metodologia ITCSS divide a arquitetura CSS em camadas, começando com as camadas mais genéricas e avançando para as camadas mais específicas. Essas camadas são organizadas em uma forma de triângulo invertido, com as camadas mais gerais na parte superior e as mais específicas na parte inferior. As camadas são organizadas da seguinte maneira:

- Configuração (Settings): Essa camada é usada para definir as variáveis globais do projeto, como cores, tipografias e tamanhos de fonte.
- Ferramentas (Tools): Essa camada contém mixins e funções que podem ser usados em todo o projeto para reduzir a repetição de código.
- Genéricos (Generic): Essa camada contém estilos genéricos que afetam todo o projeto, como definições para tags HTML e estilos de reset.
- Elementos (Elements): Essa camada contém estilos específicos para elementos HTML, como estilos para links, botões e formulários.
- Objetos (Objects): Essa camada contém estilos reutilizáveis para componentes e objetos, como um carrinho de compras ou um menu de navegação.
- Componentes (Components): Essa camada contém estilos específicos para componentes reutilizáveis do projeto.
- Escopos (Scopes): Essa camada contém estilos específicos para páginas individuais ou seções do projeto.

A metodologia ITCSS ajuda a criar um código CSS organizado, reutilizável e fácil de manter, o que é particularmente útil em projetos de grande escala. Ele também ajuda a evitar conflitos entre os estilos e torna mais fácil a identificação e a correção de erros no código.