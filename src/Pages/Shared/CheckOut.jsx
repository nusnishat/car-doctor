import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const CheckOut = () => {
   const service = useLoaderData();
   const {user} = useContext(AuthContext);

   const {_id, price, title, img} = service;

   const handleCheckOut = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const price = form.price.value;
    const booking ={
        customerName : name,
        date,
        email,
        price,
        serviceId : _id, 
        service : title,
        img
    }
    fetch('http://localhost:5000/bookings', {
        method: 'POST',
        headers:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify(booking)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
   }
    return (
        <div className="my-16 max-w-xl mx-auto">
            <h2 className='text-center text-3xl font-semibold text-orange-600'>Book Service: {title} </h2>
            <form onSubmit={handleCheckOut}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"  name="name" defaultValue={user?.displayName}  className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" defaultValue={user?.email}  className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due price</span>
                        </label>
                        <input type="text" name="price" defaultValue={'$'+ price} className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn bg-orange-600 text-white btn-block" type="submit" value="Order Confirm" />
                </div>
            </form>
            <div className="card-body">

            </div>
        </div>
    );
};

export default CheckOut;