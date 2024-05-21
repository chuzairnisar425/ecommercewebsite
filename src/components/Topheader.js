const TopHeader = () => {
    return (
      <div className="container-fluid bg-dark text-white py-2 border-bottom border-2 border-solid">
        <div className="row">
          <div className="col-md-8 d-flex align-items-center justify-content-center">
            <span><i className="fas fa-map-marker-alt"></i></span>
            <span className="mx-2 ">20% Off + Free Shipping On Your First Order! Details</span>
          </div>
          <div className="col-md-4 d-flex justify-content-end align-items-center">
            <button className="btn btn-outline-secondary  text-light mr-5"><i className="fas fa-sign-in-alt"></i> Login</button>
            <span className="mr-2">Find stores and services </span>
          
            <span className="mr-2"><i className="fas fa-map-marker-alt"></i> United States</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default TopHeader;
  