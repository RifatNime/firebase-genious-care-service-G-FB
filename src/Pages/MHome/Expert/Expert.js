import React from 'react';
import './Expert.css';

const Expert = ({ expert }) => {
    const { name, img } = expert;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4 mt-5  d-flex justify-content-center' style={{ marginBottom: '80px'}}>
            <div className="card shadow" style={{ width: "18rem" , borderRadius: '8px'}}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    <button>
                        <span className="label">Next</span>
                        <span className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg></span></button>
                </div>
            </div>
        </div>

    );
};

export default Expert;