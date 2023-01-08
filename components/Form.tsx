import { FormEvent, useState } from 'react';
import InputMask from 'react-input-mask';
import emailjs from '@emailjs/browser';
import { Button, Input, Label, TextArea, Title } from './FormComponents/FormComponents';


export default function Form() {


  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const Formulario = {
    name: nome,
    last_name: sobrenome,
    tel: tel,
    email: email,
    msg:msg
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serviceId = 'service_3snekti';
    console.log(Formulario);
    emailjs.send(serviceId, 'template_t5rhirh', Formulario, 'AGY6h0tPU-wbE9Dwo')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      })
      .then(() => {
        setNome('');
        setEmail('');
        setMsg('');
        setSobrenome('');
        setTel('');
      });
  };


  return (
    <section className=' container d-flex flex-wrap flex-lg-nowrap mt-5 justify-content-center align-items-center'>
      <Title>
        <b>Não perca tempo, </b>
        entre em contado agora mesmo!
      </Title>
      <form className='d-flex flex-column gap-3 align-items-center' method='POST' onSubmit={(event) => sendEmail(event)} >
        <div className='d-flex gap-3'>
          <div className='d-flex flex-column'>
            <Label htmlFor="name"> Nome</Label>
            <Input
              type="text"
              name="name"
              id="name"
              value={nome}
              onChange={(field) => setNome(field.target.value)}
              required
            />
          </div>
          <div className='d-flex flex-column'>
            <Label htmlFor="lastName">Sobrenome</Label>
            <Input
              type="text"
              name="lastName"
              id="lastName"
              value={sobrenome}
              onChange={(field) => setSobrenome(field.target.value)}
              required
            />
          </div>
        </div>

        <div className='d-flex flex-column w-100'>
          <Label htmlFor="tel">Telefone / Whatsapp</Label>
          <InputMask
            className='inputTel'
            mask={'(99) 99999-9999'}
            placeholder={'(99) 99999-9999'}
            value={tel}
            onChange={event => setTel(event.target.value)}
          />
        </div>

        <div className='d-flex flex-column w-100'>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(field) => setEmail(field.target.value)}
            required
          />
        </div>

        <div className='d-flex flex-column w-100'>
          <Label htmlFor="msg">Mensagem</Label>
          <TextArea
            name="msg"
            id="msg"
            rows={4}
            value={msg}
            onChange={(field) => setMsg(field.target.value)}
            required
          />
        </div>


        <Button type='submit'>ENVIAR</Button>

      </form>

    </section>

  );
}