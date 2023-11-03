import React, { useEffect, useState } from 'react';

import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import Loading from '../../Components/Loading/Loading';



import './Profiles.css';
import ProfileListInProfiles from '../../Components/ProfileListInProfiles/ProfileListInProfiles';

const REACT_APP_PROFILE_LIST_API = process.env.REACT_APP_PROFILE_LIST_API

const Profiles = () => {
    const [profiles, setProfiles] =useState([]);

    useEffect(()=>{
        fetch(`${REACT_APP_PROFILE_LIST_API}`)
        .then(res => res.json())
        .then((data)=> {setProfiles(data)})
        .catch((err)=> console.log('Error fetching data', err))
    },[])
    
    const profilesPerPage = 8; // Number of profiles to display per page
    const [currentPage, setCurrentPage] = useState(1);
  
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
    };

  return (
    <div>
         <Nav />
      <main>
        <div className="container2">
            <aside>
                <h4>Hiring resources</h4>
                <ul className="hiringResources">
                    <li><a href="https://blog.augmntx.com/how-to-hire-ios-developers/"> Guide to Hiring devs (&rarr;)</a> </li>
                    <li><a href='https://blog.augmntx.com/ios-job-template/'>Job Template (&rarr;)</a> </li>
                    <li><a href='https://blog.augmntx.com/common-interview-questions-for-ios/'>Interview Questions (&rarr;)</a> </li>
                    <li><a href='https://blog.augmntx.com/resource-outsourcing-mistakes/'>Common  Mistakes (&rarr;)</a> </li>
                </ul>
                <h4>Need help?</h4>
                <ul className="needhelp">
                    <li><a href='https://calendly.com/superlabs/discovery?month=2023-10'>Book a meeting (&rarr;)</a></li>
                    <li><a href='https://api.whatsapp.com/send/?phone=%2B919820045154&text&type=phone_number&app_absent=0'>Chat with an expert (&rarr;)</a></li>
                </ul>
            </aside>
            <div className="profiles-rightSection">
                <input type="text" className="inputForSearchSkills"  placeholder='Search for skills'/>
                {profiles ?  <ProfileListInProfiles currentPage={currentPage} profilesPerPage={profilesPerPage} profiles={profiles} /> : <Loading/> }
                <div className="pagination">
                {([...Array(Math.ceil(profiles.length / profilesPerPage)).keys()].map((page) => (
                <div
                  key={page}
                  className={currentPage === page + 1 ? 'active' : ''}
                  onClick={() => handlePageChange(page + 1)}
                >
                  {page + 1}
                </div>
                )))}
                

              <div
                className="paginationNext"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === Math.ceil(profiles.length / profilesPerPage)}
              >
                &rarr;
              </div>

                </div>
            </div>
        </div>
        <section className='profiles-Sect'>
            <div className="container2">
                <div className='sectionDivs verifiedProfiles'>
                    <div className='section-icon'>
                        <img src="https://augmntx.com/assets/img/icons/solid/employees.svg" alt="img employees" />
                    </div>
                    <div className='section-description'>
                        <h4>Verified profiles</h4>
                        <p>AugmntX vets profiles rigorously & the best candidates are handpicked by our experts.</p>
                    </div>
                </div>
                <div className='sectionDivs verifiedProfiles'>
                    <div className='section-icon'>
                        <img src="https://augmntx.com/assets/img/icons/solid/paper-plane.svg" alt="img employees" />
                    </div>
                    <div className='section-description'>
                        <h4>Fast onboarding</h4>
                        <p>You'll be able to get an developer working on your project within 2 to 3 business days.</p>
                    </div>
                </div>
                <div className='sectionDivs verifiedProfiles'>
                    <div className='section-icon'>
                        <img src="https://augmntx.com/assets/img/icons/solid/globe-2.svg" alt="img employees" />
                    </div>
                    <div className='section-description'>
                        <h4>Effortless scaling</h4>
                        <p>With our large talent pool of dev, you can effortlessly scale your team fast.</p>
                    </div>
                </div>
                       
            </div>
        </section>
    </main>
    <Footer /> 
    </div>
  )
}

export default Profiles;
