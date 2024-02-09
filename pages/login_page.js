exports.LoginPage = class LoginPage{

    constructor(page){

        this.page=page;
        this.title=page.getByText('Prijavi se na Tinel Workshop');
        this.createAccountLink=page.getByRole('button', { name: 'Nemaš korisnički račun?' });
    }
    async openPage(url){
        this.page.goto(url);
    }

    async clickCreateAccountLink(){
        this.createAccountLink.click();
    }
}