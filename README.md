# WalletX 👝💸

[![React](https://img.shields.io/badge/React-17.0.2-blue?logo=react)](https://reactjs.org/) 
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.3.2-brightgreen?logo=spring)](https://spring.io/projects/spring-boot) 
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue?logo=postgresql)](https://www.postgresql.org/) 
[![Vite](https://img.shields.io/badge/Vite-4.4.9-yellow?logo=vite)](https://vitejs.dev/) 
[![JWT](https://img.shields.io/badge/JWT-Secure-orange?logo=jsonwebtokens)](https://jwt.io/)

---

## Overview

**WalletX** is a full-stack wallet application designed for efficient personal finance management.  
It combines a **React.js** frontend with a **Spring Boot** backend and **PostgreSQL** database, providing a **secure, scalable, and user-friendly experience**.

![Wallet-X](assets/db.png)

---

## Features

WalletX comes with a **professional and secure feature set**:

---

### [![CRUD](https://img.shields.io/badge/CRUD-Manage-green?logo=postman)](https://www.postman.com/)
**CRUD Transactions**  
* Create, Read, Update, and Delete transactions with ease.  
* Keep finances organized and accurate.  
* Example: Add a new expense, edit details, or remove old transactions.

---

### [![Transfer](https://img.shields.io/badge/Transfer-Secure-blue?logo=paypal)](https://www.paypal.com/)
**Money Transfer**  
* Send funds to other users seamlessly.  
* Mimics real-world wallet transfers safely.  
* Example: Transfer money to a friend or another account.

---

### [![History](https://img.shields.io/badge/History-Track-orange?logo=ledger)](https://www.ledger.com/)
**Transaction History**  
* View a complete log of all transactions.  
* Track income and spending patterns easily.  
* Example: See daily, weekly, or monthly transactions at a glance.

---

### [![Search](https://img.shields.io/badge/Search-Fast-yellow?logo=algolia)](https://www.algolia.com/)
**User Search**  
* Quickly locate other users in the app.  
* Facilitates smoother transfers and interactions.  
* Example: Type a username to find a friend for sending funds.

---

### [![Settings](https://img.shields.io/badge/Settings-Personalize-purple?logo=slack)](https://slack.com/)
**Settings & Customization**  
* Personalize themes, notifications, and preferences.  
* Keep the interface and profile tailored to your needs.  
* Example: Update theme or profile information.

---

### [![JWT](https://img.shields.io/badge/JWT-Secure-red?logo=jsonwebtokens)](https://jwt.io/)
**Secure Authentication**  
* JWT-based authentication ensures safe user sessions.  
* Protects sensitive data like transactions and account information.

---

### [![React](https://img.shields.io/badge/React-Responsive-blue?logo=react)](https://reactjs.org/)
**Responsive Frontend**  
* React.js provides a fast, interactive, and mobile-friendly UI.  
* Real-time updates enhance user experience with smooth navigation.

---

## Getting Started 🚀

### Prerequisites 📋

* Java 17+ and Maven  
* Node.js and npm  
* PostgreSQL installed locally or remotely  
* Git  

---

### Step 1: Clone the Repository

```bash
git clone https://github.com/Dev-Hariprasath/Wallet-X.git
cd Wallet-X
````

---

### Step 2: Backend Setup (Spring Boot)

1. Navigate to the backend folder:

```bash
cd backend
```

2. Update the `application.properties` or `application.yml` with your PostgreSQL credentials:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/walletx
spring.datasource.username=your_db_username
spring.datasource.password=your_db_password
spring.jpa.hibernate.ddl-auto=update
jwt.secret=your_jwt_secret
server.port=8080
```

3. Build and run the backend:

```bash
mvn clean install
mvn spring-boot:run
```

---

### Step 3: Frontend Setup (React.js)

1. Navigate to the frontend folder:

```bash
cd ../frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file with the API base URL:

```env
VITE_API_BASE_URL=http://localhost:8080
```

4. Start the frontend server:

```bash
npm run dev
```

---

### Step 4: Access the Application

Open your browser and navigate to:

```
http://localhost:5173
```

---

### Step 5: Development Notes

* The frontend supports hot-reloading for rapid development.
* Ensure PostgreSQL is running before starting the backend.
* Update `.env` and `application.properties` with the correct credentials and secrets.

---

## Contributing 🤝

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Make your changes
4. Commit (`git commit -m 'Add feature'`)
5. Push to branch (`git push origin feature-name`)
6. Open a Pull Request

---

## Resources & Documentation 📚

* [React.js Documentation](https://reactjs.org/docs/getting-started.html)
* [Spring Boot Documentation](https://spring.io/projects/spring-boot)
* [PostgreSQL Documentation](https://www.postgresql.org/docs/)
* [JWT Introduction](https://jwt.io/introduction/)

---

## License 📝

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

---

Take control of your finances with **WalletX**! 🚀💰


