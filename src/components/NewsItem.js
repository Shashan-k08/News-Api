import React from 'react'

const NewsItem =(props)=> {


    
        let { title, description, imageurl, newsurl, date, author,source } = props;
        return (
            <div className="my-3" >
                <div className="card" style={{ width: "18rem" }}>
                    <img src={!imageurl ? "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_70/lsci/db/PICTURES/CMS/302000/302026.5.jpg" : imageurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%' ,zIndex:1}}>
                          {source}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className='card-text'><small className='text-muted'>By {!author ? "Unkown" : author} on {date}</small></p>
                        <a href={newsurl} target="-blank" className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    }


export default NewsItem
