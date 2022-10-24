import '../../styles/company.css';


export function CompanyProfilePage() {

	return (
		<>

			<div className='container-profile-page'>
				<div className="main-box">

					<input type='file' className='input-file' id="imgInp" />
					<button className='input-btn upload' id='input_btn'><i className="fa fa-camera cam"></i></button>
					<img className="cover" id="blah" src="https://media-exp1.licdn.com/dms/image/C4E1BAQFyh6ufGs-D0g/company-background_10000/0/1604409306708?e=1667246400&v=beta&t=ndaPdLSrUjps0Uu-5mz2DElWL7TlTVK9Q1C5Y8iRWa8" alt="" />
					<div className="dp-container"><img className="dp-company" src='https://media-exp1.licdn.com/dms/image/C4E0BAQGa9cCaAfb9Bg/company-logo_200_200/0/1604409294529?e=1674691200&v=beta&t=zEwyVq9r2TVwiu1f0VcTQQfkx-rD0iBao0kDZbG4S3U' alt="" />
						<button className='pen-btn upload'><i className="fa fa-pencil pen"></i></button>


						<div className="company-content-box">
							<div className="main-content">
								<h3>BIAC</h3>

								<h4>!Enabling Innovation
								</h4>
								<div className="content">
									<h4>Business Consulting and Services Riyadh, Riyadh 17,294 followers

									</h4>
									{/* <ul className="content">
										<li><span>97 connection</span></li>
										<li><span>contact info</span></li>
									</ul> */}
								</div>
								<div className='btn-header-profile'>

									<button className="but">متابعة <i className="fa fa-caret-down"></i></button>
									<a href="https://biac.com.sa/"><button className="but1">زيارة الموقع الالكتروني <i className="fa fa-caret-down clr" ></i></button></a>
									<button className="but1">المزيد</button>
								</div>
							</div>


						</div>
					</div>
				</div>
			</div >
		</>
	)
}
