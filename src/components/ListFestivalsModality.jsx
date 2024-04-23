import React from 'react'
import CardFestival from './CardFestival'

const ListFestivalsModality = ({ title, modality,bg, color}) => {

    const showButtonAddFavorite = true

    return (
        <>
            <div className={`${bg} pt-8 `}>
                <div className="border-t-2 border-b-2 py-3 border-zinc-600 w-[80%] mx-auto">
                <span className='  text-2xl color-zinc-600'>
                    {title}
                </span>

                </div>
                <div className="overflow-x-hidden hover:overflow-x-scroll">
                <div className="snap-mandatory snap-x flex flex-no-wrap gap-10 m-5 w-[80%] mx-auto">
                    {modality.map(fest => {
                        return (
                            <CardFestival key={fest.id} fest={fest} showButtonAddFavorite={showButtonAddFavorite} />
                        )
                    })}
                </div>

            </div>
            </div>
            

        </>
    )
}

export default ListFestivalsModality