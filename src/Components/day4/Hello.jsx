import React, { Component } from 'react'
import Fragment from './Fragment'
export default class Hello extends Component {
    render() {
        return (
            <table>
                <tbody>
                    <tr><Fragment/></tr>
                </tbody>
            </table>
        )
    }
}
