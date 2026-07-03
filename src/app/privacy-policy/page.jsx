import PrivacyPolicyPage from '@/components/common/PrivacyPolicyPage'
import { createPageMetadata } from '@/lib/seo'
import React from 'react'

const page = () => {
  return (
    <PrivacyPolicyPage />
  )
}

export default page

export async function generateMetadata() {
  return createPageMetadata("/privacy-policy");
}
