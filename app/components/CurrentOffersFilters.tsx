
import FilterRadioBox from "./FilterRadioBox"
import SearchBar from "./SearchBar"

export default function CurrentOffersFilters({ searchParams }: { searchParams: any }) {
    const maxPrice = searchParams.maxPrice

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 16, width: 300, border: '1px solid lightgray' }}>
                <SearchBar />
                <hr />
                <div className="stack">
                    <label>Price range </label>
                    <FilterRadioBox href={`?`} checked={!maxPrice} label={'All'} />
                    <FilterRadioBox href={`?minPrice=${0}&maxPrice=${60000}`} checked={maxPrice == 60000} label={'0-60.000$'} />
                    <FilterRadioBox href={`?minPrice=${60001}&maxPrice=${120000}`} checked={maxPrice == 120000} label={'60.000-120.000$'} />
                    <FilterRadioBox href={`?minPrice=${120001}&maxPrice=${500000}`} checked={maxPrice == 500000} label={'120.000-500.000$'} />
                    <FilterRadioBox href={`?minPrice=${500000}&maxPrice=${1000000000}`} checked={maxPrice == 1000000000} label={'+500.000$'} />
                </div>
            </div>
        </div >
    )
}
