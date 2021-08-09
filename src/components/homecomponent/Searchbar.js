import React, { Component } from 'react';
import Background from '../image/background.jpg';
import styles from '../public/searchbar.module.css';

export default class Searchbar extends Component {
    render() {
        var sectionStyle = {
            height: "500px",
            backgroundImage: `url(${Background})`,
            backgroundSize: 'cover',
            overflow: 'hidden'

        };
        return (
            <div style={sectionStyle} >
                <div className={styles.mainbox} >
                    <div class="row">
                        <div class="col-sm-3"></div>
                        <div class="col-sm-6">
                            <div className={styles.box}>
                                <div>
                                    <h1 class="col-md-12 bg-secondary text-center text-white"> Search Tutor...</h1>
                                    <form class="row">
                                        <div class="col-md-2 ">
                                        </div>
                                        <div class="col-md-4 ">
                                            <label for="inputState" class="form-label">Subject</label>
                                            <select id="inputState" class="form-select">
                                                <option selected>Choose...</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                        <div class="col-md-4">
                                            <label for="inputZip" class="form-label">Zip</label>
                                            <input type="text" class="form-control" id="inputZip" />
                                        </div>
                                        <div class="col-md-2 ">
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3"></div>
                    </div>
                </div>

            </div>
        )
    }
}
