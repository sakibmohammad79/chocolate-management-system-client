import { Link, useLoaderData } from 'react-router-dom';
import './AddingChocolate.css';
import DisplayChocolate from '../DisplayChocolate';
const AddingChocolate = () => {
  const chocolates = useLoaderData();
    return (
        <div className='p-24'>
          <div>
          <h2 className='text-white p-4 rounded-lg text-center bg-secondary font-extrabold w-1/4 mx-auto'>Chocolate Management System</h2>
          <p><Link to='/addchocolate'>New Chocolate</Link></p>
          </div>
          <div>
            
            {
              chocolates.map(chocolate => <DisplayChocolate key={chocolate._id}
              chocolate={chocolate}></DisplayChocolate>)
            }
          </div>
        </div>
    );
};

export default AddingChocolate;