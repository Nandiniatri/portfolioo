import './intrested.css'

export class Intrested{
    constructor(){}

    renderIntrestedData(){
        const intrestedTpl = `<div class="intrested-Main-Container">
        <h1>Intrested working with me?</h1>
        <a href="#contactid"><button>CONTACT NOW</button></a>
        </div>`


        const create = document.createElement('div');
        create.innerHTML = intrestedTpl;
        const appId = document.getElementById('app');
        appId.append(create);
    }
}

const intrested = new Intrested();
intrested.renderIntrestedData();