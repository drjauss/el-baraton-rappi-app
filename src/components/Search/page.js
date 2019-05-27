import React from 'react'

const Page = (props) => {
    const {
        searchTerms,
        handleClick,
        handleChange,
    } = props;
    return (
        
        <nav className="red lighten-1 product-search-bar">
            <div className="nav-wrapper">
                <form>
                <div className="input-field">
                    <input value={searchTerms} onChange={handleChange} id="search" type="search" placeholder="Busca tu producto aqui..." required />
                    <label className="label-icon" htmlFor="search"><i className="material-icons fas fa-search"></i></label>
                    <i onClick={handleClick} className="material-icons fas fa-times"></i>
                </div>
                </form>
            </div>
        </nav>
    )
}

export default Page
