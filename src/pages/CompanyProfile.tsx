

import { AboutUs } from '../components/Company/AboutUs';
import { CompanyProfilePage } from '../components/Company/CompanyProfile';
import { CompanyPosts } from '../components/Company/Posts';
import { RightSide } from '../components/Home/RightSide';
import { Nav } from '../components/Nav';
import '../styles/company.css';

export function CompanyProfile() {

    return (
        <div >

            <Nav />
            <CompanyProfilePage />
            <div className='second-side'>
            <AboutUs />
            <CompanyPosts />
            </div>



        </div>
    )
}

