# COVIDREPORTS

COVIDREPORTS é um painel interativo que permite visualizar e filtrar dados sobre a COVID-19 no Brasil e no mundo. O projeto consome a API pública [COVID-19 Brazil API](https://covid19-brazil-api-docs.vercel.app/) e oferece funcionalidades como filtragem de casos por estado, visualização de dados por país e cadastro de novos casos.

## 🚀 Tecnologias Utilizadas

- **React**
- **Next.js**
- **Tailwind CSS**
- **React Hook Form**
- **Zod**

## 📌 Funcionalidades

- 📍 **Filtrar casos por estado** no Brasil.
- 📊 **Visualizar todos os casos** de COVID-19 no país.
- 📅 **Filtrar casos por data**.
- 🌎 **Consultar dados de COVID-19 em outros países**.
- 📝 **Cadastrar novos casos por estado** (atualmente, apenas exibe um JSON no console).

## 🔗 Acesse o Projeto

O projeto está disponível online no seguinte link:

➡️ **[COVIDREPORTS - Deploy](https://teste-pratico-covid-19.vercel.app/)**

## 📦 Como Executar o Projeto

1. **Clone o repositório**:

   ```sh
   git clone https://github.com/seu-usuario/covidreports.git
   cd covidreports
   ```

2. **Instale as dependências:**:

   ```sh
     npm install
   ```

3. **Inicie o ambiente de desenvolvimento:**:

   ```sh
     npm run dev
   ```

4. **Acesse no navegador:**:
   ```sh
     http://localhost:3000
   ```

## 📥 Exemplo de Cadastro de Caso

Atualmente, a funcionalidade de cadastro não está conectada à API, apenas exibe um JSON no console:

```json
{
  "date": "2025-03-03T03:00:00.000Z",
  "state": "ap",
  "cases": 1,
  "confirmed": 1,
  "deaths": 1,
  "recovered": 1
}
```

Desenvolvido por Lucas Farias 🚀