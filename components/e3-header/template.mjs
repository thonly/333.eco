import { THONLY } from "https://thonly.org/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${THONLY}/components/tl-header/shadow.css">
    <link rel="stylesheet" href="components/e3-header/shadow.css">
    <header>
        <section>
            <a href="#"><figure>💗</figure></a>
            <h1>333™</h1>
        </section>
        <input id="menu-toggle" type="checkbox">
        <label class='menu-button-container' for="menu-toggle">
            <span class='menu-button'></span>
        </label>
        <div>
            <ul>
                <li>
                    <h3>Kiitos</h3>
                    <nav>
                        <a href="https://kiitos.earth"><button>Kiitos.Earth</button></a>
                    </nav>
                </li>
                <li>
                    <h3>Kiitti</h3>
                    <nav>
                        <a href="https://kiitti.app"><button>Kiitti.app</button></a>
                    </nav>
                </li>
                <!--<li>
                    <h3>HeartBank<sup>®</sup></h3>
                    <nav>
                        <a href="https://heartbank.org"><button>HeartBank.org</button></a>
                        <h4>Micro Wallet</h4>
                        <menu>
                            <li><a href="#wallet">Hard Wallet</a></li>
                            <li><a href="#wearable">Wearable Jewelry</a></li>
                        </menu>
                    </nav>
                </li>
                <li>
                    <h3>Nhia Kou</h3>
                    <nav>
                        <a href="https://nhiakou.org"><button>NhiaKou.org</button></a>
                        <h4>Free Energy</h4>
                        <menu>
                            <li><a href="#solar">Solar Power</a></li>
                            <li><a href="#storage">Power Storage</a></li>
                        </menu>
                    </nav>
                </li>
                <li>
                    <h3>Silicon Wat</h3>
                    <nav>
                        <a href="https://siliconwat.org"><button>SiliconWat.org</button></a>
                        <h4>Free Internet</h4>
                        <menu>
                            <li><a href="#drone">Micro Drones</a></li>
                            <li><a href="#network">Decentralized Network</a></li>
                        </menu>
                    </nav>
                </li>
                <li>
                    <h3>THonly™</h3>
                    <nav>
                        <a href="https://thonly.com"><button>THonly.com</button></a>
                        <h4>Metaverse Gear</h4>
                        <menu>
                            <li><a href="#ar">AR</a></li>
                            <li><a href="#vr">VR</a></li>
                        </menu>
                    </nav>
                </li>-->
            </ul>
        </div>
        <aside>
            <select onchange="this.getRootNode().host.changeLanguage(event)">
                <option value="en">English</option>
                <option value="km" disabled>Khmer</option>
                <option value="ru" disabled>Russian</option>
                <option value="es" disabled>Spanish</option>
                <option value="zh" disabled>Chinese</option>
            </select>
        </aside>
    </header>
`;

export default template;