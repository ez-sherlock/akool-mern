import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Tool = ({ title, logo, description, rating, link, maintainHistory = true, externalLink = false }) => {

    const addToUsed = () => {
        if (maintainHistory) {
            const items =
            {
                title,
                logo,
                description,
                rating,
                link
            }
            if (localStorage.getItem('used')) {
                let usedItems = JSON.parse(localStorage.getItem('used'))
                const isFound = usedItems.some(item => {
                    if (item.title === items.title) {
                        return true;
                    }
                    return false;
                });
                if (!isFound) {
                    if (usedItems.length > 2) {
                        usedItems.shift()
                    }
                    usedItems.push(items)
                    localStorage.setItem('used', JSON.stringify(usedItems))

                }
            } else {
                localStorage.setItem('used', JSON.stringify([items]))
            }
        }
    }
    return (
        <div onClick={addToUsed}>
            <div className="slider_card">
                <div className="top_section" style={{ alignItems: 'self-end', position: 'relative' }}>
                    <div className="image_section">
                        <img src={logo} alt='logo' />
                    </div>
                    {/* className="heart_icon_section" */}
                    <div style={{ position: 'absolute', border: '1px solid #000C3E', top: '0', right: '1rem', borderRadius: '50%', width: '25px', height: '25px', justifyContent: 'center', display: 'flex', alignItems: 'center', color: 'black' }}>
                        <i className="fa fa-heart"></i>
                    </div>
                    {externalLink ?
                        <a href={link} target='_blank' rel="noreferrer">
                            <Button style={{ backgroundColor: '#000C3E' }}>Launch</Button>
                        </a> :
                        <Link to={link}>
                            <Button style={{ backgroundColor: '#000C3E' }}>Launch</Button>
                        </Link>

                    }
                </div>
                <div className="bottom_section">
                    <h3 className='launch-h3'>{title}</h3>
                    <p>{description}</p>
                    <div className="rating_section d-flex align-items-baseline">
                        <h5 className="mb-0">5.0</h5>
                        <div className="star_section">
                            {Array(rating).fill(1).map(x => <span><i className="fa fa-star" aria-hidden="true"></i></span>)}
                        </div>
                    </div>
                    <Link to={title}>
                        <Button variant="dark" className='my-2'>Details</Button>

                    </Link>
                </div>
            </div>
        </div>
    )

}

export default Tool