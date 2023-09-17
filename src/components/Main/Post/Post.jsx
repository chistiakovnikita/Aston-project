import React from 'react'
import porshe from '../../../assets/img/posts/porshe-cayenne.jpg'
import { TiMessage } from 'react-icons/ti'
import { GrView } from 'react-icons/gr'
import './post.scss'

const Post = () => {
    return (
        <div className="post">
            <div className="post__header">
                <h1 className="post__title">
                    Представлен самый мощный в истории Porsche Cayenne
                </h1>
                <img className="post__img" src={porshe} alt="pic"></img>
            </div>
            <div className="post__content">
                <div className="post__author">
                    <div className="post__avatar"></div>
                    <span className="post__username">Karina</span>
                </div>
                <p className="post__text">
                    Компания Porsche представила 739-сильный кроссовер Cayenne
                    Turbo E-Hybrid. Он оснащен гибридной силовой установкой на
                    базе «битурбовосьмерки» 4.0 и до ста в зависимости от
                    исполнения разгоняется за 3,6—3,7 секунды. Штатно Cayenne
                    Turbo E-Hybrid идет с продвинутой передней оптикой HD Matrix
                    LED. Версии GT положены керамические тормоза,
                    полноуправляемое шасси и титановая выпускная система.
                    Стоимость кроссовера в Германии — от 176 324 евро, что
                    соответствует 18,3 миллиона рублей.
                </p>

                <div className="post__info">
                    <span className="post__date">17.09.2023</span>
                    <div className="post__qty-views">
                        <GrView /> <span>5</span>
                    </div>
                    <div className="post__qty-messages">
                        <TiMessage className="icom-message" /> <span>7</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
