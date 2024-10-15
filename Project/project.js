import './project.css'

export class Project{
    constructor(){}

    renderProjectData(){
        const projectTpl = `<div id="projectid">
            <h1>LATEST PROJECTS</h1>
            
            <div class="project-main-div">

            <div class="project-grid"> 
            <div class="projectinfo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG6L1EOKMX_TAKWdRxihIkgXYojtfrsTZQyv2AdaflV0bX-LEgn4jTm0i-5jaBgly2al8&usqp=CAU"/>
            </div>

            <div class="projectinfo">
                <h4>Stanza Living Clone</h4>
                <p>
                Move-in to Fully Furnished, Hassle free PG at Zero Brokerage & One Month Security Deposit. Private & Sharing Furnished Rooms for Students & Working Professional with WiFi, Food...</p>
                <div class="project-All-Btns-Div">
                    <a target="_blank" href="https://stanzaliving-clone-nandini.netlify.app/"><button>VIEW PROJECT</button></a>
                    <a target="_blank" href="https://github.com/Nandiniatri/PG-Finder-Clone"><button>VIEW IN GITHUB</button></a>
                </div>
            </div>
        </div>



            <div class="project-grid"> 
                <div class="projectinfo">
                    <img src="https://doccure.dreamstechnologies.com/assets/img/inner-pages/rtl-img.webp"/>
                </div>
             
            <div class="projectinfo">
                    <h4>Doccure Clone</h4> 
                    <p>Doccure – Doctor Appointment Booking Template is a appointment management and patient management template. We provide a simple and easy booking online system. 
                    </p>
                <div class="project-All-Btns-Div">
                    <a target="_blank" href="https://react-doccure-nandiniatri.netlify.app/"><button>VIEW PROJECT</button></a>
                    <a target="_blank" href="https://github.com/Nandiniatri/React-Doccure-Website"><button>VIEW IN GITHUB</button></a>
                </div>
            </div>
        </div>

        
        <div class="project-grid"> 
            <div class="projectinfo">
                <img src="https://miro.medium.com/v2/resize:fit:960/0*qMSoOn1GSLx1dNMx"/>
            </div>
        
        <div class="projectinfo">
                <h4>Pinterest Clone</h4>
                <p>Pinterest is a visual discovery engine for finding ideas like recipes, home and style inspiration, and more.You'll always find ideas to spark inspiration. When you discover Pins you love, save them to boards to keep your ideas organized and easy to find.</p>
                <div class="project-All-Btns-Div">
                    <a target="_blank" href="https://pinterest-clone-nandini.netlify.app/"><button>VIEW PROJECT</button></a>
                    <a target="_blank" href="https://github.com/Nandiniatri/Pinterest-Clone"><button>VIEW IN GITHUB</button></a>
            </div>
        </div>
    </div>

    
        <div class="project-grid"> 
            <div class="projectinfo">
                <img src="https://zanzaneetkitchen.com/wp-content/uploads/2021/11/BlogBesan-Laddoo.jpg"/>
            </div>
            
            <div class="projectinfo">
                <h4>Laddu Restaurants</h4>
                <p>A restaurant is a place where you can eat a meal and pay for it. In restaurants, your food is usually served to you at your table by a waiter or waitress. The restaurant serves breakfast, lunch, and dinner. The food at the restaurant was good and the waiters were polite.</p>
                <div class="project-All-Btns-Div">
                    <a target="_blank" href="https://laddurestaurant-nandini.netlify.app/"><button>VIEW PROJECT</button></a>
                    <a target="_blank" href="https://github.com/Nandiniatri/Restaurant-App"><button>VIEW IN GITHUB</button></a>
                </div>
        </div>
    </div>


        <div class="project-grid"> 
            <div class="projectinfo">
                <img src="Screenshot (1026).png"/>
            </div>

            <div class="projectinfo">
                <h4>Flipkart Clone</h4>
                <p>
                Flipkart is an Indian e-commerce company that connects buyers and sellers online.In this you can buy categories, including electronics, fashion, home goods, groceries, and more.</p>
                <div class="project-All-Btns-Div">
                    <a target="_blank" href="https://flipkart-clone-nandiniatri.netlify.app/"><button>VIEW PROJECT</button></a>
                    <a target="_blank" href="https://github.com/Nandiniatri/React--flipkart"><button>VIEW IN GITHUB</button></a>
                </div>
            </div>
        </div>

 </div>
    
      </div>`

        const create = document.createElement('div');
        create.innerHTML = projectTpl;
        create.setAttribute('id', 'project')
        const appId = document.getElementById('app');
        appId.append(create);
    }
}

const project = new Project();
project.renderProjectData();

