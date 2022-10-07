import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Highlight } from '@components/HighLight'
import { Container, Content, Icon } from './styles'

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova Turma"
          subtitle="crie a turma para adicionar pessoas"
        />

        <Button title="Criar" />
      </Content>
    </Container>
  )
}
