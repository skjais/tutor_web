import React, { Component } from 'react'

export default class footer extends Component {
    render() {
        return (
            <div>
                <div style={{ backgroundColor: "#2e86c1", height: 300 }}>
                    <h5 style={{ color: "white", textAlign: "center", fontSize: 50 }} >tutorfinder.in </h5>
                    <footer style={{ marginTop: 50 }} >
                        <div style={{ color: "white", textAlign: "center" }}>
                            <p>created by: sunil kumar jaiswal </p>
                            <p>Contact mail:
                                <ul>
                                    <li>
                                        skjaiswalnitk51@gmail.com
                                    </li>
                                    <li>
                                        sunil.181it148@nitk.edu.in
                                    </li>

                                </ul>
                            </p>

                        </div>
                        <div style={{ color: "white", textAlign: "center", backgroundColor: " #17202a", height: 60 }}>
                            <small >&copy; Copyright 2021 Love2Dev. All Rights Reserved</small>
                        </div>
                    </footer>
                </div>
            </div>

        )
    }
}