import './AddingChocolate.css';
const AddingChocolate = () => {
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
      <td><img src="path/to/image1.jpg" alt=""/></td>
      <td>John Doe</td>
      <td>USA</td>
      <td>Business</td>
      <td><button>Edit</button><button>Delete</button></td>
    </tr>
  </tbody>
</table>
      </div>
    );
};

export default AddingChocolate;