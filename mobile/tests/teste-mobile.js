const { remote } = require('webdriverio');

(async () => {
  const driver = await remote({
    hostname: '127.0.0.1',
    port: 4723,
    path: '/',
    logLevel: 'info',
    capabilities: {
      platformName: 'Android',
      'appium:automationName': 'UiAutomator2',
      'appium:deviceName': 'emulator-5554',
      'appium:udid': 'emulator-5554',

      'appium:appPackage': 'com.woocommerce.android',
      'appium:appActivity': '.MainActivity',

      'appium:noReset': true,
    },
  });

  console.log('👉 App iniciado');

  await driver.pause(15000);

  await driver.deleteSession();

  console.log('✔ Teste finalizado com sucesso');
})();
