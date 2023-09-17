import Post from '../../Main/Post'
import commercial1 from '../../../assets/img/commercial/porshe.jpg'
import commercial2 from '../../../assets/img/commercial/avtook.png'
import commercial3 from '../../../assets/img/commercial/bentley.jpg'

const HomePage = () => {
    return (
        <main className="main">
            <div className="container">
                <div className="main__inner">
                    <section className="section">
                        <Post />
                        <Post />
                        <Post />
                    </section>
                    <aside className="sidebar">
                        <div className="commercial">
                            <img
                                src={commercial1}
                                alt="pic"
                                className="commercial__img"
                            ></img>
                            <p className="commercial__info">
                                Porsche Центр Минск
                                <br />
                                Автосалон тел. +375 17 3098 911
                                <br />
                                info@porsche.by
                            </p>
                        </div>
                        <div className="commercial">
                            <img
                                src={commercial2}
                                alt="pic"
                                className="commercial__img"
                            ></img>
                            <p className="commercial__info">
                                Гомель, Речицкий проспект 80 пом. 9,10 <br />
                                info@autook.by
                            </p>
                        </div>
                        <div className="commercial">
                            <img
                                src={commercial3}
                                alt="pic"
                                className="commercial__img"
                            ></img>
                            <p className="commercial__info">
                                Bentley центр Минск
                                <br />
                                Минск, ул. Сторожовская 6 <br />
                                <a href="tel:+375447000034">
                                    +375 44 7 0000 34
                                </a>
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    )
}

export default HomePage
