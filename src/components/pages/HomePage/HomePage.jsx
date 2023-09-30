import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { fetchPosts } from '../../../redux/slices/postsSlice'
import { fetchAdvertising } from '../../../redux/slices/advertisingSlice'
import { errorMessage } from '../../../utils/constants'
import Post from '../../Main/Post'
import Skeleton from '../../Main/Skeletons/Skeleton'
import ErrorFallback from '../../ErrorBoundary/ErrorFallback'
import Advertising from '../../Main/Advertising'
import AdvertisingSkeleton from '../../Main/Skeletons/AdvertisingSkeleton'

const HomePage = () => {
    const { posts, status } = useSelector((state) => state.postsSlice)
    const { advertising, advertisingStatus } = useSelector(
        (state) => state.advertisingSlice
    )
    console.log(advertising)
    const { authLogin } = useSelector((state) => state.authSlice)
    const { foundPost, foundPostStatus } = useSelector(
        (state) => state.searchSlice
    )

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPosts())
        dispatch(fetchAdvertising())
    }, [dispatch])

    return (
        <main className="main">
            <div className="container">
                <div className="main__inner">
                    <section className="section">
                        <ErrorBoundary FallbackComponent={ErrorFallback}>
                            {foundPostStatus === 'error' ? (
                                <div>
                                    <p>По данному запросу постов не найдено</p>
                                </div>
                            ) : foundPost.length > 0 ? (
                                foundPost.map((post) => (
                                    <Post key={post._id} post={post} />
                                ))
                            ) : status === 'error' ? (
                                <h2>{errorMessage}</h2>
                            ) : status === 'loading' ? (
                                [...new Array(2)].map((_, idx) => (
                                    <Skeleton key={idx} />
                                ))
                            ) : (
                                posts.map((post) => (
                                    <Post
                                        key={post._id}
                                        post={post}
                                        isVisible={
                                            authLogin?.user._id ===
                                            post.author._id
                                        }
                                    />
                                ))
                            )}
                        </ErrorBoundary>
                    </section>

                    <aside className="sidebar">
                        {advertisingStatus === 'error' ? (
                            <h2>{errorMessage}</h2>
                        ) : advertisingStatus === 'loading' ? (
                            [...new Array(2)].map((_, idx) => (
                                <AdvertisingSkeleton key={idx} />
                            ))
                        ) : (
                            advertising.map((advertising) => (
                                <Advertising
                                    key={advertising._id}
                                    advertising={advertising}
                                />
                            ))
                        )}
                    </aside>
                </div>
            </div>
        </main>
    )
}

export default HomePage
