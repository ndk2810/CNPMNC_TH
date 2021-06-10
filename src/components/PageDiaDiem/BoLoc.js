import React from 'react'
import { useState, useEffect } from 'react'
import server from '../../serverAddress'

const accordion = () => {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
}

const BoLoc = ({ filterTour }) => {
    //GET các thể loại tour từ server để load
    let [TheLoaiTour, setTheLoaiTour] = useState([])
    useEffect(() => {
        fetch(server + "/theLoaiTour")
            .then(data => {
                return data.json();
            })
            .then(data => {
                if (data.length > 0)
                    setTheLoaiTour(data)
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className="boLoc">
            <button class="accordion" onClick={accordion}>Tour</button>
            <div class="panel">
                <ul>
                    {TheLoaiTour.map(theLoai => {
                        return (
                            <li>
                                <input className='loc-key' type="checkbox" onClick={filterTour} value={theLoai.IDTheLoaiTour} />{theLoai.TenTheLoaiTour}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default BoLoc