import Link from 'next/link'
const FilterRadioBox = ({ href, checked, label }: { href: string, checked: boolean, label: string }) => {
  return (
    <Link href={href}>
      <div className="form-check">
        <input className="form-check-input" type="radio" name={label} id={label} checked={checked} />
        <label className="form-check-label" htmlFor={label}>
          {label}
        </label>
      </div>
    </Link>
  )
}

export default FilterRadioBox