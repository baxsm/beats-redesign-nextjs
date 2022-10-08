import React from 'react'
import HomeSection from './sections/HomeSection'
import SponsorSection from './sections/SponsorSection'
import SpecsSection from './sections/SpecsSection'
import CaseSection from './sections/CaseSection'
import DiscountSection from './sections/DiscountSection'
import ProductsSection from './sections/ProductsSection'

export default function Main() {
  return (
    <main className='main'>
        <HomeSection></HomeSection>
        <SponsorSection></SponsorSection>
        <SpecsSection></SpecsSection>
        <CaseSection></CaseSection>
        <DiscountSection></DiscountSection>
        <ProductsSection></ProductsSection>
    </main>
  )
}
