class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }

    isAdmin() {
        return this.admin == true ? true : false;
    }
}

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);
        
        this.admin = true;
    }
}

const user = new Usuario("email", "senha");
const adm = new Admin("emailadmin", "senhaadmin");

console.log(adm.isAdmin());
console.log(user.isAdmin());