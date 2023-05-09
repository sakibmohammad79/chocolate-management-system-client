import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Swal from "sweetalert2";

const AddChocolate = () => {
    const handleAddChocolate = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const country = form.country.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const newChocolate = {name, country, category, photo};
        console.log(newChocolate);

        fetch('http://localhost:5000/chocolate', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newChocolate)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    icon: 'success',
                    title: 'successfully...',
                    text: 'new chocolate are added!',
                    footer: '<a href="">cool</a>'
                  })
                  form.reset();
            }
        })
    }
  return (
    <div className=" bg-slate-50">
      <div className="px-36 py-8">
        <div className="">
          <h1 className="text-center text-3xl font-extrabold  bg-secondary text-white p-4  w-1/2 rounded-lg mx-auto">
            Chocolate Mangament System
          </h1>
        </div>
        <div className="bg-white drop-shadow-lg mt-4 rounded-lg">
          <p className="p-4">
            <Link className="font-bold " to="/addingchocolate">
              <FaArrowLeft></FaArrowLeft> All Chocolates
            </Link>
          </p>
        </div>

        <div className=" bg-white rounded-lg mt-4">
          <div className="text-center p-8">
            <h3 className="font-bold text-3xl">New Chocolate</h3>
            <p className="font-medium">
              Use the below form to create a new product
            </p>

            <form onSubmit={handleAddChocolate} className="space-y-4">
                {/* form row */}
              <div className="form-control w-1/2 mx-auto">
                <label className="label">
                  <span className="label-text">Chocolate Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
                {/* form row */}
              <div className="form-control w-1/2 mx-auto">
                <label className="label">
                  <span className="label-text">Country</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="country"
                    placeholder="Enter Country Name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
                {/* form row */}
              <div className="form-control w-1/2 mx-auto">
                <label className="label">
                  <span className="label-text">Category Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="category"
                    placeholder="category"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
                {/* form photo row */}
              <div className="form-control w-1/2 mx-auto">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="photo"
                    placeholder="photo URL"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control w-1/2 mt-8 mx-auto">
                <input className="btn btn-active btn-secondary" type="submit" value="Add Chocolate" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddChocolate;
