import { defineComponentMetadata } from '@/components/define'
import { playerUrls } from '@/core/utils/urls'

const entry = async () => {
  const { videoChange } = await import('@/core/observer')
  videoChange(async () => {
    const { playerAgent } = await import('@/components/video/player-agent')
    playerAgent.widescreen()
  })
}

export const component = defineComponentMetadata({
  name: 'AutoSwtichWidescreen',
  displayName: '自动切换为宽屏模式',
  description: '打开视频时自动切换为宽屏模式',
  entry,
  tags: [componentsTags.video],
  urlInclude: playerUrls,
})
