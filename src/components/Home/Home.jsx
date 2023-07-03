

import './Home.css'
import Social from './Social';
import Date from './Date';

const Home = () => {
    return (
        <section className="home section" id='home'>
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social></Social>

                    <div className="home__img"></div>

                    <Date></Date>
                </div>
            </div>
        </section>
    );
};

export default Home;