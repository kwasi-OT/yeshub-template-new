import { useEffect, useState } from "react";
import { loadScript } from "../../../../../globals/constants";
import JobZImage from "../../../../common/jobz-img";
import ApplyJobPopup from "../../../../common/popups/popup-apply-job";
import SectionJobLocation from "../../sections/jobs/detail/section-job-location";
import SectionOfficePhotos1 from "../../sections/common/section-office-photos1";
import SectionOfficeVideo1 from "../../sections/common/section-office-video1";
import SectionShareProfile from "../../sections/common/section-share-profile";
import SectionJobsSidebar2 from "../../sections/jobs/sidebar/section-jobs-sidebar2";
import SectionJobTerms from "../../sections/jobs/detail/section-job-terms";
import SectionJobCoverLetter from "../../sections/jobs/detail/section-job-cover-letter";
import ApplyJobPage from "./apply-job";
import { NavLink } from "react-router-dom";
import { publicUser } from "../../../../../globals/route-names";
import axios from "axios";
import { useUser } from "../../../../context/auth/UserContext";

function JobDetail1Page() {

	const [empListData, setEmpListData] = useState([]);
	const [error, setError] = useState(null);
	
	const { user } = useUser();
    
     const getEmpListUrl = `${process.env.REACT_APP_BASE_URL}`;


    
    const sidebarConfig = {
        showJobInfo: true
    }

    useEffect(()=>{
        loadScript("js/custom.js");
    })

	useEffect(() => {
		const fetchEmployerData = async () => {
			try {
				const res = await axios.get(getEmpListUrl);
				console.log("emp-list", res);

				setEmpListData(res.data);
			} catch (error) {
				setError(
					error?.message || "Oops, An error occurred while fetching data"
				);
			}
		};
		fetchEmployerData();
	}, [getEmpListUrl]);


    return (
			<>
				{/* <div className="container">
					<div className="wt-bnr-inr overlay-wraper bg-center">
						<div className="twm-media-bg">
							<JobZImage src="images/job-detail-bg.jpg" alt="#" />
							<div className="twm-jobs-category green">
								<span className="twm-bg-green">New</span>
							</div>
							<div className="twm-media">
								<JobZImage src="images/jobs-company/pic1.jpg" alt="#" />
							</div>
						</div>
						<div className="overlay-main site-bg-white opacity-01" />
					</div>
				</div> */}

				<div className="section-full  p-t120 p-b90 bg-white">
					<div className="container">
						{/* BLOG SECTION START */}
						<div className="section-content">
							<div className="row d-flex justify-content-center">
								<div className="col-lg-8 col-md-12">
									{/* Candidate detail START */}
									<div className="cabdidate-de-info">
										<div className="twm-job-self-wrap">
											<div className="twm-job-self-info">
												<div className="twm-job-self-top">
													<div className="twm-media-bg">
														<JobZImage src="images/job-detail-bg.jpg" alt="#" />
														{/* <div className="twm-jobs-category green">
															<span className="twm-bg-green">New</span>
														</div> */}
													</div>
													<div className="twm-mid-content">
														<div className="twm-media">
															<JobZImage
																src="images/jobs-company/pic1.jpg"
																alt="#"
															/>
														</div>
														<h4 className="twm-job-title">
															Senior Web Designer , Developer{" "}
															{/* <span className="twm-job-post-duration">
																/ 1 days ago
															</span> */}
														</h4>
														<p className="twm-job-address">
															<i className="feather-map-pin" />
															Independence Avenue No. 10, Accra, Greater Accra
															Region, Ghana
														</p>
														<div className="twm-job-self-mid">
															<div className="twm-job-self-mid-left">
																{/* <a
																	href="https://themeforest.net/user/thewebmax/portfolio"
																	className="twm-job-websites site-text-primary"
																>
																	https://thewebmax.com
																</a> */}
																<div className="twm-jobs-amount">
																	Budget: ₵2000 - ₵3000
																	{/* <span>/ daily</span> */}
																</div>
															</div>
															<div className="twm-job-apllication-area">
																Application ends:{" "}
																<span className="twm-job-apllication-date">
																	October 1, 2025
																</span>
															</div>
														</div>
														<div className="twm-job-self-bottom">
															<NavLink
																className="site-button"
																// data-bs-toggle="modal"
																// href="#apply_job_popup"
																// href={publicUser.jobs.APPLY}
																to={publicUser.jobs.APPLY}
																// to="#apply_job_pop"
																// role="button"
															>
																Apply Now
															</NavLink>
														</div>
														<div className=""></div>
													</div>
												</div>
											</div>
										</div>
										<h4 className="twm-s-title">Job Description:</h4>
										<p>
											Ut enim ad minima veniam, quis nostrum exercitationem
											ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
											commodi consequatur? Quis autem vel eum iure reprehenderit
											qui in ea voluptate velit esse quam nihil molestiae
											consequatur, vel illum qui dolorem eum fugiat quo voluptas
											nulla pariatur?
										</p>
										<p>
											At vero eos et accusamus et iusto odio dignissimos ducimus
											qui blanditiis praesentium voluptatum deleniti atque
											corrupti quos dolores et quas molestias excepturi sint
											occaecati cupiditate non provident, similique sunt in
											culpa qui officia deserunt mollitia animi.
										</p>
										<h4 className="twm-s-title">Requirments:</h4>
										<ul className="description-list-2">
											<li>
												<i className="feather-check" />
												Must be able to communicate with others to convey
												information effectively.
											</li>
											<li>
												<i className="feather-check" />
												Personally passionate and up to date with current trends
												and technologies, committed to quality and comfortable
												working with adult media.
											</li>
											<li>
												<i className="feather-check" />
												Rachelor or Master degree level educational background.
											</li>
											<li>
												<i className="feather-check" />4 years relevant PHP dev
												experience.
											</li>
											<li>
												<i className="feather-check" />
												Troubleshooting, testing and maintaining the core
												product software and databases.
											</li>
										</ul>
										<h4 className="twm-s-title">Responsabilities:</h4>
										<ul className="description-list-2">
											<li>
												<i className="feather-check" />
												Establish and promote design guidelines, best practices
												and standards.
											</li>
											<li>
												<i className="feather-check" />
												Accurately estimate design tickets during planning
												sessions.
											</li>
											<li>
												<i className="feather-check" />
												Partnering with product and engineering to translate
												business and user goals into elegant and practical
												designs. that can deliver on key business and user
												metrics.
											</li>
											<li>
												<i className="feather-check" />
												Create wireframes, storyboards, user flows, process
												flows and site maps to communicate interaction and
												design.
											</li>
											<li>
												<i className="feather-check" />
												Present and defend designs and key deliverables to peers
												and executive level stakeholders.
											</li>
											<li>
												<i className="feather-check" />
												Execute all visual design stages from concept to final
												hand-off to engineering.
											</li>
										</ul>

										{/* <SectionShareProfile />
										<SectionJobLocation /> */}
										{/* <SectionJobTerms />
										<SectionJobCoverLetter /> */}

										{/* <div className="twm-two-part-section">
											<div className="twm-nav-btn-left">
												<div
													className="twm-nav-sign-up"
													id="contract_up_popup"
													aria-hidden="true"
													aria-labelledby="sign_up_popupLabel"
													tabIndex={-1}
												>
													<i className="feather-log-in" /> show contract
												</div>
												{/* <a
													className="twm-nav-sign-up"
													data-bs-toggle="modal"
													href="#contract_up_popup"
													role="button"
												>
													<i className="feather-log-in" /> show contract
												</a> 
											</div>
										</div> */}

										{/* <div className="twm-two-part-section">
											<div className="row">
												<div className="col-lg-6 col-md-12">
													<SectionOfficePhotos1 />
												</div>
												<div className="col-lg-6 col-md-12">
													<SectionOfficeVideo1 />
												</div>
											</div>
										</div> */}
									</div>
								</div>
								<div className="col-lg-4 col-md-12 rightSidebar">
									<SectionJobsSidebar2 _config={sidebarConfig} />
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <ApplyJobPopup /> */}
			</>
		);
}

export default JobDetail1Page;