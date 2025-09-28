
import React from 'react'
import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main>
      <h1 >
        Popular Companions
      </h1>

      <section className='home-section'>
        <CompanionCard id="123" name="Neura the Brainy Explorer" topic="Neura the Brainy Explorer" subject="science" duration={45} color="#ffda6e" />
        <CompanionCard id="456" name="Neura the Brainy Explorer" topic="Neura the Brainy Explorer" subject="science" duration={45} color="#ffda6e" />
        <CompanionCard id="678" name="Neura the Brainy Explorer" topic="Neura the Brainy Explorer" subject="science" duration={45} color="#ffda6e" />
      </section>

      <section className='home-section'>
        <CompanionList title = "Recently completed sessions" 
          companions={recentSessions}
          classNames ="w-2/3  max-lg:w-full"
        />
        <CTA />
      </section>

    </main>
  )
}

export default Page