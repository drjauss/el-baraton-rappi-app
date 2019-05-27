import React from 'react'

const Page = (props) => {
    const {
      minValue,
      maxValue,
      minQuantity,
      maxQuantity,
      currentMinValue,
      currentMaxValue,
      currentMinQuantity,
      currentMaxQuantity,
      displayAvailability,
      updateCurrentMaxValue,
      updateCurrentMinValue,
      updateCurrentMaxQuantity,
      updateCurrentMinQuantity,
      sortProductsByAvailability
                    
    } = props;

    return (
      <ul className="collapsible expandable white">
        <li className="white-text">
            <div className="collapsible-header grey darken-3 bold"><i className="fas fa-check white-text"></i> Por Disponibilidad</div>
            <div className="collapsible-body">
                <form action="#">
                    <p>
                        <label>
                            <input 
                                onChange={()=>{
                                  sortProductsByAvailability({"available":!displayAvailability.available, "unavailable":displayAvailability.unavailable})
                                }}
                                name="filtro" type="checkbox" 
                                checked={displayAvailability.available} />
                            <span className="grey-text text-darken-3 bold">Disponible</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                onChange={
                                    ()=>{
                                        sortProductsByAvailability(
                                            {
                                                "available":displayAvailability.available,
                                                "unavailable":!displayAvailability.unavailable
                                            }
                                        )
                                    }
                                }
                                name="filtro" 
                                type="checkbox"
                                checked={displayAvailability.unavailable}
                            />
                            <span className="grey-text text-darken-3 bold">
                                No Disponible
                            </span>
                        </label>
                    </p>
                </form>
            </div>
        </li>

        <li className="white-text">
            <div className="collapsible-header grey darken-3 bold"><i className="fas fa-dollar-sign"></i> Por Rango de Precios</div>
            <div className="collapsible-body">
                <form action="#">
                    <p className="grey-text text-darken-3 bold">Desde: {currentMinValue}</p>
                    <p className="range-field">
                        <input 
                            type="range"
                            min={minValue}
                            max={maxValue}
                            value={currentMinValue}
                            onChange={updateCurrentMinValue}
                        />
                    </p>
                </form>
                <form action="#">
                    <p className="grey-text text-darken-3 bold">Hasta: {currentMaxValue}</p>
                    <p className="range-field">
                        <input 
                            type="range"
                            min={minValue}
                            max={maxValue}
                            value={currentMaxValue}
                            onChange={updateCurrentMaxValue}
                        />
                    </p>
                </form>
            </div>
        </li>

        <li className="white-text">
            <div className="collapsible-header grey darken-3 bold"><i className="fas fa-box-open"></i> Por Cantidad Disponible</div>
            <div className="collapsible-body">
                <form action="#">
                    <p className="grey-text text-darken-3 bold">Desde: {currentMinQuantity}</p>
                    <p className="range-field">
                        <input 
                            type="range"
                            min={minQuantity}
                            max={maxQuantity}
                            value={currentMinQuantity}
                            onChange={updateCurrentMinQuantity}
                        />
                    </p>
                </form>
                <form action="#">
                    <p className="grey-text text-darken-3 bold">Hasta: {currentMaxQuantity}</p>
                    <p className="range-field">
                        <input 
                            type="range"
                            min={minQuantity}
                            max={maxQuantity}
                            value={currentMaxQuantity}
                            onChange={updateCurrentMaxQuantity}
                        />
                    </p>
                </form>
            </div>
        </li>
        </ul>
    )
}

export default Page
