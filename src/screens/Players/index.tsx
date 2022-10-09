import { Container, Form } from './styles'

import { Header } from '@components/Header'
import { Input } from '@components/Input'
import { Highlight } from '@components/HighLight'
import { ButtonIcon } from '@components/ButtonIcon'

export function Players() {
  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />

      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
      </Form>

      <ButtonIcon icon="add" />
    </Container>
  )
}
