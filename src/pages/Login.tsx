import type { FormEvent } from 'react'
import { useState } from 'react'
import Button from '../components/Button/Button'
import Input from '../components/Input/Input'
import logo from '../assets/logo_monocrome.png'
import styles from './Login.module.scss'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <main className={styles.loginPage}>
      <section className={styles.loginCard}>
        <div className={styles.loginCenter}>
          <div className={styles.image}>
            <img src={logo} alt="Isatec Sistemas" />
          </div>

          <div className={styles.header}>
            <h1>Bem-vindo</h1>
            <p>Faça login na sua conta</p>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <Input
            id="email"
            label="E-mail"
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <Input
            id="password"
            label="Senha"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            action={
              <a href="#" className={styles.forgotPassword}>
                Esqueceu a senha?
              </a>
            }
          />

          <Button type="submit">Entrar</Button>
        </form>

        <div className={styles.footer}>© 2026 Isatec Sistemas e Consultoria</div>
      </section>
    </main>
  )
}
