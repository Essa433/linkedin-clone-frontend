import '../../styles/profile.css';




export function ProfilePage() {

	return (
		<>

			<div className='container-profile-page'>
				<div className="main-box">

					<input type='file' className='input-file' id="imgInp" />
					<button className='input-btn upload' id='input_btn'><i className="fa fa-camera cam"></i></button>
					<img className="cover" id="blah" src="https://media-exp1.licdn.com/dms/image/C4D16AQFS1cnJZfeaow/profile-displaybackgroundimage-shrink_350_1400/0/1661898002461?e=1667433600&v=beta&t=EaKn2IX0db8xcYOdoPjKcWrYA_XmMPUeQLMQyployTs" alt="" />
					<div className="dp-container"><img className="dp" src='https://media-exp1.licdn.com/dms/image/D4D35AQEGx_kaTSiVyg/profile-framedphoto-shrink_400_400/0/1661898275920?e=1667246400&v=beta&t=11RzlZY2jqAWm62arOGuldxF362mVmtYcXKEK-B4Jgw' alt="" />
						<button className='pen-btn upload'><i className="fa fa-pencil pen"></i></button>


						<div className="box">
							<div className="main-content">
								<h3>Essa ALalshahi</h3>
								<div className='contain-content'>

									<h5>Web Developer | Nodejs | Fastify | MongoDB
									</h5>
									<div className="content">
										<p>Riyadh, Saudi Arabia</p>
										<ul>
											<li><span className='content-li-97'>97 connection</span></li>
											<li><span className='content-li-97'>contact info</span></li>
										</ul>
									</div>
									<div className='btn-header-profile'>

										<button className="but">Open to <i className="fa fa-caret-down"></i></button>
										<button className="but1">Add Profile section <i className="fa fa-caret-down clr" ></i></button>
										<button className="but1">More...</button>
									</div>
								</div>
							</div>
							<div className="current">


								<a href=""><div className='rigt-side-profile-main-box'>
									<img src="https://media-exp1.licdn.com/dms/image/C560BAQFrJStbvraiXw/company-logo_100_100/0/1519117083891?e=1667433600&v=beta&t=zWEmBCyhvwUNW_VtLFxdsOGc0CrDp9cepY0YYoeQitI" alt="" className="icon" />
									<span className="cmpy clg">الاتحاد السعودي للامن السيبراني والبرمجة والدرونز</span>

								</div></a>
								<div className='rigt-side-profile-main-box'>
									<img src="https://media-exp1.licdn.com/dms/image/C4E0BAQGXpatISgXjOw/company-logo_100_100/0/1594741310804?e=1667433600&v=beta&t=Ca9WqyskZda3HkFsYr-2fbQYYXO_GtLPW3keCa5kYIU" alt="" className="icon" />
									<span className="cmpy">Al-Baha University</span>

								</div>



							</div>

						</div>
					</div>
				</div>





			</div >
		</>
	)
}
