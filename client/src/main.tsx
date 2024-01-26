import { css } from '@emotion/css';
import { Button, NumberField } from 'aurum-components';
import {
    Aurum,
    AurumComponentAPI,
    DataSource,
    Renderable,
    getRemoteFunction
} from 'aurumjs';
import aurumImg from './images/aurum.png';

const style = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .hello {
        color: gold;
        text-shadow: 2px 2px #aaa;
        font-size: 28px;
        margin-bottom: 20px;
    }

    .aurum-img {
        width: 120px;
    }

    .links {
        margin-top: 16px;
    }

    .links a {
        margin: 10px;
    }
`;

Aurum.attach(
    <div class={style}>
        <div class="hello">Hello Aurum</div>
        <a href="https://aurumjs.org/" target="_blank">
            <img src={aurumImg} class="aurum-img" />
        </a>
        <div class="links">
            <a href="https://github.com/CyberPhoenix90/aurum" target="_blank">
                Github
            </a>
            <a href="https://www.npmjs.com/package/aurumjs" target="_blank">
                Npm
            </a>
            <a
                href="https://cyberphoenix90.github.io/aurum-website"
                target="_blank"
            >
                Official website
            </a>
            <a
                href="https://cyberphoenix90.github.io/aurum-website/#/getting_started"
                target="_blank"
            >
                Getting Started
            </a>
        </div>

        <div>
            <TestComponent></TestComponent>
        </div>
    </div>,
    document.body
);

function TestComponent(
    props: {},
    children: Renderable[],
    api: AurumComponentAPI
): Renderable {
    const a = new DataSource(1);
    const b = new DataSource(2);
    const add = getRemoteFunction<{ a: number; b: number }, number>(
        {
            id: 'add',
            host: location.host + '/socket'
        },
        api.cancellationToken
    );

    const result = new DataSource<number>(3);

    return (
        <>
            <NumberField value={a}></NumberField>
            <NumberField value={b}></NumberField>
            <Button
                onClick={async () => {
                    result.update(await add({ a: a.value, b: b.value }));
                }}
            >
                Add
            </Button>
            Result: {result}
        </>
    );
}
