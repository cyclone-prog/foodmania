import aboutImg from '../assets/img/user.png';
const About = () => {
    return (
        
       
        <div className="container container-top-margin container-flex">
         <div>
         <h1>About page</h1>
         <p>This is personal project managed and practised by me.</p>
         </div>
         <div className="about-img" style={{width:'30%'}}> 
         <img style={{width:'100%'}} src={aboutImg} alt="user image" /> 
         </div>  
        </div>
        
    )
}
export default About