import { Link } from 'react-router-dom';

const Artists = () => {
    return (
        <>
            <section className="hero">
                <div className="textHero container">
                    <h2>List of Artists I enjoy.</h2>
                </div>
                <div
                    className="picHero"
                    style={{ backgroundImage: 'url(/images/car.webp)' }}
                />
            </section>

            <section id="brief" className="section light">
                <div className="container narrow">
                    <h3>Artist List</h3>
                    <ul className="noteableList">
                        <li><a href="https://www.chrisballantyne.com">Chris Ballantyne</a></li>
                        <li><a href="https://robertbingaman.com/works">Robert Bingaman</a></li>
                        <li><a href="https://carlosmorago.com/1280/galeria.php?id=59&d=1">Carlos Morago</a></li>
                        <li><a href="https://www.eriknitsche.org">Erik Nitsche</a></li>
                    </ul>
                    <br />
                    <h3>Fun places to find art, etc.</h3>
                    <ul className="noteableList">
                        <li><a href="https://socks-studio.com/category/visual-atlas/art/">SOCKS Studio</a></li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Artists;
