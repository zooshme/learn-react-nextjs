import React from 'react'
import { Heading } from '../components/Heading'
import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { LessonCard } from '../components/LessonCard'
import { ThemeToggle } from '../components/ThemeToggle'

const Home = () => (
  <>
    <Header />
    <Container>
      <Heading level={1}>Learn React</Heading>

      <LessonCard title="JSX" subtitle="HTML in JavaScript" url="/lessons/jsx" />

      <ThemeToggle checked={true} />
    </Container>
  </>
)

export default Home
