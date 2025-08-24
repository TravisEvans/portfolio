const Pics = () => {
      return (
            <>
                  <section className="hero">
                        <div className="textHero container">
                              <h2>Some favourite images of mine.</h2>
                        </div>
                  </section>

                  <section className="hero"> {/**row1 */}
                        <div
                              className="picHero"
                              style={{ backgroundImage: 'url(/images/car.webp)' }}
                        />
                        <div
                              className="picHero"
                              style={{ backgroundImage: 'url(/images/field.webp)' }}
                        />
                  </section>
                  <section className="hero"> {/**row2 */}
                        <div
                              className="picHero"
                              style={{ backgroundImage: 'url(/images/lake.webp)' }}
                        />
                        <div
                              className="picHero"
                              style={{
                                    backgroundImage: 'url(/images/mountain.webp)', backgroundRepeat: "no-repeat", backgroundPosition: "top center" }}
                        />
                  </section>
                  <section className="hero"> {/**row3 */}
                        <div
                              className="picHero"
                              style={{ backgroundImage: 'url(/images/don.webp)' }}
                        />
                        <div
                              className="picHero"
                              style={{
                                    backgroundImage: 'url(/images/bright.webp)', backgroundRepeat: "no-repeat", backgroundPosition: "top center" }}
                        />
                  </section>
                  <section className="hero"> {/**row4 */}
                        <div
                              className="picHero"
                              style={{ backgroundImage: 'url(/images/jpTree.webp)' }}
                        />
                        <div
                              className="picHero"
                              style={{
                                    backgroundImage: 'url(/images/jpTree2.webp)', backgroundRepeat: "no-repeat", backgroundPosition: "top center" }}
                        />
                  </section>
                  <section className="hero"> {/**row5 */}
                        <div
                              className="picHero"
                              style={{ backgroundImage: 'url(/images/jpSnow.webp)' }}
                        />
                        <div
                              className="picHero"
                              style={{
                                    backgroundImage: 'url(/images/jpGate.webp)', backgroundRepeat: "no-repeat", backgroundPosition: "top center" }}
                        />
                  </section>
                  <section className="hero"> {/**row6 */}
                        <div
                              className="picHero"
                              style={{
                                    backgroundImage: 'url(/images/jpGuy.webp)', backgroundRepeat: "no-repeat", backgroundPosition: "center"
                              }}                        />
                        <div
                              className="picHero"
                              style={{
                                    backgroundImage: 'url(/images/jpGuy2.webp)', backgroundRepeat: "no-repeat", backgroundPosition: "center" }}
                        />
                  </section>
            </>
      );
};

export default Pics;
