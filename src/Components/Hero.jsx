import React from "react";
import "../Assets/CSS/Hero.css";


const Hero = () => {
  return (
    <div>
      <div className="carousel">
        <div className="carousel__control"></div>
        <div className="carousel__stage">
          <div className="spinner spinner--left">
            <div className="spinner__face js-active" data-bg="#27323c">
              <div className="content" data-type="iceland">
                <div className="content__left">
                  <h1>
                    ICELAND
                    <br />
                    <span>EUROPE</span>
                  </h1>
                </div>
                <div className="content__right">
                  <div className="content__main">
                    <p>
                      “As I flew north to begin my third circuit of Iceland in
                      four years, I was slightly anxious. The number of visitors
                      to Iceland has doubled in that period, and I feared this
                      might mean a little less magic to go around. At the end of
                      this trip, 6000km later, I'm thrilled to report that the
                      magic levels remain high. It's found in glorious football
                      victories and Viking chants, kayaking among icebergs,
                      sitting with puffins under the midnight sun and crunching
                      across brand-new lava fields.”{" "}
                    </p>
                    <p>– Carolyn Bain</p>
                  </div>
                  <h3 className="content__index">01</h3>
                </div>
              </div>
            </div>
            <div className="spinner__face" data-bg="#19304a">
              <div className="content" data-type="china">
                <div className="content__left">
                  <h1>
                    CHINA
                    <br />
                    <span>ASIA</span>
                  </h1>
                </div>
                <div className="content__right">
                  <div className="content__main">
                    <p>
                      “Its modern face is dazzling, but China is no one-trick
                      pony. The world's oldest continuous civilisation isn't all
                      smoked glass and brushed aluminium and while you won't be
                      tripping over artefacts – three decades of round-the-clock
                      development and rash town-planning have taken their toll –
                      rich seams of antiquity await.”
                    </p>
                    <p>– Damian Harper</p>
                  </div>
                  <h3 className="content__index">02</h3>
                </div>
              </div>
            </div>
            <div className="spinner__face" data-bg="#2b2533">
              <div className="content" data-type="usa">
                <div className="content__left">
                  <h1>
                    USA
                    <br />
                    <span>NORTH AMERICA</span>
                  </h1>
                </div>
                <div className="content__right">
                  <div className="content__main">
                    <p>
                      “When it comes to travel, America has always floored me
                      with its staggering range of possibilities. Not many other
                      countries have so much natural beauty – mountains,
                      beaches, rainforest, deserts, canyons, glaciers – coupled
                      with fascinating cities to explore, an unrivaled music
                      scene and all the things that make travel so rewarding
                      (friendly locals, great restaurants and farmers markets,
                      and plenty of quirky surprises).”{" "}
                    </p>
                    <p>– Regis St Louis</p>
                  </div>
                  <h3 className="content__index">03</h3>
                </div>
              </div>
            </div>
            <div className="spinner__face" data-bg="#312f2d">
              <div className="content" data-type="peru">
                <div className="content__left">
                  <h1>
                    PERU
                    <br />
                    <span>SOUTH AMERICA</span>
                  </h1>
                </div>
                <div className="content__right">
                  <div className="content__main">
                    <p>
                      “For me, Peru is the molten core of South America, a
                      distillation of the oldest traditions and the finest
                      building, weaving and art made by the most sophisticated
                      cultures on the continent. In Peru the wildest landscapes
                      – from frozen Andean peaks to the deep Amazon – help us
                      re-forge our connection to the natural world. It is also a
                      cultural stew, where diverse peoples live side by side,
                      negotiating modern life with humor and aplomb. Beyond
                      that, the cuisine alone makes it worth the trip. Every
                      return is rich and surprising.”
                    </p>
                    <p>– Carolyn McCarthy</p>
                  </div>
                  <h3 className="content__index">04</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
