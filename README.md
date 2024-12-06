<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Authentication BFF API

This repository contains a BFF (Backend for Frontend) API developed in **Nest.js**, responsible for authenticating users in the application.

The BFF API integrates with **EA-IdentityService**, which is implemented in **.NET**. **EA-IdentityService** authenticates the user and then makes an **RPC call via RabbitMQ** to **EA-CustomerService** (also developed in .NET), which creates the customer in the application.

> **Project Status**: This project is still under development. Some features may be incomplete or in testing phase.
>
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://img.icons8.com/ios/452/under-construction.png"/></a>
</p>
