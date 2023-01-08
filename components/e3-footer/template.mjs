import "./e3-donors/element.mjs";
import "./e3-sponsors/element.mjs";
import { THONLY } from "https://thonly.org/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${THONLY}/components/tl-footer/shadow.css">
    <link rel="stylesheet" href="components/e3-footer/shadow.css">
    <nav>
        <main>
            <section>
                <e3-donors></e3-donors>
                <e3-sponsors></e3-sponsors>
            </section>
            <section>
                <div>
                    <h5>Donate</h5>
                    <ul>
                        <li><a href="https://heartbank.fund/#333">HeartBank</a></li>
                        <li><a href="https://github.com/sponsors/333eco">GitHub</a></li>
                    </ul>
                </div>
                <div>
                    <h5>Sponsor</h5>
                    <ul>
                        <li><a href="https://kitty.kiitos.earth/#333">Kiitos</a></li>
                    </ul>
                </div>
            </section>
            <section>
                <div>
                    <h5>Follow</h5> 
                    <ul>
                        <li><a href="https://me.thonly.net/#333">THonly</a></li>
                    </ul>
                </div>
                <div>
                    <h5>Contact</h5>
                    <ul>
                        <li><a href="mailto:lab@333.eco">lab@333.eco</a></li>
                    </ul>
                </div>
            </section>
        </main>
        <footer>
            <small><a href="https://github.com/333eco">333™ Lab</a> &copy; 2023</small>
        </footer>
    </nav>
`;

export default template;