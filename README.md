Интернет-магазин по продаже техники Apple разработанный на React/Redux.

Функционал:
- Регистрация и авторизация пользователей через sessions с использованием bcrypt
- Каталог товаров с описанием, возможность поиска товаров, фильтрация по типу устройства
- Страничка контактной информации с API Яндекс карты
- Личный кабинет покупателя с возможностью добавления девайсов в избранное и возможностью отслеживать и менять статус заказов
- Корзина с возможностью оформления заказов
- Админка с возможностью контролировать заказы и добавлять новые товары.
- Отзывы

Frontend:
- JS, React\Redux, CSS, HTML, Bootstrap

Backend:
- Node.js, Express

Database:
<ul>
  <li>Sequelize, PostgreSQL</li>
</ul>

Команда разработчиков:
<ul>
  <li>https://github.com/Eumorg (Team Leader)</li>
  <li>https://github.com/Danill212</li>
  <li>https://github.com/VitalikN7</li>
  <li>https://github.com/IvanNovokshanov</li>
</ul>

Для запуска приложения необходимо выполнить из папки API:
1. touch .env  Затем скопировать в свежесозданный файл .env строки из файла .env_example, изменив имя пользователя и пароль для Postgres на свои.
2. Выполнить команду npm i
3. Выполнить npx sequelize db:create
4. Выполнить npx sequelize db:migrate
5. Выполнить npx sequelize db:seed:all
6. Выполнить npm sequelize run dev

Затем выполнить из папки WEB следующие команды:
1. npm i
2. npm start
3. Для входа из под админа можно использовать имя пользователя Biba и пароль 1234

![image](https://user-images.githubusercontent.com/96069898/187669340-82de685a-ac93-49e6-889c-5d82dd95ae5c.png)
![image](https://user-images.githubusercontent.com/96069898/187669705-6ed756dd-cea8-4420-85eb-644893f940db.png)
![image](https://user-images.githubusercontent.com/96069898/187670074-7da69e64-24fe-4161-819b-d7fcb5e7f324.png)
![image](https://user-images.githubusercontent.com/96069898/187669904-f13780cb-6c8d-41ca-b47e-91ec882afa3a.png)




