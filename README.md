# DataInsights - Capstone Project

This project gives us the opportunity to dive into the exciting field of data science and develop a comprehensive data science application. With a focus on leveraging data to generate valuable insights and drive informed decision-making, this project aims to tackle a generic problem space. We will build advanced modules, including data preprocessing, exploratory data analysis, machine learning algorithms, and data visualization, to create a robust and user-friendly data science application that can be applied across various domains.

# About this Project

This is the Capstone/Final Year Project for batch BSCS-20 Undergraduate Degree at National University of Sciences & Technology - School of Electrical Engineering and Computer Science.
The contributors to this project are:

- Baqir E Muhammad
- Faizaan Al Faisal
- Munim Zafar

## Running Locally

1. Install dependencies using pnpm:

```sh
pnpm install
```

2. Copy `.env.example` to `.env.local` and update the variables.

```sh
cp .env.example .env.local
```

3. Initialize Prisma
```
npx prisma generate
```
followed by
```
npx prisma migrate dev
```

3. Start the development server:

```sh
pnpm dev
```
