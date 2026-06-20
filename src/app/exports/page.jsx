import ExportAbout from '@/components/exports/ExportAbout'
import ExportHero from '@/components/exports/ExportHero'
import InternationalHealthcareNetwork from '@/components/exports/InternationalHealthcareNetwork'
import RegulatoryCompliance from '@/components/exports/RegulatoryCompliance'
import TrustedManufacturerNetwork from '@/components/exports/TrustedManufacturerNetwork'
import Map from '@/components/home/Map'
import React from 'react'

const page = () => {
  return (
    <>
      <ExportHero />
      <ExportAbout/>
      {/* <InternationalHealthcareNetwork /> */} 
      <Map/>
      <TrustedManufacturerNetwork />
      <RegulatoryCompliance />
    </>
  )
}

export default page
