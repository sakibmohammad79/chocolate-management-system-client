import Swal from "sweetalert2";

const DisplayChocolate = ({chocolate}) => {

    const handleDelete = (_id) =>{
        console.log(_id);
        fetch(`http://localhost:5000/chocolate/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount> 0){
                Swal.fire({
                    icon: 'delete',
                    title: 'Deleted successfully',
                    text: 'Cool!',
                  })
            }
        })
    }


    const {name, country, category, photo} = chocolate;
    return (
        <div className='m-20'>
      <table>
  <thead>
    <tr>
      <th>Image</th>
      <th>Name</th>
      <th>Country</th>
      <th>Category</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src={photo} alt=""/></td>
      <td>{name}</td>
      <td>{country}</td>
      <td>{category}</td>
      <td><button className=''>Edit</button><button onClick={()=>handleDelete(chocolate._id)}>Delete</button></td>
    </tr>
  </tbody>
</table>
      </div>
    );
};

export default DisplayChocolate;