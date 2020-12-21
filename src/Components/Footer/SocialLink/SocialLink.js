

          import React from 'react'
          

          let social="";
          const SocialLink = (props) => {
              switch(props.social)
              {
                  case "facebook":{
                      social=<a href="#" class="btn btn-fab  fg-white"><span class="mai-logo-facebook"></span></a>
                      break;
                  }
                  case "twitter":{
                      social=<a href="#" class="btn btn-fab  fg-white"><span class="mai-logo-twitter"></span></a>
                      break;

                  }
                  case "instagram":{
                    social=<a href="#" class="btn btn-fab  fg-white"><span class="mai-logo-instagram"></span></a>
                    break;

                }
                case "google":{
                    social=<a href="#" class="btn btn-fab  fg-white"><span class="mai-logo-google"></span></a>
                    break;

                }
                default:{
                    social="";
                    break;

                }
              }
              return (
                  <>
                      {social}
                  </>
              )
          }
          
          export default SocialLink
          