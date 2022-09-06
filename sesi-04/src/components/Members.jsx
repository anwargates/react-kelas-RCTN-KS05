import React from 'react'

function Members() {
    return (
        <section className='section-members'>
            <div className='container d-flex flex-column align-items-center gap-3'>
                <h1>Members</h1>
                <div className="row section-members">
                    <img className='profile-picture' src="/profile.jpg" alt="" />
                    <div className="col">
                        <h3>Organizers</h3>
                        <p className="member-name">Adhy Wiranata</p>
                        <p className="member-name">4 Others</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Members