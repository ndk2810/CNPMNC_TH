import React from 'react'

//COMPONENTS
import FormThemTour from '../components/PageQLTour/FormThemTour'
import TableTour from '../components/PageQLTour/TableTour'

const quanLyTour = ({ Tours }) => {
    return (
        <div>
            <FormThemTour />
            <TableTour Tours={Tours} />
        </div>
    )
}

export default quanLyTour
