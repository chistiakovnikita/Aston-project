import React from 'react'
import ContentLoader from 'react-content-loader'

const AdvertisingSkeleton = (props) => (
    <ContentLoader
        speed={2}
        width={400}
        height={300}
        viewBox="0 0 400 300"
        backgroundColor="#c9c9c9"
        foregroundColor="#c2c2c2"
        {...props}
    >
        <rect x="0" y="3" rx="3" ry="3" width="300" height="185" />
        <rect x="12" y="200" rx="0" ry="0" width="250" height="25" />
        <rect x="109" y="229" rx="0" ry="0" width="1" height="0" />
        <rect x="12" y="237" rx="0" ry="0" width="250" height="25" />
        <rect x="12" y="271" rx="0" ry="0" width="250" height="25" />
    </ContentLoader>
)

export default AdvertisingSkeleton
