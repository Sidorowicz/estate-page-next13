
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Vortex',
    description: 'Real estate dummy page',
}

export default function Layout({ children }: {
    children: React.ReactNode
}) {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: 300 }}>
                    <Link href="#">Tickets</Link>
                    <Link href="#">Offer Menagement</Link>
                </div>

            </div>
            {children}
        </div>
    )
}
