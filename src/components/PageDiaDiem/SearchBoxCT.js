import { useHistory } from "react-router-dom";

const SearchBox = () => {
    const history = useHistory()

    const timKiem = () => {
        const tuKhoaTimKiem = document.getElementById('tuKhoaTimKiem').value
        history.push("/timKiem?TenDiaDiem=" + tuKhoaTimKiem)
        window.location.reload()
    }
    return (
        <div className="search search-chiTiet">
            <img src="https://d1785e74lyxkqq.cloudfront.net/webxpe-desktop/_next/static/841107e3ee5dae66f6c15c41a74f5cce.svg" alt="search-logo" className="search-logo" />
            <input type="text" placeholder="Tìm hoạt động hoặc điểm đến" id="tuKhoaTimKiem" />
            <input type="submit" value=" " onClick={timKiem} />
        </div>
    )
}

export default SearchBox
