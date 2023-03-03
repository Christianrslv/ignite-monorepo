import type { StoryObj, Meta } from '@storybook/react'

import { Box, MuiltStep, MuiltStepProps } from '@christian-ui/react'

export default {
  title: 'Form/MuiltStep',
  component: MuiltStep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MuiltStepProps>

export const Primary: StoryObj<MuiltStepProps> = {}

export const Full: StoryObj<MuiltStepProps> = {
  args: {
    currentStep: 4,
  },
}
