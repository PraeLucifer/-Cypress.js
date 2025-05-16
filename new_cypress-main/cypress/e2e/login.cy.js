describe('Проверка авторизации', function () {

   it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // Зашел на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восс. пароль

        cy.get('#mail').type('german@dolnikov.ru') // Ввел правильный логин
        cy.get('#pass').type('iLoveqastudio1') // Ввел правильный пароль
        cy.get('#loginButton').click(); // Нажал кнопку войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден для пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю кнопку крестик, и что он виден для пользователя

    })

    it('Неверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // Зашел на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восс. пароль

        cy.get('#mail').type('german@dolnikov.ru') // Ввел правильный логин
        cy.get('#pass').type('iLoveqastudio7') // Ввел неправильный пароль
        cy.get('#loginButton').click(); // Нажал кнопку войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден для пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю кнопку крестик, и что он виден для пользователя

    })

    it('верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio/'); // Зашел на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восс. пароль

        cy.get('#mail').type('german@dolnikov.com') // Ввел неправильный логин
        cy.get('#pass').type('iLoveqastudio1') // Ввел правильный пароль
        cy.get('#loginButton').click(); // Нажал кнопку войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден для пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю кнопку крестик, и что он виден для пользователя

    })

    it('верный пароль и невалидный логин', function () {
        cy.visit('https://login.qa.studio/'); // Зашел на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восс. пароль

        cy.get('#mail').type('germandolnikov.com') // Ввел логин без @
        cy.get('#pass').type('iLoveqastudio1') // Ввел правильный пароль
        cy.get('#loginButton').click(); // Нажал кнопку войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден для пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю кнопку крестик, и что он виден для пользователя

    })

     it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашел на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восс. пароль

       cy.get('#forgotEmailButton').click(); // Нажал кнопку забыл пароль
       cy.get('#mailForgot').type('german@dolnikov.ru') // Ввел правильный логин
       cy.get('#restoreEmailButton').click(); // Нажал кнопку "Отправить код"


        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю, что после восст почты вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден для пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю кнопку крестик, и что он виден для пользователя

    })

     it('Верный пароль и логин с верхними регистрами', function () {
        cy.visit('https://login.qa.studio/'); // Зашел на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восс. пароль

        cy.get('#mail').type('GerMan@Dolnikov.ru') // Ввел правильный логин с верхними регистрами
        cy.get('#pass').type('iLoveqastudio1') // Ввел правильный пароль
        cy.get('#loginButton').click(); // Нажал кнопку войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден для пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю кнопку крестик, и что он виден для пользователя

    })

})


// запуск через терминал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome
