import { render, screen } from '@testing-library/vue'
import { describe, expect, test } from 'vitest'
import GameForm from './GameForm.vue'

describe('Given a GameForm component', () => {
  describe('When it is rendered', () => {
    test("Then it should show a label with the text 'Question category'", () => {
      const labelText = 'Question category'

      render(GameForm)

      const categoryLabel = screen.getByLabelText(labelText)

      expect(categoryLabel).toBeInTheDocument()
    })

    test("Then it should show a label with the text 'Number of questions'", () => {
      const labelText = 'Number of questions'

      render(GameForm)

      const questionNumberLabel = screen.getByLabelText(labelText)

      expect(questionNumberLabel).toBeInTheDocument()
    })

    test("Then it should show a label with the text 'Number of questions'", () => {
      const labelText = 'Multiple choice'

      render(GameForm)

      const multipleChoiceLabel = screen.getByLabelText(labelText)

      expect(multipleChoiceLabel).toBeInTheDocument()
    })

    test("Then it should show a button with the text 'Let’s play!", () => {
      const buttonText = 'Let’s play!'

      render(GameForm)

      const button = screen.getByRole('button', { name: buttonText })

      expect(button).toBeInTheDocument()
    })
  })
})
