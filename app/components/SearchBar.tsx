'use client'

import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

const SearchBar = () => {
    const [value, setValue] = useState('')
    const searchParams = useSearchParams()
    const minPrice = searchParams.get('minPrice')
    const maxPrice = searchParams.get('maxPrice')
    return (
        <div>
            <input type="text" placeholder="Search..." onChange={(e) => setValue(e.target.value)} />
            <Link href={`?search=${value}${!!minPrice ? '&minPrice=' + minPrice : ''}${!!maxPrice ? '&maxPrice=' + maxPrice : ''}`}>
                <i className="fa fa-search" aria-hidden="true"></i>
            </Link>
        </div >
    )
}

export default SearchBar
