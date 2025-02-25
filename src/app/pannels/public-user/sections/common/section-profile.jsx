function SectionProfile() {
    return (
        <>
            <h4 className="section-head-small mb-4">Profile Info</h4>
            <div className="twm-s-info">
                <ul>
                    <li>
                        <div className="twm-s-info-inner">
                            <i className="fas fa-money-bill-wave" />
                            <span className="twm-title">Rate</span>
                            <div className="twm-s-info-discription">GHS200 / Day</div>
                        </div>
                    </li>
                    <li>
                        <div className="twm-s-info-inner">
                            <i className="fas fa-clock" />
                            <span className="twm-title">Experience</span>
                            <div className="twm-s-info-discription">6 Year</div>
                        </div>
                    </li>
                    {/* <li>
                        <div className="twm-s-info-inner">
                            <i className="fas fa-venus-mars" />
                            <span className="twm-title">Gender</span>
                            <div className="twm-s-info-discription">Male</div>
                        </div>
                    </li> */}
                    <li>
                        <div className="twm-s-info-inner">
                            <i className="fas fa-mobile-alt" />
                            <span className="twm-title">Phone</span>
                            <div className="twm-s-info-discription">+233  560 56456</div>
                        </div>
                    </li>
                    <li>
                        <div className="twm-s-info-inner">
                            <i className="fas fa-at" />
                            <span className="twm-title">Email</span>
                            <div className="twm-s-info-discription">thewebmaxdemo@gmail.com</div>
                        </div>
                    </li>
                    <li>
                        <div className="twm-s-info-inner">
                            <i className="fas fa-book-reader" />
                            <span className="twm-title">Qualification</span>
                            <div className="twm-s-info-discription">Developer</div>
                        </div>
                    </li>
                    <li>
                        <div className="twm-s-info-inner">
                            <i className="fas fa-map-marker-alt" />
                            <span className="twm-title">Address</span>
                            <div className="twm-s-info-discription">P.O. Box 111 Adabraka, Accra</div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default SectionProfile;