import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title> Quiz | Next.js </title>
      </Head>
      <QuizContainer>

        <Widget>
          <Widget.Header>
            <h1>Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(event) => {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                name="userName"
                onChange={(event) => setName(event.target.value)}
                placeholder="Digite seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            <p>hahahahaha</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/mam81" />
    </QuizBackground>
  );
}
