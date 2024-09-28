// SvgIcons.stories.tsx
import React from 'react'
import { Meta, StoryFn } from '@storybook/react'

// 모든 SVG 파일을 불러오기
const requireSvgs = require.context('/public/images', false, /\.svg$/)

export default {
  title: 'Icons/SVG',
} as Meta

const Template: StoryFn = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '10px',
    }}
  >
    {requireSvgs.keys().map((fileName, index) => {
      const SvgIcon = requireSvgs(fileName).default
      return (
        <div key={index} style={{ textAlign: 'center' }}>
          <SvgIcon width="100" height="100" />
          <p>{fileName.replace('./', '')}</p> {/* 파일명에서 경로 부분 제거 */}
        </div>
      )
    })}
  </div>
)

export const AllIcons = Template.bind({})
