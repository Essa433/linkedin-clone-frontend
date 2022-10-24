import { BsPencil } from 'react-icons/bs';
import '../../styles/company.css';



export function AboutUs() {

    return (
        <>

            <div className='sub-boxs-aboutus'>
                <div className='aboutUs-container'>
                    <div className='sub-box-top'>
                        <h3>About us</h3>
                        <div className='icon-sub-box-head'>
                            <BsPencil size={20} />
                        </div>

                    </div>
                    <div className='aboutus-content'>
                        <p>
                            BIAC is a subsidiary of the Saudi Technology Development and Investment Company (TAQNIA), which, in turn, is wholly owned by the Public Investment Fund (PIF).
                            At BIAC, we work to enable innovation in the Kingdom of Saudi Arabia by building, operating, supporting and developing the innovation environment and technology transfer, as well as business support services for the public and private sectors.    </p>
                        <div>
                            <h4 className='our-website'>Our website</h4>
                            <a href="https://biac.com.sa/">https://biac.com.sa/</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
