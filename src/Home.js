import React, {Component} from "react";


class Home extends Component {
    render() {
        return (
            <div>
                <h2>HELLO</h2>
                <p>Im Leo, the codingcaveman. This is a simple react spa I built using the create-react-app cli extension</p>
 
        <p>Found a tutorial < a href="https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm">here</ a>.</p>
        <h3>My Personal Links</h3>
    <ul>
      <li><a href="https://twitter.com/Domt301?ref_src=twsrc%5Etfw" title="Twitter" target="_blank" ><img src={require("./assets/Twitter-logo-2012.png")}/></a> 
    
      </li>&nbsp;
       <li><a href="https://domthecodingcaveman.wordpress.com/" title="Blog" target="_blank" ><img src={require("./assets/Blog.png")}/></a>
      
      </li>&nbsp;
        <li><a href="https://github.com/Domt301" title="Github" target="_blank" ><img src={require("./assets/Octocat.jpg")}/></a> 
        
      </li>
    </ul>
                
            </div>
        );
    }
}

export default Home;