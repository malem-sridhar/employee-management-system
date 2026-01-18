**Employee Management System**

A simple and user-friendly Employee Management System built with React.js.

This project demonstrates basic authentication, CRUD operations, form validation, image upload, filtering, and printing functionality.

**Project Overview**

The Employee Management System allows users to:

Log in using mock authentication

View an employee dashboard

Add, edit, and delete employee records

Upload and preview employee profile images

Search and filter employees

Print employee data

**Features**

Mock Login Authentication

Protected Dashboard Routing

Employee Summary (Total / Active / Inactive)

Add & Edit Employee (Single Reusable Form)

Form Validation with Error Messages

Image Upload with Preview

Search by Employee Name

Filter by Gender and Active Status

Print Employee List

Local Storage Data Persistence

Clean & Simple UI

**Tech Stack**

Frontend: React.js (JavaScript)

State Management: React Hooks (useState, useEffect)

Styling: CSS (index.css)

Storage: Browser Local Storage

Build Tool: Create React App

**Getting Started**

Follow the steps below to run the project locally.

Prerequisites: Node.js (v14 or above), npm

Installation:

Clone the repository: git clone <your-github-repository-url>

Navigate to the project directory: cd employee-management-system

Install dependencies: npm install

Start the development server: npm start

Open in browser: http://localhost:3000

**Login Credentials (Mock)**

Username: Admin	

Password: admin@1234

Authentication is mock-based and implemented only for demo purposes.

**Assumptions & Design Decisions**

No backend API is used; all data is stored in Local Storage

Profile images are saved as Base64 strings

The same form component is reused for Add and Edit operations

Validation is handled on the client side

Print functionality excludes forms and action buttons

Focus is on readability and maintainability rather than complex UI libraries
