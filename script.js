//  const links=document.getElementsByClassName('link');
// // const sections= document.getElementByIdAll('section');
// // console.log(links);
// // console.log(sections[0]);

// // let activeLink =0;
// // console.log(links.length)
// // for(let i=0;i<links.length;i++){
// //     console.log("hello")
// //     console.log(links[i]);
// //     links[i].addEventListener("click",()=>{
// //         console.log("hello ss");
// //         // if(activeLink != i){
// //         //     links[activeLink].classList.remove('active');
// //         //     console.log(links[activeLink])
// //         //     links[i].classList.add('active');
// //         //     console.log(links[i])
// //         //     sections[activeLink].classList.remove('active')
        
// //         // setTimeout(()=>{
// //         //     activeLink=i;
// //         //     sections[i].classList.add('active');
// //         // },1000);
// //     // }
// //     })
   
// // }

// const containers= document.getElementByIdAll('.container')
    //   links[0].addEventListener("click",()=>{
    //    return  containers[0].classList.add('active')
    //   }
    //   )
 
// let activeLink=0;
 
// for(let i=0;i<links.length;i++){
  
//     links[i].addEventListener("click",()=>{
//           console.log(i)
//         if(activeLink !=i){
//             //console.log(containers[activeLink])
//            containers[activeLink].classList.remove('active')
//            activeLink=i;
//            //console.log(containers[i])
//            containers[i].classList.add('active');
//         }
//     })
// }

//    const project= document.getElementById('.project-link')
//    console.log(project);
//     project.addEventListener("click",()=>{
//        console.log("listening here")
     
//          document.getElementById('.project-container').style.opacity="1";
//      })
console.log("hello")
function homedisplay()
{
    document.getElementById('project-container').style.display="none";
    document.getElementById('about-container').style.display="none";
    document.getElementById('contact-container').style.display="none";
    document.getElementById('home-container').style.display="block";
    console.log("home")
}
function projectdisplay()
{
    document.getElementById('home-container').style.display="none";
    document.getElementById('about-container').style.display="none";
    document.getElementById('contact-container').style.display="none";
    document.getElementById('project-container').style.display="block";
    console.log("pro")
}

function aboutdisplay()
{
    document.getElementById('home-container').style.display="none";
    document.getElementById('project-container').style.display="none";
    document.getElementById('contact-container').style.display="none";
    document.getElementById('about-container').style.display="block";
    console.log("about")
}
function contactdisplay()
{
    document.getElementById('home-container').style.display="none";
    document.getElementById('about-container').style.display="none";
    document.getElementById('project-container').style.display="none";
    document.getElementById('contact-container').style.display="block";
    console.log("contact")
}

