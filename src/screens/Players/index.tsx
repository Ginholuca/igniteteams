import { Container, Form } from './styles'

import { Header } from '@components/Header'
import { Filter } from '@components/Filter'
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
        <ButtonIcon icon="add" />
      </Form>

      <Filter title="Time A" />
    </Container>
  )
}
