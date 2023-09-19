import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={800}
        height={700}
        viewBox="0 0 800 700"
        backgroundColor="#c9c9c9"
        foregroundColor="#c2c2c2"
        {...props}
    >
        <rect x="0" y="0" rx="15" ry="15" width="600" height="457" />
        <circle cx="27" cy="506" r="27" />
        <rect x="0" y="553" rx="5" ry="5" width="587" height="28" />
        <rect x="0" y="610" rx="6" ry="6" width="192" height="29" />
        <rect x="132" y="580" rx="0" ry="0" width="12" height="0" />
        <rect x="69" y="493" rx="5" ry="5" width="195" height="30" />
        <rect x="0" y="657" rx="5" ry="5" width="230" height="29" />
    </ContentLoader>
)

export default Skeleton
