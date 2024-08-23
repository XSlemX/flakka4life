import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'
import { Button } from '@/components/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Innmeldingen er vellykket',
  description: 'Takk for at du har blitt med i Flaktveit Frissbeegolf.',
}

export default function SucessPage() {
  return (
    <SimpleLayout
      title="Innmeldingen er vellykket!"
      intro="Takk for at du har blitt med i Flaktveit Frissbeegolf. Du vil snart motta en epost med mer informasjon."
    >
      <Button href={'/'}>Tilbake til forsiden</Button>
    </SimpleLayout>
  )
}
