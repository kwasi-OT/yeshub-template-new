import CountUp from "react-countup";
import { ProfileApiData } from "../../../../context/user-profile/profileContextApi";
import { useContext } from "react";
import { AuthApiData } from "../../../../context/auth/authContextApi";
import { ApplicationApiData } from "../../../../context/application/applicationContextApi";


function SectionCandidateOverview() {
    const { profileData } = useContext(ProfileApiData)
    const { userProfile } = useContext(AuthApiData);
	const username = userProfile?.username || "Loading....";
    const { appliedJobs } = useContext(ApplicationApiData)
    // console.log("profileData", profileData)


    return (
        <>
            <div className="wt-admin-right-page-header">
                <h2>{profileData?.firstname || username} {profileData?.lastname} </h2>
                {/* <p>IT Contractor</p> */}
            </div>
            <div className="twm-dash-b-blocks mb-5">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 mb-3">
                        <div className="panel panel-default">
                            <div className="panel-body wt-panel-body dashboard-card-2 block-gradient">
                                <div className="wt-card-wrap-2">
                                    <div className="wt-card-icon-2"><i className="flaticon-job" /></div>
                                    <div className="wt-card-right wt-total-active-listing counter ">
                                        <CountUp end={25} duration={10} />
                                    </div>
                                    <div className="wt-card-bottom-2 ">
                                        <h4 className="m-b0">Posted Jobs</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 mb-3">
                        <div className="panel panel-default">
                            <div className="panel-body wt-panel-body dashboard-card-2 block-gradient-2">
                                <div className="wt-card-wrap-2">
                                    <div className="wt-card-icon-2"><i className="flaticon-resume" /></div>
                                    <div className="wt-card-right  wt-total-listing-view counter ">
                                        <CountUp end={appliedJobs.length} duration={10} />
                                    </div>
                                    <div className="wt-card-bottom-2">
                                        <h4 className="m-b0">Total Applications</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-12 mb-3">
                        <div className="panel panel-default">
                            <div className="panel-body wt-panel-body dashboard-card-2 block-gradient-3">
                                <div className="wt-card-wrap-2">
                                    <div className="wt-card-icon-2"><i className="flaticon-envelope" /></div>
                                    <div className="wt-card-right wt-total-listing-review counter ">
                                        <CountUp end={28} duration={10} />
                                    </div>
                                    <div className="wt-card-bottom-2">
                                        <h4 className="m-b0">Messages</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 mb-3">
                        <div className="panel panel-default">
                            <div className="panel-body wt-panel-body dashboard-card-2 block-gradient-4">
                                <div className="wt-card-wrap-2">
                                    <div className="wt-card-icon-2"><i className="flaticon-bell" /></div>
                                    <div className="wt-card-right wt-total-listing-bookmarked counter ">
                                        <CountUp end={18} duration={10} />
                                    </div>
                                    <div className="wt-card-bottom-2">
                                        <h4 className="m-b0">Notifications</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionCandidateOverview;