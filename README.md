### Enunciado:

Uma seguradora tem alguns dados dos seus produtos de seguro guardados em ficheiros Excel em forma de tabelas.
No seu processo de modernização, a seguradora decidiu criar uma app com frontend em React que permita efetuar a gestão dos dados destas tabelas.
A app tem a seguinte estrutura visual:

- No cabeçalho apresenta o logo da seguradora no lado esquerdo, uma dropdown para selecionar a tabela que o utilizador pretende ver/editar no
  centro e um "user menu" no lado direito onde o utilizador pode fazer logout, ver os seus dados, aceder às preferências, etc.
- No conteúdo da página apresenta a tabela selecionada ou uma mensagem a pedir para o utilizador selecionar uma tabela caso não tenha nenhuma selecionada
- No rodapé apresenta a versão da aplicação

#### 1 - Como dividias este ecrã em componentes React?

An App file that contains all the components - Header, SelectedTable and Footer.
The Header component contains the logo image, the dropdown to select the table and the user Menu.
The SelectedTable component contains the selected table or the blank table image.
And a Footer component with the version of the app.

The goal is to reuse the components in other parts of the application and each component has a specific responsibility, that helps with maintenance and scalability.
This structure allows to build a dynamic and responsive layout, and it makes easier for new features.

###### App.js - Main component with header, the selected table and footer

    <div>
      <Header/>
      <SelectedTable />
      <Footer />
    </div>

###### Header.js - Header component with logo, the dropdown to select the table and the user menu

    <div>
      <Logo/>
      <SelectTableDropdown />
      <UserMenu />
    </div>

###### Logo.js - Logo component with just an image

    <img />

###### SelectTableDropdown.js - Dropdown component with the different options/tables to select

    <select>
      <option />
      <option />
      <option />
      ...
    <select />

###### UserMenu.js - UserMenu component with a title and buttons

    <div>
      <h1> Menu <h1/>
      <button>User Account</button>
      <button>Settings</button>
      <button>Logout</button>
    </div>

###### SelectedTable.js - SelectedTable component with 2 components - Table or an empty table message

    <div>
      {tableIsSelected ?
        <Table />
        :
        <EmptyTable />
      }
    </div>

###### Footer.js - Footer component

    <footer>
      <p>Version 34</p>
    </footer>

---

Quando a app mostra uma tabela, existem 2 modos:

- Consulta: a tabela apenas apresenta a informação e não permite a edição dos dados. Existe um botão de Edit na página que ao
  ser clicado muda a página para o modo de edição;
- Edição: todos os campos da tabela ficam editáveis. O botão de Edit desaparece e aparecem 2 novos botões: - Confirm: persiste as alterações feitas pelo utilizador aos dados da tabela - Discard: descarta as alterações feitas pelo utilizador aos dados da tabela - Após clicar num destes botões, a página volta ao modo de consulta
  Existem também botões para adicionar linhas novas à tabela e para eliminar linhas existentes.

---

#### 2 - Assumindo que foste tu que implementaste todos os componentes, mostra como implementarias o componente que representa uma linha de uma tabela.

Tem em conta que cada tabela possui o seu conjunto de colunas e cada coluna pode ter um tipo de dados diferente (numérico, texto, data, seleção, etc.).

### Installation and Setup

#### Prerequisites

- **Node.js**: Ensure that you have Node.js installed on your machine.
- **npm** or **yarn**: You’ll need one of these package managers to install dependencies.

#### Steps

1. Clone the repository

   `git clone git@github.com:cataspratley/msg-iberia.git`

2. Install dependencies

   `npm install`

3. Run the app: Start the development server to run the app.

   `npm start`

4. Open the app

   open your browser and go to http://localhost:3000

5. Run the tests

   `npm test`

### Future Improvements

- **Dynamic Header**: Header that depends on the type of entry in each column where the table header adapts based on the data types provided for each column
- **Local Storage**: Implement local storage to persist the table data even after page reloads.
- **CSV file to JSON**: As the data is coming from a CSV file, probably will be in a CSV file that needs to be converted to JSON.
