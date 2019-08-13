Hello, if you are reading this README.md file it is because, probably, you have just created an e2e project to run tests.

## Info

This scaffold brings three configuration files placed in the config folder so you can run the tests either with selenium as a service from saucelab (config / browser.saucelabs.js) or standalone way (browser.local.js).

It also incorporates a simple test example in the features folder.

> It is in this folder where you can place all the tests that you want to be executed from cells with the command `app:e2e`.

## Requirements

* You must be located in the root of the e2e folder created to run the tests.

* To be able to execute the e2e tests it is necessary to have the `cells-pepino dependency` installed in a global way. If not, execute the following command from the console:

    `npm install -g cells-pepino`

* If you are going to test an cells application locally, it is necessary that this application be previously served through the cells command `app:serve` and pass as parameter the url that this process provides.

We will see it in depth in the next section.


## Use

To run the tests on a newly created application with cells using the `app:create` command, follow these steps:

    1. Open a terminal and type `cells app:create`
    2. Answer `Y` to the following question:

        __? Do you want an E2E project to be created? (Y/n)__

    3. After the process end, move to the folder of the newly created application
    4. Once in it 'serves' the application:

        `cells app: serve -c composer-mock-local.json`

        (it's important do not kill this process)

    5. Open another terminal and install the `cells-pepino dependency` globally if you don't            have it installed yet.

           `npm install -g cells-pepino`

    6. Once cells-pepino is installed , locate in the root directory of your e2e project and             execute one of the following command from the terminal:

            `cells app: e2e -u url_for_testing -c browser.local.js`
             (To run the tests with selenium in standalone mode).
        or
            `cells app: e2e -u url_for_testing -c browser.saucelabs.js` 
            (To run the tests with selenium as a service from saucelab).

    Warning: in this last way you'll must provide both `user` and `key` valid values.


    Where __url_for_testing__ its the url that the command `cells app:serve` provides.
    And both browser.local.js and browser.saucelabs.js are mandatory configuration files.
    

**IMPORTANT** 

You can also test an external website without having to execute the steps mentioned above, for that you should only place inside of any e2e project created and pass the URL of the web.

        `cells app:e2e -u http://www.externalsitexample.com - c browser.local.js`






