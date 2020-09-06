import Category from 'components/Category/Index'
import Reciently from 'components/Reciently'
import React, { Fragment } from 'react'

export default function Feed() {
    return (
        <Fragment>
            <Category />
            <Reciently /> 
        </Fragment>
    )
}
