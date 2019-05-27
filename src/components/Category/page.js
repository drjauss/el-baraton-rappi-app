import React from 'react'
import Category from './index';

const Page = (props) => {
    const {
        categoryList,
        parentVisible,
        sortProductsByCategory,
        nestingLevel,
        listOpen,
        toggleList
    } = props;

    return (
        categoryList.sublevels
            ?parentVisible &&
                (
                    <span>
                        <li 
                            className="collection-header red lighten-1 hoverable" 
                            onClick={toggleList}>
                                <span className="bold white-text">
                                    <i className={"fas "+(listOpen? "fa-minus-circle":"fa-plus-circle")}></i>
                                    &nbsp;{categoryList.name}
                                </span>
                        </li>
                        {categoryList.sublevels.map((category)=>{
                            return listOpen &&
                                    <Category 
                                        sortProductsByCategory={sortProductsByCategory}
                                        parentVisible={listOpen}
                                        nestingLevel={nestingLevel+1}
                                        categoryList={category}
                                        key={category.name}/>
                        })}
                    </span>
                )
        :parentVisible && 
            (
                <li 
                    onClick={() => {sortProductsByCategory(categoryList.id)}} 
                    className="collection-item ">
                        <span className=" grey-text text-darken-3 bold">
                            {categoryList.name}
                            <span className="secondary-content">
                                <i className="fas fa-play grey-text text-darken-3"></i>
                            </span>
                        </span>
                </li>
            )
    )
}

export default Page;
