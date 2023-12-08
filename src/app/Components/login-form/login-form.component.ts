import { Component, OnInit } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent  implements OnInit {

  cad:boolean = false
  mensagem:string=''
  cadUser(email:any, senha:any, rpSenha:any){
    this.mensagem=''
    if(email!=='' && senha!=='' && rpSenha!==''){
      this.mensagem=''
      
const error = createUserWithEmailAndPassword(this.auth, email, senha)
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    this.mensagem = errorMessage
  });
    }else{
      this.mensagem='Preencha todos os campos do formulário!'
    }
  }

  Logar(email:any, senha:any){
    console.log(`Usuário: ${email} logado com senha: ${senha} `)
  }

  

  constructor(private auth:Auth) { }

  ngOnInit() {}

}