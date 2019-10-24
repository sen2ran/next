import React, { useContext, useState, useEffect } from 'react';
import { HeaderContext } from '../../State/Contexts/HeaderContext'
import { withRouter } from 'next/router';
import Link from 'next/link'


const Header = () => {
  const { headerState, dispatch } = useContext(HeaderContext)
  const { lang, navDetails } = headerState
  const [country, setCountry] = useState("")

  useEffect(() => {
    console.log(country);
    console.log(lang);
    if (country != lang) {
      setCountry(lang)
    }
  }, [lang])

  const countryChanged = (e) => {
    setCountry(e.target.value)
    dispatch({
      type: 'CHANGE_LANG',
      lang: e.target.value
    })
  }

  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 className="my-0 mr-md-auto font-weight-normal">Header</h5>

      <select value={country} onChange={countryChanged}>
        <option value="ca">Ca</option>
        <option value="in">In</option>
      </select>

      <nav className="my-2 my-md-0 mr-md-3">
        {
          navDetails.map(navDetail =>
            <Link href={'/' + lang + '/' + navDetail.linkTo} key={navDetail.name} ><a className="p-2 text-dark">{navDetail.name}</a></Link>
          )
        }
      </nav>
    </div >
  )
}

export default withRouter(Header)