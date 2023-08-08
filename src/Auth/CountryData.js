import React, { useMemo } from 'react'
import countryList from 'react-select-country-list'

const CountryData = ({ formData, handleChange }) => {
    const options = useMemo(() => countryList().getData(), [])
    return (
        <div>

            <select name="country" value={formData.country} onChange={handleChange}>
                <option value="">Select country</option>
                {options.map((country) => (
                    <option key={country.value} value={country.label}>
                        {country.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default CountryData