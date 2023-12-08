import { Component, OnInit } from '@angular/core';

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
    if(email!='' || senha!='' || rpSenha!==''){
      this.mensagem='Preencha todos os campos do formulário!'
    }else if(senha!=rpSenha){
      this.mensagem='As senhas precisam ser iguais!'
    }else{
      this.mensagem='Usuário cadastrado com sucesso!'
    }
  }

  Logar(email:any, senha:any){
    console.log(`Usuário: ${email} logado com senha: ${senha} `)
  }
  constructor() { }

  ngOnInit() {}

}
