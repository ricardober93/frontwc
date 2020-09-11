import Category from 'components/Category/Index'
import AppMoblie from 'components/Layout/AppMoblie'
import RecientPost from 'components/RecientPost'
import PopularPost from 'components/PopularPost'
import React from 'react'

export default function Feed() {
    return (
        <AppMoblie>
            <Category />
            <RecientPost />
            <PopularPost />
        </AppMoblie>
    )
}
