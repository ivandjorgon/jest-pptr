import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import TopBar from '../pages/components/TopBar'
import { lineBreakG } from 'acorn';

describe('Example', () => {
    let homepage;
    let loginpage; 
    let topbar;

    beforeAll(async () => {
        jest.setTimeout(15000);
        homepage = new HomePage();
        loginpage = new LoginPage();
        topbar = new TopBar();
    });

    it('homepage should work', async() => {
        await homepage.visit();      
    });

    it.skip('navbar should be displayed', async() => {
        await homepage.isNavBarDisplayed();  
        await topbar.isTopBarDisplayed();    
    });

    it.skip('click on the homepage link', async() => {
        await homepage.clickHomepageLink();
    });

    it.skip('click on the online banking link', async() => {
        await homepage.clickOnlineBankingLink();
    });

    it.skip('try to login', async() => {
        await loginpage.visit();
        await loginpage.isLoginFormDisplayed();
        await loginpage.login('username', 'password');
        await loginpage.wait(5000);
    });
})