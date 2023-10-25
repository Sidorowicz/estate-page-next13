import Link from "next/link";
import React from "react"
import EmptyState from "./EmptyState";

async function getOffers() {
    const res = await fetch('http://localhost:8000/houses', {
        next: {
            revalidate: 10
        }
    })
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return res.json()
}

type House = {
    id: number;
    location: string;
    price: number;
    description: string;
    owner: string;
    images: Array<string>;
};

export default async function CurrentOffersList({ searchParams }: { searchParams: any }) {
    const minPrice = searchParams.minPrice
    const maxPrice = searchParams.maxPrice
    const searchText = searchParams.search

    const houses = await getOffers()
    const filteredHouses = houses.filter((el: any) => (!maxPrice || !minPrice || el.price > minPrice && el.price < maxPrice) && (!searchText || el.description.includes(searchText))

    )
    return (
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
            {filteredHouses.map((house: House) =>
                <div style={{ width: 400, border: '1px solid gray', borderRadius: 15, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', margin: 16 }}>
                    <div style={{ display: 'flex', width: '100%', position: 'relative' }}>
                        {house.price < 100000 && <div style={{ background: 'white', position: 'absolute', left: 10, top: 10, padding: 8, border: '1px solid gray', borderRadius: 10, color: 'green', width: 40, height: 40, fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <i className="fa fa-dollar" aria-hidden="true" />
                        </div>}
                        <img src={house?.images[0]} style={{ width: '100%', height: 200 }} />
                    </div>
                    <div style={{ borderTop: '1px solid gray', borderTopLeftRadius: 15, borderTopRightRadius: 15, padding: 8, marginTop: -10, background: 'white', zIndex: 1000 }}>
                        <p>Localization: {house.location}</p>
                        <p>Description: {house.description}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Link href={`/gallery?id=${house.id}`} style={{ textDecoration: 'none', border: '1px solid gray', borderRadius: 10, background: "green", color: 'white', padding: '4px 8px' }}>View Gallery</Link>
                            <div style={{ display: 'flex' }}>Starting price: <p style={{ color: 'green', fontWeight: 700, marginLeft: 8 }}>{house.price}$</p></div>
                        </div>
                    </div>
                </div>
            )}
            {filteredHouses.length === 0 &&
                <EmptyState text=" There are no offers now. Contact us to get more details.  " />
            }
        </div>
    )
}

