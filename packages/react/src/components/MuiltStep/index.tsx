import { Label, MultiStepContainer, Step, Steps } from './styles'

export interface MuiltStepProps {
  size: number
  currentStep?: number
}

export function MuiltStep({ size, currentStep = 1 }: MuiltStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Step {currentStep} of {size}
      </Label>

      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />
        })}
      </Steps>
    </MultiStepContainer>
  )
}
