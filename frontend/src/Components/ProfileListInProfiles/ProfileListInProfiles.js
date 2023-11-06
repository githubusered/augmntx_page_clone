    import React from 'react'


    import { faComment, faDownload } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


    import DownloadPDF from '../DownloadPDF/DownloadPDF';
    


    const ProfileListInProfiles = ({currentPage, profilesPerPage, profiles}) => {

        // Calculate the index range for the current page
        const startIndex = (currentPage - 1) * profilesPerPage;
        const endIndex = startIndex + profilesPerPage;

        // Filter profiles to display only the ones for the current page
        const profilesToDisplay = profiles.slice(startIndex, endIndex);
        
    return (
        <div className="profiles-list">
            {profilesToDisplay.map((profile) => (
            <div key={profile.unique_id} className='profile' >
                            <a 
                             href={`/profile/${profile.profile_url}/${profile.unique_id}`}
                             className='profile-topRow'
                             onClick={(e)=>{
                                e.preventDefault();
                                window.location.href=`/profile/${profile.profile_url}/${profile.unique_id}`
                             }}>
                             
                                <div className='cardIconAndTitle'>
                                    <div className='topRow-icon'>
                                        <img src={`${profile.userPhoto.endsWith("noimage.jpg") ? 'https://augmntx.com/assets/img/noimage.jpg' : `https://augmntx.com/${profile.userPhoto}`}`} alt="userPhoto" />
                                    </div>
                                    <div className='topRow-title'>
                                        <div className='topRow-title-name'>
                                            <span>{profile.last_name} {profile.first_name +' '} 
                                                <span className='title-name-id'>{profile.unique_id}</span>
                                            </span>
                                            <span>{profile.primary_title}, {profile.experience} years</span>
                                        </div>
                                        <div className='topRow-title-knowledge'>
                                            { 
                                            profile['skills'].map((skill,i)=>(
                                                i < (profile['skills'].length > 3 ? 2 : profile['skills'].length) ?
                                                <div key={i} className="card-pills">{skill}</div> : null
                                            ))
                                            }
                                            {profile['skills'].length > 2 && <div className='card-pills'>...</div>}
                                        </div>
                                    </div>
                                </div>
                                <div className='cardDescription'> {profile['bio'].length >= 200 ? profile['bio'].substring(0,200)+'...' : profile.bio}</div>
                                <div className='cardIndustries'>
                                    <b>Industries:</b>
                                    {profile['profile_industries'].map((industry,i) => (
                                                i < (profile['profile_industries'].length > 3 ? 2 : profile['profile_industries'].length) ?
                                                <u key={i}>{industry}, </u> : null
                                    ))}
                                    {
                                        profile['profile_industries'].length > 3 && <div >...</div>
                                    }
                                </div>
                            </a>
                            <div className='profile-bottomRow'>
                                <ul className='bottomRow-list'>
                                    <li><a href="/hire"> <FontAwesomeIcon icon={faComment} />Hire {profile.last_name} {profile.first_name} </a></li>
                                    <li><a href={`/profile/${profile.profile_url}/${profile.unique_id}`} onClick={()=>{DownloadPDF(profile)}} > <FontAwesomeIcon icon={faDownload} /> Download PDF</a></li>
                                </ul>
                            </div>
            </div>
            ))
            }    
        </div>
    )
    }

    export default ProfileListInProfiles;
