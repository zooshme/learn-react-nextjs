import React from 'react'
import { Heading } from '../components/Heading'
import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { LessonCard } from '../components/LessonCard'
import { ThemeToggle } from '../components/ThemeToggle'
import Toc from '../lessons/toc.mdx'

const Home = () => (
  <>
    <Header />
    <Container>
      <Heading level={1}>Learn React</Heading>

      <LessonCard title="JSX" subtitle="HTML in JavaScript" url="/lessons/jsx" />

      <ThemeToggle themeName={'light'} />
      <Toc />
    </Container>
  </>
)

export default Home
