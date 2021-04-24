import React from 'react'

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

const BoLoc = () => {
    return (
        <div className="boLoc">
            <button class="accordion" onClick={accordion}>Tour</button>
            <div class="panel">
                <ul>
                    <li><input type="checkbox" />Thiên nhiên</li>
                    <li><input type="checkbox" />Ngắm cảnh</li>
                    <li><input type="checkbox" />Tour dưới nước</li>
                    <li><input type="checkbox" />Tour trên đất liền</li>
                    <li><input type="checkbox" />Tour ẩm thực</li>
                    <li><input type="checkbox" />Tour theo chủ đề</li>
                </ul>
            </div>
        </div>
    )
}

export default BoLoc