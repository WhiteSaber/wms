import defaultSettings from '@/settings'

const title = defaultSettings.title || '云星空WMS'

export default function getPageTitle(pageTitle) {
  // if (pageTitle) {
  //   return `${pageTitle} - ${title}`
  // }
  return `${title}`
}
