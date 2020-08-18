import { Aurum } from "aurumjs";
import "../scss/example.scss";
import aurumImg from './images/aurum.png';

Aurum.attach(
    <div class="root">
        <div class="hello">Hello Aurum</div>
        <a href="https://aurumjs.org/" target="_blank">
            <img src={aurumImg} class="aurum-img" />
        </a>
    </div>,
    document.body
);
