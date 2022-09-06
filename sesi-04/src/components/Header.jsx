import React from 'react'

function Header() {
    return (
        <section className="section-header">
            <div className="container d-flex flex-column align-items-center gap-3">
                <div className="">
                    <img className='profile-picture' src="/profile.jpg" alt="" />
                </div>
                <div className="header-caption">
                    <h1 className="">Hacktiv8 Meetup</h1>
                    <table className='header-table my-3'>
                        <tbody>
                            <tr>
                                <td>Location</td>
                                <td className='px-2'>:</td>
                                <td>Jakarta, Indonesia</td>
                            </tr>
                            <tr>
                                <td>Members</td>
                                <td className='px-2'>:</td>
                                <td>1,078</td>
                            </tr>
                            <tr>
                                <td>Organizers</td>
                                <td className='px-2'>:</td>
                                <td>Adhy Wiranata</td>
                            </tr>
                        </tbody>
                    </table>
                    <button type='button' className="btn header-button">Join Us</button>
                    {/*                         
                        <p className="">Location: Jakarta, Indonesia</p>
                        <p className="">Members: 1,078</p>
                        <p className="">Organizers: Adhy Wiranata</p> */}

                </div>
            </div>
        </section>
    )
}

export default Header