import React, { useState } from 'react'

import { Header } from '@components/Header'
import { Highlight } from '@components/HighLight'
import { GroupCard } from '@components/GroupCard'

import { Container } from './styles'

export function Groups() {
  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      <GroupCard title="Galera do Ignite" />
    </Container>
  )
}
