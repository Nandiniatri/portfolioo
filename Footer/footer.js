import './footer.css'

export class Footer{
    constructor(){}

    renderFooterData(){
        const footerTpl = `<div id ="contactid">
        <div class="footer-grid">

          <div class="footerinfo">
              <form>
                  <h3>Get in touch</h3>
                  <p >Our friendly team would love to hear from you.</p>
                  <div class="form-inner-div">
                    <div class="form-inner-div-div1">
                        <lable>First Name</label>
                        <div><input placeholder="Name*"/></div>
                    </div>
                    <div class="form-inner-div-div2">
                        <lable>Your Email</label>
                        <div><input placeholder="Email*"/></div>
                    </div>
                   
                  </div>
                  <lable>Subject</label>
                  <div><input placeholder="Subject*"/></div>
                  <lable>Your message</label>
                  <div><textarea placeholder="Your message*"/></textarea></div>
                  <button class="messages">SEND MESSAGES</button>
              </form>
          </div>

          <div class="footerinfo2">
              <div>
                <Img src ="https://pxdraft.com/themeforest/krinky/assets/img/contact-bg.png"/>
              </div>

              
              <div class="contactinfo">
                <div class ="phoneinfo">
                    <icon class="fa fa-envelope"/>
                </div>
                <div class="phoneNO">
                    <h5>PHONE</h5>
                    <p>+91 8791711016</p>
                </div>
              </div>

              <div class="contactinfo">
              <div class ="phoneinfo" id="phoneinfo2-fa">
                    <icon class="fa fa-phone"/>
              </div>
              <div class="phoneNO">
                  <h5>MAIL</h5>
                  <p>atrinandini8@gmail.com</p>
              </div>
            </div>

    </div>
</div>

        <div class="socila-media">
            <div class="left-media">
                <li><a target="_blank" href="https://www.linkedin.com/in/nandini-atri-494881232/"><icon class="fa fa-linkedin"/></a><li>
                <li><a target="_blank" href="https://github.com/Nandiniatri"><icon class="fa fa-github"/></a><li>
                <li><a target="_blank" href="https://www.instagram.com/nandiniatri/?igsh=MWhjeWRhajUxMDNhdA%3D%3D"><icon class="fa fa-instagram"/></a><li>
                
            </div>
            <div class="right-media">
                © 2023 copyright all right reserved
            </div>
        </div>`

        const create = document.createElement('div');
        create.innerHTML = footerTpl;
        const appId = document.getElementById('app');
        appId.append(create);
    }
}

const footer =  new Footer();
footer.renderFooterData();


{/* <div class="contactinfo">
<div class ="phoneinfo"  id="phoneinfo3-fa">
       <icon class="fa fa-map-marker"/>
</div>
<div class="phoneNO">
    <h5>VISIT MY LINKEDIN</h5>
    <a target="_blank" href="linkedin.com/in/nandini-atri-494881232/"><p>linkedin</p></a>
</div>
</div> */}


