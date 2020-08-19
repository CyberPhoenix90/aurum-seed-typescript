import { Aurum } from 'aurumjs';
import '../scss/example.scss';
import aurumImg from './images/aurum.png';

Aurum.attach(
    <div class="root">
        <div class="hello">Hello Aurum</div>
        <a href="https://aurumjs.org/" target="_blank">
            <img src={aurumImg} class="aurum-img" />
        </a>
        <div class="links">
            <a href="https://github.com/CyberPhoenix90/aurum">Github</a>
            <a href="https://www.npmjs.com/package/aurumjs">Npm</a>
            <a href="https://aurumjs.org/">Official website</a>
            <a href="https://aurumjs.org/#/getting_started">Getting Started</a>
        </div>
    </div>,
    document.body
);
