import * as React from 'react';

export class ActorInfoItem extends React.Component {
    render() {
        return (
            <div className="about" key={this.props.id}>
                <div className="page-actor-info__position">
                    <div className="page-actor-info__icon">{this.props.position}</div>
                    </div>
                <div className="page-actor-info__name-photo">
                    <div className="page-actor-info__photo"></div>
                    <div className="page-actor-info__name">{this.props.name}</div>
                </div>
                < div className="page-actor-info__career">{this.props.career}</div>
                <div className="page-actor-info__about">{this.props.about}</div>
                < div className="page-actor-info__was-born">
            < span className="page-actor-info__was-born-icon">
            < svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 24 24">
            < path
                d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
            />
                </svg>
            </span>
                    <span
                        className="page-actor-info__was-born-text">{this.props.date}</span>
                </div>
                <div className="line"></div>
            </div>
        )
    }
}