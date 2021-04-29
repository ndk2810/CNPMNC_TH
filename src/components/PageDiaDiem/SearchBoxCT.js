import React from 'react'

const SearchBox = () => {
    return (
        <div className="search search-chiTiet">
            <img src="https://d1785e74lyxkqq.cloudfront.net/webxpe-desktop/_next/static/841107e3ee5dae66f6c15c41a74f5cce.svg" alt="search-logo" className="search-logo" />
            <input type="text" placeholder="Tìm hoạt động hoặc điểm đến" />
            <input type="submit" value=" " />
        </div>
    )
}

export default SearchBox
