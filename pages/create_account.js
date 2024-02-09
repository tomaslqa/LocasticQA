exports.CreateAccount = class CreateAccount{

    constructor(page){

        this.page = page;
        this.title = page.getByRole('heading', { name: 'Registriraj se na Tinel' });
        this.firstName = page.locator('input[name="firstName"]');
        this.lastName = page.locator('input[name="lastName"]');
        this.email = page.locator('input[name="email"]');
        this.password = page.locator('[id="plainPassword"]');
        this.confirmPassword = page.locator('//div[5]/div/input');
        this.dateOfBirth = page.getByPlaceholder('DD.MM.YYYY');
        this.registerButton = page.getByRole('button', { name: 'Registriraj me' });
        this.cancelButton = page.getByRole('button', { name: 'Odustani' });
        this.nameRequiredWarning = page.locator('//*[@id="root"]/main/div/div[2]/form/div[1]/span');
        this.surnameRequiredWarning = page.locator('//*[@id="root"]/main/div/div[2]/form/div[2]/span');
        this.emailRequiredWarning = page.locator('//*[@id="root"]/main/div/div[2]/form/div[3]/span');
        this.passwordRequiredWarning = page.locator('//*[@id="root"]/main/div/div[2]/form/div[4]/span');
        this.confirPasswordRequiredWarning = page.locator('//*[@id="root"]/main/div/div[2]/form/div[5]/span');
        this.nameRequiredWarning = page.locator('//*[@id="root"]/main/div/div[2]/form/div[1]/span');
        this.dateOfBirthRequiredWarning = page.locator('//*[@id="root"]/main/div/div[2]/form/div[9]/div/div/h6');
        this.termsRequiredWarning = page.locator('//*[@id="root"]/main/div/div[2]/form/div[12]/div/h6');
        this.termsCheckbox = page.getByRole('checkbox');
    }

    async clickRegisterButton(){
        await this.registerButton.click();

    }
    async clickCancelButton(){
        await this.cancelButton.click();

    }
    async enterFirstName(name){
        this.firstName.fill(name);

    }
    async centerLastName(surname){
        this.lastName.fill(surname);
    }
    async enterEmail(email){
        this.enterEmail.fill(email);
    }
    async enterPassword(password){
        this.password.fill(password);

    }
    async enterConfirmPassword(confirmPwd){
        this.confirmPassword.fill(confirmPwd);
    }
    async selectDateOfBirth(DDMMYYY){
        this.dateOfBirth.fill(DDMMYYY);

    }
    async checkAcceptTermsCheckbox(){
        this.termsCheckbox.click();
    }

}