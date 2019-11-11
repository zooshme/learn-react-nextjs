import { FC } from 'react'
import styled from 'styled-components'
import { rem } from '../utils'

export const Container = styled.div(() => ({
	maxWidth: '1200px',
	paddingLeft: rem(42),
	paddingRight: rem(42),
	marginLeft: 'auto',
	marginRight: 'auto'
}));