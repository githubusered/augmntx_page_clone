import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faShare,faDownload ,faComment, faCalendarCheck ,faHourglass,faCog, faBriefcase, faGraduationCap, faGlobe, faSmile} from '@fortawesome/free-solid-svg-icons';

import './Profile.css';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import Loading from '../../Components/Loading/Loading';
import {useParams} from 'react-router-dom/cjs/react-router-dom.min';

import DownloadPDF from '../../Components/DownloadPDF/DownloadPDF';

const Profile = () => {
  const {unique_id} = useParams();
  const [profile, setProfile] =useState(null);
  
  useEffect(()=>{
        fetch(`https://augmntx.com/api/profile/${unique_id}`)
      .then(res => res.json())
      .then((data)=> {setProfile(data);})
      .catch((err)=> console.log('Error fetching data', err))
  
    },[unique_id] )

  return (
  <>
    <Nav />  
{profile ? (<div className="profile-container">
        <div className="profileSection-backPath">
          <FontAwesomeIcon icon={faArrowLeft} />
          <a href="/" className='profileSection-backPath-links'>Home</a>
           / 
          <a href="/profiles" className='profileSection-backPath-links'>Developers</a>
           / 
          <span className='profileSection-backPath-profileId'>{profile.profile_info.unique_id}</span>
        </div>
        <div className="profileSection-profile">
          <div className='profile-logo'>
            <img src={
            profile.profile_info.userPhoto.endsWith("noimage.jpg") || profile.profile_info.userPhoto.endsWith("uploads/") ?
             'https://augmntx.com/assets/img/noimage.jpg' : `https://augmntx.com/${profile.profile_info.userPhoto}`
            }
             alt="User img" 
            />
          </div>
          <div className='profile-info'>
                <h5 className='profile-info-name'>{profile.profile_info.last_name } { profile.profile_info.first_name} 
                    <span className='profile-info-id'>{profile.profile_info.unique_id}</span>
                    <span className='profile-info-state'>Active</span>
                </h5>
                <h5 className='profile-info-profession'>{profile.profile_info.primary_title} in {profile.profile_info.country}</h5>
                <span className='profile-info-bio'>{profile.profile_info.bio}</span>
          </div>
        </div>
        <div className="profileSection-profileSkills">
          { profile.skills.map((skill)=>(
            <div className="skill-pill" key={skill.id}><a href={`/skills/${skill.name}`}>{skill.name}</a></div>
          ))}
        </div>
        <div className="profileSection-industries">
          <span>Industries : </span>
          {profile.projects && profile.projects.map((project) =>(
            <u key={project.id}>{project.industry} ,</u> 
          ))}
        </div>
        <div className="profileSection-actions">
            <div >
              <a href="connect_microsoft_share_program">
                <FontAwesomeIcon icon={faShare} />
                 Share 
              </a>
            </div>
            <div >
              <a href="/hire">
              <FontAwesomeIcon icon={faComment} />
                 Hire {profile.profile_info.last_name} {profile.profile_info.first_name} </a></div>
            <div >
              <a href={`/profile/${profile.profile_info.profile_url}/${profile.profile_info.unique_id}`} onClick={()=>{DownloadPDF(profile)}}>
              <FontAwesomeIcon icon={faDownload} />
                 Download PDF </a></div>
        </div>
        {profile.profile_info.comittment && <div className="profileSection-profile-details">
          <div className="profileSection-title">
            <FontAwesomeIcon icon={faCalendarCheck} />
            <span>Availability</span>
          </div>
          <div className="profileSection-time">{profile.profile_info.comittment}</div>
        </div>}
        <div className="profileSection-profile-details">
          <div className="profileSection-title">
            <FontAwesomeIcon icon={faHourglass} />
            <span>Total experience</span>
           </div>
          <div className="profileSection-time">{profile.profile_info.experience} Years</div>
        </div>
        {profile.skills && <div className="profileSection-profile-details profileSection-technicalSkills">
          <div className="profileSection-title dispBlock">
              &lt;/&gt;
              <span>Technical Skills</span>
          </div>
          {profile.skills.map((skill,i)=>(
            <React.Fragment key={i}>
             <div className="profileSection-skill wid61">{skill.name}</div>
            <div className="profileSection-time2 wid41">{skill.year > 0  ? `${skill.year} Years`:null} {skill.month > 0 && (skill.year && skill.month) ? '&' : null}  {skill.month > 0 ? `${skill.month} Months`: null}</div>
            <div className="profileSection-title displNone"></div>
            </React.Fragment>
          ))}
        </div>}
        <div className="profileSection-profile-details profileSection-projects" id='justStart'>
           <div className="profileSection-title">
              <FontAwesomeIcon icon={faCog} />
              <span>Projects</span>
            </div>
            <div className="profileSection-time profileSection-projectDescription">
              <div className='profileSection-projectDescription-info textAlign'>  
              {profile.projects && profile.projects.map((project) => (
                  <React.Fragment key={project.id}>
                  <div className='profileSection-projectDescription-infoTitle'>
                  <span>{project.title}</span>
                  <div> {project.pro_start} to {project.pro_end} </div>
                  </div>
                  <div className='profileSection-projectDescription-border'></div>
                  <div className='profileSection-projectDescription-infoDesc'>
                  <div className="profileSection-projectDescription-infoDesc-description"><span>Description</span> 
                  {project.description} </div>
                  <div className="profileSection-projectDescription-infoDesc-roles">Roles and Responsibilites</div>
                  <div className="profileSection-projectDescription-infoDesc-responsibilities">
                  {project.responsibilities} 
                  </div>
                  <div className="profileSection-projectDescription-infoDesc-technologies">Technologies: <span>{project.technologies}</span></div>
                  <div className="profileSection-projectDescription-infoDesc-industry">Industry: <span>{project.industry}</span></div>
                </div></React.Fragment>
                ))}    
              </div>
            </div>
        </div>
        {profile.experience && <div className="profileSection-profile-details">
          <div className="profileSection-title">
            <FontAwesomeIcon icon={faBriefcase} />
            <span>Work history</span>
          </div>
          {profile.experience.map((exp)=>(
            <React.Fragment key={exp.id}>
            <div className="profileSection-time">{exp.title}</div>
            <div className="profileSection-title"></div>
            </React.Fragment>
          ))}
        </div>}
        {profile.profile_info.soft_skill && <div className="profileSection-profile-details">
          <div className="profileSection-title">
            <FontAwesomeIcon icon={faSmile} />
            <span>Soft skills</span>
          </div>
          <div className="profileSection-time profileSection-softSkills">{ profile.profile_info.soft_skill.split(',').map((softSkill,i)=>(
            <div className='profileSection-softSkill' key={i}>{softSkill}</div>
          ))}</div>
        </div>}
        {profile.education && profile.education.map((education) => (
          <div className="profileSection-profile-details" key={education.id}>
          <div className="profileSection-title">
            <FontAwesomeIcon icon={faGraduationCap} />
            <span>Education</span>
          </div>
          <div className="profileSection-time displFlex">{education.degree} degree in {education.major}
            <span>{education.univ}</span>
            <span>{education.edu_start} to {education.edu_end}</span>
          </div>
        </div>
        ))}
        {profile.profile_info.english && <div className="profileSection-profile-details" id='bottomBorder'>
          <div className="profileSection-title">
            <FontAwesomeIcon icon={faGlobe} />
            <span>Language</span>
          </div>
          <div className="profileSection-time">English - {profile.profile_info.english}</div>
        </div>}
        <div className="profileSection-actions">
            <div >
              <a href="connect_microsoft_share_program">
                <FontAwesomeIcon icon={faShare} />
                 Share 
              </a>
            </div>
            <div >
              <a href="/hire">
              <FontAwesomeIcon icon={faComment} />
                 Hire {profile.profile_info.last_name} {profile.profile_info.first_name} </a></div>
            <div >
              <a href={`/profile/${profile.profile_info.profile_url}/${profile.profile_info.unique_id}`} onClick={()=>{DownloadPDF(profile)}}>
              <FontAwesomeIcon icon={faDownload} />
                 Download PDF </a></div>
        </div>
        <div className="profileSection-hireJoin">
          <div className="profileSection-hireJoin-hire">
            <div className='profileSection-hireJoin-hire-text'>
              <span>Hire software </span>
              developers today
            </div>
            <a href="/hire" className='profileSection-hireJoin-hire-btn'>Connect with us</a>
          </div>
          <div className="profileSection-hireJoin-join">
            <div className='profileSection-hireJoin-hire-text'>
              <span>Join the  </span>
              developer network
            </div>
            <a href="/join" className='profileSection-hireJoin-hire-btn'>Join AugmntX</a>
          </div>
        </div>
    </div>) : (<Loading />)
  }
    <Footer />
    </>
  )
}

export default Profile;
