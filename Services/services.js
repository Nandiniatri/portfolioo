import './services.css';

export class Services {
    constructor() {}

    renderServicesData() {
        const serviceTpl = `
        <div class="services-Main-Container" id="services">
            <div class="services-Main-Container-h1"><h1>CORE COMPETENCIES</h1></div>
            <div class="services-Main1-Container">
                <div class="services-Main1-Container-innerDiv1" id="one">
                    <div class="services-Main1-Container-innerDiv1-div1">
                        <i class="fa fa-phone"></i>
                    </div>
                    <div>
                        <h5>Web Design</h5>
                        <p>Web design involves creating the visual elements and layout of a website, while coding involves translating these designs.</p>
                    </div>
                </div>
                <div class="services-Main1-Container-innerDiv2" id="one">
                    <div class="services-Main1-Container-innerDiv1-div1">
                        <i class="fa fa-laptop"></i>
                    </div>
                    <div>
                        <h5>Performance Optimization</h5>
                        <p>Performance Optimization is the process of refining the efficiency of systems and applications to improve their output, speed, or scalability.</p>
                    </div>
                </div> 
                <div class="services-Main1-Container-innerDiv3" id="one">
                    <div class="services-Main1-Container-innerDiv1-div1">
                        <i class="fa fa-exclamation-triangle"></i>
                    </div>
                    <div>
                        <h5>Testing and Debugging</h5>
                        <p>Testing is the process using which we find errors and bugs. Debugging is the process using which we correct the bugs.</p>
                    </div>
                </div>
                <div class="services-Main1-Container-innerDiv4" id="one">
                    <div class="services-Main1-Container-innerDiv1-div1">
                        <i class="fa fa-columns"></i>
                    </div>
                    <div>
                        <h5>Responsive web Design</h5>
                        <p> Responsive web design is about creating web pages that look good on all devices!.A responsive design adapts the web-page.</p>
                    </div>
                </div> 
                <div class="services-Main1-Container-innerDiv5" id="one">
                    <div class="services-Main1-Container-innerDiv1-div1">
                        <i class="fa fa-phone"></i>
                    </div>
                    <div>
                        <h5>API Integration</h5>
                        <p>An API integration is the connection between two or more applications, via their APIs, that lets those systems exchange data.</p>
                    </div>
                </div>
                <div class="services-Main1-Container-innerDiv6" id="one">
                    <div class="services-Main1-Container-innerDiv1-div1">
                        <i class="fa fa-globe"></i>
                    </div>
                    <div>
                        <h5>Scalable and Maintainable Code</h5>
                        <p> clear naming conventions, modular design, consistent indentation, proper documentation, adherence to SOLID principles and code reviews.</p>
                    </div>
                </div>
            </div>
        </div>`;

        const create = document.createElement('div');
        create.innerHTML = serviceTpl;
        const appId = document.getElementById('app');
        appId.appendChild(create);
    }

}
const service = new Services();
service.renderServicesData();

// const allImgContainer = document.querySelectorAll('.services-Main1-Container-innerDiv');
// console.log(allImgContainer);
// allImgContainer.forEach((item) => {
//     item.addEventListener('click' , () =>{
//         alert('g')
//     })
// })


// function renderIntersection(enties){
//     enties.map((entry) =>{
//         if(entry.isIntersecting){
//             entry.target.classList.add('visible');   
//         }else{
//             entry.target.classList.remove('visible');
//         }
//     })
// }

// const observer = new IntersectionObserver(renderIntersection);
// console.log(observer);


