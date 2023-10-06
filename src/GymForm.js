import React, { useState } from 'react';

function GymForm(){

     return(
        <div className = 'gym-wrapper'>
            <div className = 'gym-area'>
                <h1>Climbing Gym</h1>
                <form gym-search-form>
                <div className="form-group">
                    <label for='gym-search-name' name = 'gym-search-name'>Glimbing Gym</label>
                    <input type = 'text' name = 'gym-search-name' placeholder = 'Gym Name' id='gym-search-name'/>
                </div>
                </form>
                <br/>
            </div>
            <div className = 'session-area'></div>
            <h1>Session Log</h1>
            <form gym-session>
            <div className="form-group">
                <label for='session-date' name='session-date'>Session Date</label>
                <input type = 'date' name='session-date' id='session-date'/>
            </div>
            <div className="form-group">
                <label for='session-title' name='session-title'>Session Title</label>
                <input type = 'text' name='session-title' id='session-title' placeholder='Session Title'/>
            </div>
            <div className="form-group">
                <label for='session-title' name='session-title'>Session Title</label>
                <input type = 'text' name='session-title' id='session-title' placeholder='Session Title'/>
            </div>
            <div className="form-group">
                <label for='session-length' name='session-length'>Session Length (Hours)</label>
                <input type = 'number' name='session-length' id='session-length'/>
            </div>
            <div className="form-group">
                <label for='session-type' name='session-type'>Session Type</label>
                <select name="session-type" id='session-type'>
                    <option value="1">Fun</option>
                    <option value="2">Exersice</option>
                    <option value="3">Training</option>
                    <option value="4">Competition</option>
                </select>
            </div>
            <div className="form-group">
                <label for='session-wall-type' name='session-wall-type'>Wall Type</label>
                <select name="session-wall-type" id='session-wall-type'>
                    <option value="1">Bouldering</option>
                    <option value="2">Lead Climb</option>
                    <option value="3">Ice Climb</option>
                    <option value="4">Training Board</option>
                    <option value="5">Self Build</option>
                </select>
            </div>
            <div className="form-group">
                <label for='session-diff' name='session-diff'>Wall Difficulty</label>
                <select name="session-diff" id='session-diff'>
                    <option value="1">Beginner/5.2 YDS/1 French</option>
                    <option value="2">Beginner/5.3 YDS/2 French</option>
                    <option value="3">Beginner/5.4 YDS/3 French</option>
                    <option value="4">Beginner/5.5 YDS/4 French</option>
                    <option value="5">Beginner/5.6 YDS/5a French</option>
                    <option value="6">Beginner/5.7 YDS/5b French</option>
                    <option value="7">Beginner/5.8 YDS/5c French</option>
                    <option value="8">Beginner/5.9 YDS/6a French</option>
                    <option value="9">Intermediate/5.10a YDS/6a+ French</option>
                    <option value="10">Intermediate/5.10b YDS/6a+ French</option>
                    <option value="11">Intermediate/5.10c YDS/6b French</option>
                    <option value="12">Intermediate/5.10d YDS/6b+ French</option>
                    <option value="13">Intermediate/5.11a YDS/6c French</option>
                    <option value="14">Intermediate/5.11b YDS/6c+ French</option>
                    <option value="15">Intermediate/5.11c YDS/7a French</option>
                    <option value="16">Intermediate/5.11d YDS/7a+ French</option>
                    <option value="17">Advanced/5.12a YDS/7b French</option>
                </select>
            </div>    
            <div className="form-group">
                <label for='session-attempts' name='session-attempts'>Attempted Climbs</label>
                <input type = 'number' name='session-attempts' id='session-attempts'/>
            </div>    
            <div className="form-group">
                <label for='session-complete' name='session-complete'>Completed Climbs</label>
                <input type = 'number' name='session-complete' id='session-complete'/>
            </div> 
            <div className="form-group">
                <label for='session-comments' name='session-comments'>Comments</label>
                <input type = 'textarea' name='session-comments' id='session-comments'/>
            </div> 
            </form>
            <br/>
        </div>
     )
}

export default GymForm;
