describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have playerShortlist screen', async () => {
    await expect(element(by.id('playerShortlist'))).toBeVisible();
  });

  it('move to stats screen on button tap', async () => {
    await element(by.id('statsButton')).tap();
    await expect(element(by.id('statsScreen'))).toBeVisible();
  });


//  it('should show world screen after tap', async () => {
//    await element(by.id('world_button')).tap();
//    await expect(element(by.text('World!!!'))).toBeVisible();
//  });

});
