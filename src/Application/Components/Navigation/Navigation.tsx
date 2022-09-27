import { ImLinkedin2 } from 'react-icons/im';
import { BiSearchAlt2 } from 'react-icons/bi';
import { RiUserSharedLine } from 'react-icons/ri';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
    const [inputValue, setInputValue] = useState('')
    const navigate = useNavigate()

    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const searchByName = useCallback(async () => {
        try {
            console.log(inputValue);
            navigate(`search/${inputValue}`)
            setInputValue('')
        } catch (e) {
            console.log(e);
        }
    }, [inputValue, navigate])

    return (
        <div className="Navigation">
            <div className="navTop">
                <div className="logotype">
                    <img src={require('../../../Images/logo.png')} alt="" />
                </div>
                <div className="search">
                    <input type="text" placeholder='Search movie...' value={inputValue} onChange={changeInput} />
                    <button onClick={searchByName}><BiSearchAlt2 /></button>
                </div>
                <div className="btnAndLinkedin">
                    <button className="linkedin"><ImLinkedin2 /></button>
                    <button className='signin'><RiUserSharedLine /> </button>
                </div>
            </div>
        </div>
    )
}

export default Navigation;