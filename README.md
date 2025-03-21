+ Вам необходим реализовать приложение для просмотра новостей. Приложение должно иметь как минимум один экран, на котором в виде списка отображаются новости.

+ Изменение темы приложения. Добавить возможность изменять цветовую тему приложения со светлой на темную и с темной на светлую. +2 балла

+ Анимация загрузки Добавить анимацию, уведомляющую пользователя о том, что идет процесс запроса новостей из API + 3 балла

+ Уведомление о сетевых неполадках. В случае, если не получилось запросить новости из API, уведомить пользователя о том, что у него неполадки с соединением + 1 балл

+ Второй экран с подробной новостью. По нажатии на новость должен отображаться второй экран, на котором будет отображаться картинка новости, ее заголовок и полный текст. + 3 балла

+ Экран с авторизацией. Добавить экран с авторизацией ( +2 балла ). Авторизация должна быть успешной вне зависимости от того, какие данные ввел пользователь. Если добавить экран валидацию введенных данных, то можно получить 4 балла

+ Поиск по заголовку новости. Реализовать поиск по заголовку новостей + 2 балла

Реализация приложения в соответствии с некоторой архитектурой. + 1 балл ( в репозитории укажите, какую архитектуру вы использовали )

+ Кэширование. Реализовать кэширование новостей. Проверяющий должен зайти в приложение с рабочим интернетом, загрузить новости. После проверяющий закроет приложение, выключит интернет и снова зайдет в приложение. Должны отобразиться последние загруженные новости с уведомлением пользователя о том, что из-за сетевых проблем будут отображены последние загруженные новости. + 7 баллов


Архитектура - попытался Feature Sliced Design, но структура папок если я не ошибаюсь влияет непосродественно на логику работы приложения

https://api.spaceflightnewsapi.net/v4/docs/#/ - API


Установка:
1) Установить node js v20.3.0 + npm соответсвующей версии
2) Склонировать репозиторий
3) Выполнить команду npm i
4) Выполнить команду npm run android
5) Установить приложение Expo Go на Android устройство из Play Store
6) Зайти в приложение и просканировать QR код который был выведен при запуске

Также можно скачать эмулятор в Android Studio - полная документация по установке здесь - https://docs.expo.dev/workflow/android-studio-emulator/
В любом случае, используется приложения Expo, что на вашем телефоне, что на эмуляторе
Самое главное в общем случае помимо установки node js необходимо чтобы в терминале PowerShell команда adb version или adb devices показали результаты

Протестировать основной функционал, помимо отсутствия сети можно через Expo Go в включенным WIfi

Но при отключении Wifi на эмуляторе или при работе с приложением Expo Go может возникнуть проблема открытия всего приложения
Нужно запустить проект через npm run local, включить USB debugging на телефоне, подключить его по USB к ВМ на которой крутится сервер с процессом приложения

Пример успешного подключения телефона для тестирования указан ниже:
adb devices - нужно чтобы помимио эмулятора был еще обычный device
List of devices attached
AJJJ6R3131001835        device
emulator-5554   device

Впринципе, если не получится запустить приложение, то можно посмотреть запись с прокторинга - там видно всю работу приложения. Также примерно за 15 минут до окончания написания олимпиады продемонстрировал работу оффайлн режима через веб-камеру - Запись того что показывал находится по ссылке https://photos.app.goo.gl/GUuQPa78L8ogW7uZ8
