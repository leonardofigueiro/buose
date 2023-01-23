import { FormEvent, useState } from 'react';
import InputMask from 'react-input-mask';
import { Button, Input, Label, Select, TextArea, Title } from './FormComponents/FormComponents';
import axios from 'axios';




export default function Form() {


  function gtag_report_conversion(url:Location | (string & Location)) {
    const callback = function () {
      if (typeof (url) != 'undefined') {
        window.location = url;
      }
    };
    gtag('event', 'conversion', {
      'send_to': 'AW-11074144232/V-osCNLDh4kYEOiPyKAp',
      'event_callback': callback
    });
    return false;
  }


  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [plano, setPlano] = useState('interiores');

  const data = {
    service_id: 'service_3snekti',
    template_id: 'template_t5rhirh',
    user_id: 'XogwfPiQvNhjKK6Dd',
    template_params: {
      'name': nome,
      'last_name': sobrenome,
      'tel': tel,
      'email': email,
      'plano': plano,
      'msg': msg
    }
  };


  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post('https://api.emailjs.com/api/v1.0/email/send', data)
      .then(() => {
        alert('Seu e-mail foi enviado! Em breve retornaremos.');
      })
      .catch((err) => {
        console.log(JSON.stringify(err));
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
    <section className=' container d-flex flex-wrap flex-lg-nowrap mt-5 justify-content-center align-items-center' id='formulario'>
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
              onChange={(field) => {
                setNome(field.target.value);
              }}
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

        <div className="d-flex flex-column w-100">
          <Label>Opção de plano</Label>
          <Select
            onChange={(field) => setPlano(field.target.value)}
          >
            <option value="interiores">Projeto de interiores</option>
            <option value="marcenaria">Projeto de marcenaria</option>
            <option value="consultoria">Consultoria de interiores</option>
          </Select>

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


        <Button 
          type='submit'
          onClick={() => gtag_report_conversion(window.location)}
        >ENVIAR</Button>

      </form>

    </section>

  );
}