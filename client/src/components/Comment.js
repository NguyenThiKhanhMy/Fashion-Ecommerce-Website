import React from "react"

const Comments = () => {
    return (
        <>
            <li class="row my-3">
                <div className="d-flex align-items-start gap-4">
                    <div class="avatar-image col-md-2 col-4">
                        <img className="img-fluid avatar-image rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="image"/>
                    </div>
                    <div class="text-box col-md-10 col-8">
                        <h6 class="m-b-0">Jack </h6>
                        <p>Why are there so many tutorials on how to decouple WordPress? how fast and easy it is to get it running (and keep it running!) and its massive ecosystem. </p>
                        <div class="list-inline">
                            <p className="my-0 text-dark">Mar 09 2018</p>
                            <p><a className="text-dark" href="/">Reply</a></p>
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}

export default Comments;
