import React, { Suspense } from 'react'
import CurrentOffersFilters from '../components/CurrentOffersFilters'
import CurrentOffersList from '../components/CurrentOffersList'
import Loading from '../loading'

const page = ({ searchParams }: { searchParams: { [key: string]: string | string | [] | undefined } }) => {

    return (

        <div>
            <div style={{ display: 'flex' }}>
                <CurrentOffersFilters searchParams={searchParams} />

                {/* @ts-expect-error Server Component */}
                <Suspense fallback={<Loading />}><CurrentOffersList searchParams={searchParams} /></Suspense>
            </div>
        </div >

    )
}

export default page