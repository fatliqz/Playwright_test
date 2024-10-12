const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
});

test('TC-01 Add Customer + Open Account', async ({ page }) => {
    await page.waitForTimeout(5000);

    await page.click(':nth-child(3) > .btn');

    await page.click('[ng-class="btnClass1"]');
    await page.fill(':nth-child(1) > .form-control', 'Potiwat');
    await page.fill(':nth-child(2) > .form-control', 'khunArr');
    await page.fill(':nth-child(3) > .form-control', '62210');
    await page.click('form.ng-dirty > .btn');
    await page.waitForTimeout(5000);

    await page.click('[ng-class="btnClass2"]');
    await page.selectOption('#userSelect', { label: 'Potiwat khunArr' });
    await page.selectOption('#currency', 'Dollar');
    await page.waitForTimeout(5000);
    await page.click('form.ng-dirty > button');
    await page.waitForTimeout(5000);

    await page.click('[ng-class="btnClass3"]');
    await page.waitForTimeout(5000);
    await page.fill('.form-control', 'Potiwat');
});

test('TC-02 Find Customer + Delete', async ({ page }) => {

    await page.click(':nth-child(3) > .btn');

    await page.click('[ng-class="btnClass3"]');
    await page.waitForTimeout(5000);
    await page.fill('.form-control', 'Ron');

    await page.click(':nth-child(5) > button');
});

test('TC-03 Deposit', async ({ page }) => {

    await page.click('.borderM > :nth-child(1) > .btn');
    await page.selectOption('#userSelect', { label: 'Harry Potter' });
    await page.click('form.ng-valid > .btn');

    await page.click('[ng-class="btnClass2"]');
    await page.fill('.form-control', '1234');
    await page.waitForTimeout(3000);
    await page.click('form.ng-dirty > .btn');
    await page.waitForTimeout(3000);

    await page.fill('.form-control', '2556');
    await page.waitForTimeout(3000);
    await page.click('form.ng-dirty > .btn');
    await page.waitForTimeout(6000);

    await page.click('[ng-class="btnClass1"]');
    await page.waitForTimeout(10000);
});

test('TC-04 Withdraw', async ({ page }) => {

    await page.click('.borderM > :nth-child(1) > .btn');
    await page.selectOption('#userSelect', { label: 'Harry Potter' });
    await page.click('form.ng-valid > .btn');

    await page.click('[ng-class="btnClass2"]');
    await page.fill('.form-control', '21234');
    await page.click('form.ng-dirty > .btn');
    await page.waitForTimeout(5000);

    await page.click('[ng-class="btnClass3"]');
    await page.waitForTimeout(4000);
    await page.fill('.form-control', '1234');
    await page.click('form.ng-dirty > .btn');

    await page.waitForTimeout(6000);

    await page.click('[ng-class="btnClass1"]');
    await page.waitForTimeout(10000);

    await page.click('.fixedTopBox > [style="float:left"]');
});
