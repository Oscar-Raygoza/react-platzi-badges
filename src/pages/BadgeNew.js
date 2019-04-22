import React from 'react';

import Navbar from '../components/navbar'
import Badge from '../components/badge'
import BadgeForm from '../components/badgeForm'


import header from '../images/badge-header.svg'

import './styles/badgeNew.css'
class BadgeNew extends React.Component{
    render(){
        return (
            <div className="">
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt=""/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                             firstName="Oscar Eduardo" 
                             lastName="Raygoza"
                             jobTitle="Developer"
                             twitter="@OscarRaygoza98"
                             avatarUrl="https://www.gravatar.com/avatar?d=identicon"
                            />
                        </div>
            
                   
                        <div className="col-6">
                            <BadgeForm />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;