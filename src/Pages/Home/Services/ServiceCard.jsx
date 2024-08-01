import { Link } from "react-router-dom";


const ServiceCard = ({service}) => {
    const { _id, title, img, price } = service;
    return (
    <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p className="text-lg text-zinc-500">Price: ${price}</p>
            <div className="card-actions">
                <Link to={`/book/${_id}`}>
                    <button className="btn bg-orange-600 rounded-none text-white font-semibold">Book Now</button>
                </Link>
            </div>
        </div>
    </div>
    );
};

export default ServiceCard;