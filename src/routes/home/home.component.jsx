
import Directory from '../../components/directory/directory.cpmponent';
import { Outlet } from 'react-router-dom';



const Home=()=> {

  const categories=[
    {
      id:1,
      title:"Baby",
      imageUrl:require('../../assets/images/Baby.jpg') 
    },
    {
      id:2,
      title:"toddlers",
      imageUrl:require('../../assets/images/toddlers.jpg')
    },
    {
      id:3,
      title:"Children",
      imageUrl:require('../../assets/images/Children.jpg')
    },
    {
      id:4,
      title:"Teenagers",
      imageUrl:require('../../assets/images/Teenagers.jpg')
    },
    {
      id:5,
      title:"Adults",
      imageUrl:require('../../assets/images/Adults.jpg')
    },
  ]
  return (
    <Directory categories={categories}/>
  );
}

export default Home;
