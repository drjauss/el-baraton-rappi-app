import React from 'react'
import Category from '../Category'
import FilterBox from '../FilterBox'
import FilterButton from '../FilterButton'

const Page = (props) => {
    const {
        //filtersbutton
        resetSorting,
        sortListByPrice,
        sortPriceOrder,
        sortListByAvailability,
        sortAvailabilityOrder,
        sortListByQuantity,
        sortQuantityOrder,
        toggleVisibility,
        boxVisibility,

        //categories
        categoriesList,
        sortProductsByCategory,

        //filterBox
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
        sortProductsByAvailability,

    } = props;

    const displayBox = (isVisible) => {
        return (
            <div style={{display: isVisible?'block':'none'}}>
                <h5 className="grey-text text-darken-3 bold"><i className="fas fa-list"></i>&nbsp;Categor&iacute;as</h5>
                    {categoriesList.map((category,index)=>{
                        return  (
                            <ul key={index} className="collection with-header">
                                <Category 
                                sortProductsByCategory={sortProductsByCategory} 
                                parentVisible={true} 
                                nestingLevel={1} 
                                categoryList={category} 
                                key={category.name} />
                            </ul>
                        )
                    })}
                <h5 className="grey-text text-darken-3 bold"><i className="fas fa-search"></i> Filtra tu B&uacute;squeda</h5>
                    <FilterBox
                        minValue={minValue}
                        maxValue={maxValue}
                        minQuantity={minQuantity}
                        maxQuantity={maxQuantity}
                        currentMinValue={currentMinValue}
                        currentMaxValue={currentMaxValue}
                        currentMinQuantity={currentMinQuantity}
                        currentMaxQuantity={currentMaxQuantity}
                        displayAvailability={displayAvailability}
                        updateCurrentMaxValue={updateCurrentMaxValue}
                        updateCurrentMinValue={updateCurrentMinValue}
                        updateCurrentMaxQuantity={updateCurrentMaxQuantity}
                        updateCurrentMinQuantity={updateCurrentMinQuantity}
                        sortProductsByAvailability={sortProductsByAvailability}
                    />
            </div>
        )
    };

    return (
        <div className={"col s12 " + (boxVisibility? "l3" : "l12")}>
            <div className="padtop">
                <div className="row">
                    <div className="col s12">
                        <FilterButton
                            handleClick={()=>{resetSorting();toggleVisibility();}}
                            dataTooltip={boxVisibility? "Ocultar filtros":"Mostrar filtros"}
                            icon={boxVisibility? "fa-caret-square-down": "fa-caret-square-up"}
                        />
                        <FilterButton
                            handleClick={sortListByPrice}
                            dataTooltip={"Ordenar por precio"}
                            sortArrow={(sortPriceOrder === 0? "fa-sort" : sortPriceOrder === 1? "fa-sort-down" : "fa-sort-up")}
                            icon={"fa-dollar-sign"}
                        />
                        <FilterButton
                            handleClick={sortListByAvailability}
                            dataTooltip={"Ordenar por disponibilidad"}
                            sortArrow={(sortAvailabilityOrder === 0? "fa-sort" : sortAvailabilityOrder === 1? "fa-sort-down" : "fa-sort-up")}                             
                            icon={"fa-check"}
                        />
                        <FilterButton
                            handleClick={sortListByQuantity}
                            dataTooltip={"Ordenar por cantidad"}
                            sortArrow={(sortQuantityOrder === 0? "fa-sort" : sortQuantityOrder === 1? "fa-sort-down" : "fa-sort-up")}
                            icon={"fa-box-open"}
                        />
                    </div>
                </div>
                {displayBox(boxVisibility)}
            </div>
        </div>
    )
}

export default Page;