import React, { useContext } from 'react'
import { Mode } from '../Mode'
import { useMode } from '../useMode'
import Location from '../Images/icon-location.svg'
import Twitter from '../Images/icon-twitter.svg'
import Blog from '../Images/icon-website.svg'
import Company from '../Images/icon-company.svg'
import LocationDark from '../Images/icon-location-dark.svg'
import TwitterDark from '../Images/icon-twitter-dark.svg'
import BlogDark from '../Images/icon-website-dark.svg'
import CompanyDark from '../Images/icon-company-dark.svg'
export default function User(props) {
    let user = props.user
    let context = useContext(Mode)
    let mode = context.mode
    let usemode = useMode
    let day = user.created_at.slice(8, 10)
    let year = user.created_at.slice(0, 4)
    let month;
    switch (user.created_at.slice(5, 7)) {
        case '01':
            month = 'Jan'
            break;
        case '02':
            month = 'Feb'
            break;
        case '03':
            month = 'Mar'
            break;
        case '04':
            month = 'Apr'
            break;
        case '05':
            month = 'May'
            break;
        case '06':
            month = 'Jun'
            break;
        case '07':
            month = 'Jul'
            break;
        case '08':
            month = 'Aug'
            break;
        case '09':
            month = 'Sep'
            break;
        case '10':
            month = 'Oct'
            break;

        case '11':
            month = 'Nov'
            break;
        case '12':
            month = 'Dec'
            break;
    }
    return (
        <main style={{
            backgroundColor: useMode('#FEFEFE', '#1E2A47', mode), boxShadow: useMode('box-shadow: 0px 16px 30px -10px #4660BB33', 'none', mode)
        }}>
            <div className="top">
                <div className='spaceBetween'>
                    <img src={user.avatar_url} alt="User Avatar" />
                    <div className="info">
                        <div className="info_top spaceBetween">
                            <div className="left">
                                <h2 style={{ color: useMode('#2B3442', '#FFFFFF', mode) }}>{user.name !== null ? user.name : user.login}</h2>
                                <p>@{user.login}</p>
                            </div>
                            <div className="right">
                                <p style={{ color: useMode('#697C9A', '#FFFFFF', mode) }}>Joined {day} {month} {year}</p>
                            </div>
                        </div>
                        {window.innerWidth > 768 && <div className="info_bot" style={{
                            color: usemode('#4B6A9B', '#FFFFFF', mode)
                        }}>
                            {user.bio === null ? 'This profile has no bio' : `${user.bio}`}
                        </div>}
                    </div>
                </div>
            </div>
            {window.innerWidth <= 768 && <div className="info_bot" style={{
                color: usemode('#4B6A9B', '#FFFFFF', mode)
            }}>
                {user.bio === null ? 'This profile has no bio' : `${user.bio}`}
            </div>}
            <div className="box" style={{ backgroundColor: useMode('#F6F8FF', '#141D2F', mode) }}>
                <div className="repos">
                    <p className='type' style={{ color: useMode('#4B6A9B', '#FFFFFF', mode) }}>Repos</p>
                    <p className="num" style={{ color: useMode('#2B3442', '#FFFFFF', mode) }}>{user.repos.length}</p>
                </div>
                <div className="followers">
                    <p className='type' style={{ color: useMode('#4B6A9B', '#FFFFFF', mode) }}>Followers</p>
                    <p className="num" style={{ color: useMode('#2B3442', '#FFFFFF', mode) }}>{user.followers}</p>
                </div>
                <div className="followings">
                    <p className='type' style={{ color: useMode('#4B6A9B', '#FFFFFF', mode) }}>Following</p>
                    <p className="num" style={{ color: useMode('#2B3442', '#FFFFFF', mode) }}>{user.following}</p>
                </div>
            </div>
            <div className="bottom">
                <div className="location center" style={{ opacity: user.location === null && '0.5' }}>
                    <img src={useMode(Location, LocationDark, mode)} alt="Location" />
                    <p style={{ color: useMode('#4B6A9B', 'white', mode) }}>{user.location !== null ? user.location : "Not Available"}</p>
                </div>
                <div className="twitter center" style={{ opacity: user.twitter_username === null && '0.5' }}>
                    <img src={useMode(Twitter, TwitterDark, mode)} alt="Twitter" />
                    <p style={{ color: useMode('#4B6A9B', 'white', mode) }}>{user.twitter_username !== null ? user.twitter_username : "Not Available"}</p>
                </div>
                <div className="blog center" style={{ opacity: user.blog === "" && '0.5' }}>
                    <img src={useMode(Blog, BlogDark, mode)} alt="Blog" />
                    {user.blog !== "" ? <a style={{ color: usemode('#4B6A9B', 'white', mode) }} target={'_blank'} href={user.blog}>{user.blog}</a> : <p style={{ color: usemode('#4B6A9B', 'white', mode) }}>Not Available</p>}

                </div>
                <div className="company center" style={{ opacity: user.company === null && '0.5' }}>
                    <img src={useMode(Company, CompanyDark, mode)} alt="Company" />
                    <p style={{ color: useMode('#4B6A9B', 'white', mode) }}>{user.company !== null ? user.company : "Not Available"}</p>
                </div>
            </div>
        </main>
    )
}
