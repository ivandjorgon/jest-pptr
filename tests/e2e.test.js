import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import TopBar from '../pages/components/TopBar';
import FeedbackPage from '../pages/FeedbackPage';
import { username, password, timeout } from "../config";

describe('End-to-End Test', () => {
    let homepage;
    let feedbackpage; 
    let topbar;
    let loginpage;

    beforeAll(async () => {
        jest.setTimeout(timeout);
        homepage = new HomePage();
        loginpage = new LoginPage();
        feedbackpage = new FeedbackPage();
        topbar = new TopBar();
    });

    it('should load homepage', async() => {
        await homepage.visit();
        await homepage.isNavBarDisplayed();

    });

    it('should sumbit feedback', async() => {
        await homepage.clickFeedbackLink();
        await feedbackpage.isFeedbackFormDisplayed();
        await feedbackpage.submitFeedback("Johnny Sales", "john@email.com", "Subject", "Some comment");
    });

    it('should login to application', async() => {
        await homepage.visit();
        await topbar.isTopBarDisplayed();
        await topbar.clickSignInButton();
        await loginpage.isLoginFormDisplayed();
        await loginpage.login(username, password);
    });
})