import React from 'react';
import './Home.css';

export const Home = () => {
    return (
        <div class="container-fluid">
            <row class="row pb-1">
                <column class="col-10">
                    <p class="body_text">My name is Zachary Huber and I am an aspiring Software Developer. I am currently in my senior year of a Bachelor's in Computer Science. My interests include Artificial Intelligence, Data Science, Graphics Programming, and much more. One of my greatest strengths is being able to learn new technologies.</p>
                    <p class="body_text">In my free time away from the desk I enjoy skiing, running, hiking, climbing, and going to concerts.</p>
                    <p class="body_text">This site isn't meant to be pretty. The purpose of it is to serve as a spot to show off all the projects I work on outside of school. Please feel free to get in touch if you have any ideas to expand my projects. I would love to collaborate!</p>                <h2 class="header">Contact Info</h2>
                    <p class="body_text">Email: keingtobin@gmail.com</p>
                    <p class="body_text">Github: <a href="https://github.com/Keingtobin" target="_blank" rel="noreferrer">https://github.com/Keingtobin</a></p>
                </column>
                <column class="col-2">

                </column>
            </row>
            
        </div>
    )
};