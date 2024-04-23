import React from 'react'
import CardFestival from './CardFestival'

const ListFestivalsModality = ({ title, modality }) => {
    
    const showButtonAddFavorite = true

    return (
        <>
            <div>
                <span>
                    {title}
                </span>
            </div>
            <div className="overflow-x-hidden hover:overflow-x-scroll">
                <div className="flex flex-no-wrap gap-10 justify-center m-10 md:justify-start">
                    {modality.map(fest => {
                        return (
                            <CardFestival key={fest.id} fest={fest} showButtonAddFavorite={showButtonAddFavorite} />
                        )
                    })}
                </div>

            </div>

        </>
    )
}

export default ListFestivalsModality
