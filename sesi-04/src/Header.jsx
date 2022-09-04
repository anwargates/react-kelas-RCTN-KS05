import React from 'react'

function Header() {
    return (
        <div>
            <div className="section-header">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <img className='profile-picture' src="/profile.jpg" alt="" />
                        </div>
                        <div className="col-4">
                            <h2 className="">Hacktiv8 Meetup</h2>
                            <p className="">Location: Jakarta, Indonesia</p>
                            <p className="">Members: 1,078</p>
                            <p className="">Organizers: Adhy Wiranata</p>
                            <button type='button' className="btn btn-primary">Join Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header