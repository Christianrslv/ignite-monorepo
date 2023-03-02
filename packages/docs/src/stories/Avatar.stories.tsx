import type { StoryObj, Meta } from '@storybook/react'

import { Avatar, AvatarProps } from '@christian-ui/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/Christianrslv.png',
    alt: 'Christian',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
